#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, jsonify
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Event, Attendee

# @app.before_request()
# def check_session():
#     pass

# Views go here!
class Signup(Resource):
    def post(self):
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        username = data.get('username')
        password = data.get('password')
            
        new_user = User(
            first_name = first_name,
            last_name = last_name,
            username = username,
            password = password
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User created successfully."}), 201

class Login(Resource):
    def get(self):
        pass

class Logout(Resource):
    def delete(self):
        pass

class CheckSession(Resource):
    pass

class Event_List(Resource):
    def get(self):
        pass

    def post(self):
        pass

    def update(self):
        pass
    
    def delete(self):
        pass

api.add_resource(Signup, '/signup', endpoint='signup')
# api.add_resource(Login, '/login', endpoint='login')
# api.add_resource(Logout, '/logout', endpoint='logout')
# api.add_resource(CheckSession, '/check_session', endpoint='check_session')
# api.add_resource(Event_List, '/events', endpoint='events')

# imported with project template
@app.route('/')
def index():
    return '<h1>Project Server</h1>'

if __name__ == '__main__':
    app.run(port=5555, debug=True)

