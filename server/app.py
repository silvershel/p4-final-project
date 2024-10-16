#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Event, Attendance

@app.before_request()
def check_session():
    pass

# Views go here!
class Signup(Resource):
    def post(self):
        pass

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

# imported with project template
@app.route('/')
def index():
    return '<h1>Project Server</h1>'

app.add_resource(Signup, '/signup', endpoint='signup')
app.add_resource(Login, '/login', endpoint='login')
app.add_resource(Logout, '/logout', endpoint='logout')
app.add_resource(CheckSession, '/check_session', endpoint='check_session')
app.add_resource(Event_List, '/events', endpoint='events')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

