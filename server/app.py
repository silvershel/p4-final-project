#!/usr/bin/env python3

from flask import request, session, jsonify
from flask_restful import Resource
from config import app, db, api
from models import User, Event, Attendee
from datetime import datetime

# Views go here!        
class Signup(Resource):
    def post(self):
        data = request.get_json()
        
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        username = data.get('username')
        password = data.get('password')

        errors = {}

        if not username:
            errors['username'] = 'Username error.'
        if not password:
            errors['password'] = 'Password error.'
        
        if errors:
            return {'errors': errors}, 422
            
        new_user = User(
            first_name = first_name,
            last_name = last_name,
            username = username,
            password = password
        )

        try:
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id

            return new_user.to_dict(), 201
        
        except Exception:
            return {'message': 'Signup error'}, 422
    
class CheckSession(Resource):
    def get(self):
        try:
            user_id = session.get('user_id')

            if user_id:
                user = User.query.get(user_id)
                if user:
                    return user.to_dict(), 200
                else:
                    return {'message': 'User not found in session.'}, 404
            else:
                return {'message': 'No user in session.'}, 401

        except Exception as e:
            return {'message': 'Internal server error', 'error': str(e)}, 500

class Login(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return {'message': 'Username and password are required'}, 400

        user = User.query.filter(User.username == username).first()

        if user:
            session['user_id'] = user.id
            return user.to_dict(), 200
        else:
            return {"error": "Login unsuccessful"}, 401

class Logout(Resource):
    def delete(self):
        if session.get('user_id'):
            session.pop('user_id')
            return {}, 204
        else:
            return {'error': 'No user logged in'}, 400

class Events(Resource):
    def get(self):
        try:
            events = [event.to_dict() for event in Event.query.all()]
            return jsonify(events)

        except Exception as e:
            return {'error': str(e) + "error getting event list."}, 422
                
    def post(self):
        data = request.get_json()
        
        name = data.get('name')
        start_date_str = data.get('start_date')
        end_date_str = data.get('end_date')
        website_link = data.get('website_link')
        user_id = data.get('user_id')

        start_date = datetime.strptime(start_date_str, '%Y-%m-%d').date() if start_date_str else None
        end_date = datetime.strptime(end_date_str, '%Y-%m-%d').date() if end_date_str else None

        if not name or not start_date or not end_date:
            return {'message': 'Missing required fields'}, 400
        
        new_event = Event(
            name = name,
            start_date = start_date,
            end_date = end_date,
            website_link = website_link,
            user_id = user_id
        )

        try:
            db.session.add(new_event)
            db.session.commit()
            return new_event.to_dict(), 201
        
        except Exception as e:
            return {'message': str(e)}, 500
        
class EventById(Resource):
    def get(self, event_id):
        event = Event.query.get(event_id)
        if event:
            return event.to_dict(), 200
        else:
            return {'message': 'Event not found'}, 404

    def patch(self, event_id):
        data = request.get_json()

        event = Event.query.get(event_id)
        if not event:
            return {'message': 'Event not found'}, 404
        
        if 'name' in data:
            event.name = data['name']
        if 'start_date' in data:
            event.start_date = datetime.strptime(data['start_date'], '%Y-%m-%d').date()
        if 'end_date' in data:
            event.end_date = datetime.strptime(data['end_date'], '%Y-%m-%d').date()
        if 'website_link' in data:
            event.website_link = data['website_link']

        try:
            db.session.commit()
            return event.to_dict(), 200
        except Exception as e:
            db.session.rollback()
            return {'message': 'Error updating event', 'error': str(e)}, 422
        
    def delete(self, event_id):
        event = Event.query.get(event_id)
        if not event:
            return {'message': 'Event not found'}, 404
        db.session.delete(event)
        db.session.commit()
        return {'message': 'Event deleted'}, 200



api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(Events, '/events', endpoint='events')
api.add_resource(EventById, '/events/<int:event_id>', endpoint='event')

# imported with project template
@app.route('/')
def index():
    return '<h1>Project Server</h1>'

if __name__ == '__main__':
    app.run(port=5555, debug=True)

