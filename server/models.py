from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship, validates

from config import db
import bcrypt

class User(db.Model):
    __tablename__ = 'users'

    # serialize_rules = ('-password',)

    id = db.Column(Integer, primary_key=True)
    # type = db.Column(String)
    first_name = db.Column(String)
    last_name = db.Column(String)
    username = db.Column(String, unique=True, nullable=False)
    password = db.Column(String, nullable=False)

    def __repr__(self):
        return f"<User {self.username}>"

    # relationships
    # events = db.relationship('Event', back_populates='user', cascade='all, delete-orphan')
    # attendees = db.relationship('Attendee', back_populates='user', cascade='all, delete-orphan')

    # @hybrid_property
    # def password_hash(self):
    #     raise AttributeError("Password hash can not be viewed.")
    
    # @password_hash.setter
    # def password_hash(self, password):
    #     password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
    #     self._password_hash = password_hash.decode('utf-8')

    # def authenticate(self, password):
    #     return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
    
    # @validates('_password_hash')
    # def validate_password_hash(self, key, _password_hash):
    #     if _password_hash == "":
    #         raise ValueError("Password cannot be empty.")
    #     return _password_hash
    
    # VALIDATIONS TO IMPLEMENT
    # limit event type options beased on user type
    # Username must be present and unique.


class Event(db.Model):
    __tablename__ = 'events'

    # serialize_rules = ('-user_id',)

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String, nullable=False)
    # type = db.Column(String)
    start_date = db.Column(Date, nullable=False)
    end_date = db.Column(Date, nullable=True)
    website_link = db.Column(String)
    user_id = db.Column(Integer, ForeignKey('users.id'), nullable=False)
    
    # relationships
    # user = db.relationship('User', back_populates='events')
    # attendees = db.relationship('Attendee', back_populates='event', cascade='all, delete-orphan')

    # VALIDATIONS TO IMPLEMENT
    # name must be present
    # type must be one of the following (festival, retreat, local meetup)
    # date validation? No end date means end date is start date.


class Attendee(db.Model):
    __tablename__ = 'attendees'

    # serialize_rules = ('-user_id', '-event_id',)

    id = db.Column(Integer, primary_key=True)
    comment = db.Column(String)
    user_id = db.Column(Integer, ForeignKey('users.id'), nullable=False)
    event_id = db.Column(Integer, ForeignKey('events.id'), nullable=False)

    # relationships
    # user = db.relationship('User', back_populates='attendees')
    # event = db.relationship('Event', back_populates='attendees')

