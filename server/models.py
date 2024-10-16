from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Model(db.Integer, primary_key=True)
    # type
        # shepherd: commercial. can organize events, retreats, and local meetups
        # sheep: standard. can organize local meetups
    # first_name
    # last_name
    # profile_image (pre-set based on type)
    # location (postal code. start with zip - used to match nearby events)
    username = db.Model(db.String, unique=True)
    password = db.Model(db.String, nullable=False)

    # add relationship to event
    # add relationship to attendee

    # username validation
            # Must be unique
            # Must be a string

    # password validation
        # must be at least 8 characters, contain one number, and contain one special character.

class Event(db.Model, SerializerMixin):
    __tablename__ = 'events'

    id = db.Model(db.Integer, primary_key=True)
    name = db.Model(db.String)
    # type (festival, retreat, local meetup)
    # location (venue name, street, city, state, zip, country)
    # start date
        # validation - must me MM/DD/YYYY format
    # end date (optional)
        # validation - must me MM/DD/YYYY format
    # time (stretch - add times for each day)
    link = db.Model(db.String)
    # privacy (public, private)
    # user_id (foreign key)
    
    # add relationship to user
    # add relationship to attendee

class Attendee(db.Model, SerializerMixin):
    __tablename__ = 'attendees'

    id = db.Model(db.Integer, primary_key=True)
    # comment (REQUIREMENT - one submittable attribute)
    # event_id (foreign_key)
    # user_id (foreign_key)

    # add relationship to user
    # add relationship to event

