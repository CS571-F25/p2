"""
Script to add sample data to ClubHub database.
Run this after setting up the database: python manage.py shell < add_sample_data.py
OR: python add_sample_data.py
"""

import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'clubhub.settings')
django.setup()

from board.models import BoardMember
from events.models import Event
from django.utils import timezone
from datetime import timedelta

def add_sample_data():
    print("=" * 50)
    print("  Adding Sample Data to ClubHub")
    print("=" * 50)
    print()

    # Clear existing data
    print("Clearing existing data...")
    BoardMember.objects.all().delete()
    Event.objects.all().delete()
    print("✓ Cleared\n")

    # Create Board Members
    print("Creating Board Members...")

    board_members = [
        {
            'name': 'Sarah Johnson',
            'role': 'president',
            'bio': 'Computer Science major passionate about building community and leading our club to new heights. I love organizing events and bringing people together to learn and grow.',
            'email': 'sarah.johnson@university.edu',
            'linkedin': 'https://linkedin.com/in/sarahjohnson',
            'github': 'https://github.com/sarahjohnson',
            'order': 1
        },
        {
            'name': 'Michael Chen',
            'role': 'vice_president',
            'bio': 'Software Engineering student with a love for organizing events and connecting people. I enjoy helping members achieve their goals and creating memorable experiences.',
            'email': 'michael.chen@university.edu',
            'github': 'https://github.com/michaelchen',
            'twitter': 'https://twitter.com/michaelchen',
            'order': 2
        },
        {
            'name': 'Emily Rodriguez',
            'role': 'secretary',
            'bio': 'Data Science enthusiast dedicated to keeping our club organized and efficient. I ensure smooth communication and proper documentation of all our activities.',
            'email': 'emily.rodriguez@university.edu',
            'linkedin': 'https://linkedin.com/in/emilyrodriguez',
            'order': 3
        },
        {
            'name': 'David Kim',
            'role': 'treasurer',
            'bio': 'Finance and CS double major managing our club\'s resources with care. I work to ensure we have the budget to make amazing events happen for our members.',
            'email': 'david.kim@university.edu',
            'linkedin': 'https://linkedin.com/in/davidkim',
            'order': 4
        },
        {
            'name': 'Aisha Patel',
            'role': 'event_coordinator',
            'bio': 'Event planning enthusiast who loves bringing creative ideas to life. From workshops to social events, I ensure every gathering is engaging and valuable.',
            'email': 'aisha.patel@university.edu',
            'twitter': 'https://twitter.com/aishapatel',
            'order': 5
        },
        {
            'name': 'James Wilson',
            'role': 'marketing',
            'bio': 'Marketing Director focused on spreading the word about our amazing club. I manage our social media, design promotional materials, and help grow our community.',
            'email': 'james.wilson@university.edu',
            'linkedin': 'https://linkedin.com/in/jameswilson',
            'twitter': 'https://twitter.com/jameswilson',
            'order': 6
        },
        {
            'name': 'Sophia Martinez',
            'role': 'member',
            'bio': 'Board member specializing in community outreach and partnerships. I work on building relationships with other organizations and creating collaboration opportunities.',
            'email': 'sophia.martinez@university.edu',
            'linkedin': 'https://linkedin.com/in/sophiamartinez',
            'order': 7
        },
        {
            'name': 'Ryan Thompson',
            'role': 'member',
            'bio': 'Tech enthusiast and board member focused on our technical infrastructure. I help maintain our website, manage our tech resources, and provide technical support.',
            'email': 'ryan.thompson@university.edu',
            'github': 'https://github.com/ryanthompson',
            'order': 8
        }
    ]

    for member_data in board_members:
        member = BoardMember.objects.create(**member_data)
        print(f"  ✓ Created: {member.name} - {member.get_role_display()}")

    print(f"\n✓ Created {len(board_members)} board members\n")

    # Create Events
    print("Creating Events...")

    events = [
        {
            'title': 'Welcome Back Social',
            'description': 'Join us for pizza, games, and networking to kick off the new semester! Meet fellow members, learn about upcoming events, and enjoy some free food. This is a great opportunity to make new friends and reconnect with the club community.',
            'event_type': 'social',
            'date': timezone.now() + timedelta(days=3),
            'end_date': timezone.now() + timedelta(days=3, hours=2),
            'location': 'Student Union, Room 201',
            'max_attendees': 50
        },
        {
            'title': 'Python Workshop: Getting Started',
            'description': 'Learn Python basics and build your first project! Perfect for beginners. We\'ll cover variables, functions, loops, and create a simple program together. Bring your laptop and enthusiasm!',
            'event_type': 'workshop',
            'date': timezone.now() + timedelta(days=7),
            'end_date': timezone.now() + timedelta(days=7, hours=3),
            'location': 'Computer Lab 3, Engineering Building',
            'max_attendees': 30
        },
        {
            'title': 'Community Park Cleanup',
            'description': 'Give back to our community by helping clean up Central Park! We\'ll provide all supplies - just bring your energy and a positive attitude. Community service hours available.',
            'event_type': 'volunteering',
            'date': timezone.now() + timedelta(days=10),
            'end_date': timezone.now() + timedelta(days=10, hours=4),
            'location': 'Central Park, Main Entrance',
            'max_attendees': 40
        },
        {
            'title': 'Web Development Bootcamp',
            'description': 'Intensive full-day workshop covering HTML, CSS, and JavaScript. Build a complete website from scratch! Perfect for those wanting to learn web development or improve their skills.',
            'event_type': 'workshop',
            'date': timezone.now() + timedelta(days=14),
            'end_date': timezone.now() + timedelta(days=14, hours=6),
            'location': 'Computer Lab 1, Engineering Building',
            'max_attendees': 25
        },
        {
            'title': 'Game Night Extravaganza',
            'description': 'Unwind with board games, video games, and friendly competition! We\'ll have a variety of games available, snacks provided, and prizes for winners. All skill levels welcome!',
            'event_type': 'social',
            'date': timezone.now() + timedelta(days=17),
            'end_date': timezone.now() + timedelta(days=17, hours=3),
            'location': 'Recreation Center, Game Room',
            'max_attendees': 60
        },
        {
            'title': 'Career Panel: Tech Industry Insights',
            'description': 'Hear from alumni working at top tech companies! Learn about their career paths, get advice on interviews, and network with professionals. Q&A session included.',
            'event_type': 'meeting',
            'date': timezone.now() + timedelta(days=21),
            'end_date': timezone.now() + timedelta(days=21, hours=2),
            'location': 'Auditorium, Business School',
            'max_attendees': 100
        },
        {
            'title': 'Hackathon 2025: Build the Future',
            'description': '24-hour hackathon! Form teams, build amazing projects, and compete for prizes. Food, drinks, and mentorship provided throughout. All majors and skill levels welcome!',
            'event_type': 'workshop',
            'date': timezone.now() + timedelta(days=28),
            'end_date': timezone.now() + timedelta(days=29),
            'location': 'Innovation Hub, Tech Center',
            'max_attendees': 80
        },
        {
            'title': 'Study Hall & Exam Prep',
            'description': 'Collaborative study session with free snacks and tutoring! Bring your textbooks, assignments, or questions. Peer tutors available for CS, Math, and Engineering subjects.',
            'event_type': 'meeting',
            'date': timezone.now() + timedelta(days=35),
            'end_date': timezone.now() + timedelta(days=35, hours=4),
            'location': 'Library, Group Study Room A',
            'max_attendees': 40
        },
        {
            'title': 'Food Bank Volunteer Day',
            'description': 'Help sort and distribute food at the local food bank. Make a real difference in our community! Transportation provided from campus. Community service hours available.',
            'event_type': 'volunteering',
            'date': timezone.now() + timedelta(days=42),
            'end_date': timezone.now() + timedelta(days=42, hours=5),
            'location': 'City Food Bank, 123 Community St',
            'max_attendees': 30
        },
        {
            'title': 'End of Semester Celebration',
            'description': 'Celebrate a successful semester with food, music, awards, and fun! Recognize outstanding members, share memories, and look forward to next semester. Everyone is welcome!',
            'event_type': 'social',
            'date': timezone.now() + timedelta(days=49),
            'end_date': timezone.now() + timedelta(days=49, hours=3),
            'location': 'Student Union Ballroom',
            'max_attendees': 150
        }
    ]

    for event_data in events:
        event = Event.objects.create(**event_data)
        print(f"  ✓ Created: {event.title} ({event.get_event_type_display()})")

    print(f"\n✓ Created {len(events)} events\n")

    print("=" * 50)
    print("  Sample Data Added Successfully!")
    print("=" * 50)
    print()
    print("Summary:")
    print(f"  • {BoardMember.objects.count()} Board Members")
    print(f"  • {Event.objects.count()} Events")
    print()
    print("You can now:")
    print("  1. View the website at http://localhost:3000")
    print("  2. Access admin at http://localhost:8000/admin")
    print("  3. Edit/add more data through the admin panel")
    print()

if __name__ == '__main__':
    add_sample_data()
