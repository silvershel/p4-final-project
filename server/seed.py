#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Event, Attendee

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        
        # Clear existing data
        User.query.delete()
        Event.query.delete()
        Attendee.query.delete()
        db.session.commit()

        # Seed Users
        users = []
        used_usernames = set()

        for i in range(10):
            username = fake.user_name()
            while username in used_usernames:
                username = fake.user_name()
            used_usernames.add(username)

            user = User(
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                username=username,
                # type=rc(['sheep', 'shepherd']),
                password=fake.password()
            )
            users.append(user)

        db.session.add_all(users)
        db.session.commit()
        print(f"Created {len(users)} users.")

        # Seed Events
        events = []
        for i in range(10):
            user = rc(users)
            event_name = f"{fake.company()} {rc(['Festival', 'Retreat', 'Local Meetup'])}"
            event = Event(
                name=event_name,
                # type=rc(['festival', 'retreat', 'local meetup']),
                start_date=fake.future_date(end_date=True),
                end_date=fake.future_date(end_date=True),
                user_id=user.id,
                website_link=fake.url()
            )
            events.append(event)

        db.session.add_all(events)
        db.session.commit()
        print(f"Created {len(events)} events.")

        # Seed Attendees
        attendees = []
        for event in events:
            for i in range(randint(3, 10)):
                user = rc(users)
                attendee = Attendee(
                    user_id=user.id,
                    event_id=event.id,
                    comment=fake.sentence()
                )
                attendees.append(attendee)

        db.session.add_all(attendees)
        db.session.commit()
        print(f"Created {len(attendees)} attendees.")

        print("Seeding complete.")