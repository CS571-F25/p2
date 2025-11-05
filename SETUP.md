# ClubHub - Phase 1 Setup Guide

## 🎯 What's Included in Phase 1

Phase 1 includes the foundation of ClubHub with:
- ✅ Django backend with REST API
- ✅ Board Members management (full CRUD via admin)
- ✅ Events system (basic structure for home page stats)
- ✅ React frontend with Material-UI
- ✅ Home page with hero section and event stats
- ✅ Board Members page with search and filter
- ✅ Responsive design and clean UI

---

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

1. **Python 3.8+** - [Download here](https://www.python.org/downloads/)
2. **Node.js 16+** - [Download here](https://nodejs.org/)
3. **pip** (comes with Python)
4. **npm** (comes with Node.js)

### Verify installations:
```bash
python --version
pip --version
node --version
npm --version
```

---

## 🚀 Backend Setup (Django)

### Step 1: Navigate to backend directory
```bash
cd backend
```

### Step 2: Create a virtual environment
**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**Mac/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

You should see `(venv)` in your terminal prompt.

### Step 3: Install Python dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Run database migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 5: Create a superuser (admin account)
```bash
python manage.py createsuperuser
```
Follow the prompts to create your admin account.

### Step 6: Create sample data (optional but recommended)
Open Python shell:
```bash
python manage.py shell
```

Then paste this code to create sample board members:
```python
from board.models import BoardMember
from events.models import Event
from django.utils import timezone
from datetime import timedelta

# Create sample board members
BoardMember.objects.create(
    name="Sarah Johnson",
    role="president",
    bio="Computer Science major passionate about building community and leading our club to new heights.",
    email="sarah@example.com",
    linkedin="https://linkedin.com",
    order=1
)

BoardMember.objects.create(
    name="Michael Chen",
    role="vice_president",
    bio="Software Engineering student with a love for organizing events and connecting people.",
    email="michael@example.com",
    github="https://github.com",
    order=2
)

BoardMember.objects.create(
    name="Emily Rodriguez",
    role="secretary",
    bio="Data Science enthusiast dedicated to keeping our club organized and efficient.",
    email="emily@example.com",
    order=3
)

BoardMember.objects.create(
    name="David Kim",
    role="treasurer",
    bio="Finance and CS double major managing our club's resources with care.",
    email="david@example.com",
    order=4
)

# Create sample events
Event.objects.create(
    title="Welcome Back Social",
    description="Join us for pizza and games to kick off the new semester!",
    event_type="social",
    date=timezone.now() + timedelta(days=7),
    location="Student Union, Room 201"
)

Event.objects.create(
    title="Python Workshop",
    description="Learn Python basics and build your first project.",
    event_type="workshop",
    date=timezone.now() + timedelta(days=14),
    location="Computer Lab 3"
)

Event.objects.create(
    title="Community Cleanup",
    description="Give back to our community by helping clean up the local park.",
    event_type="volunteering",
    date=timezone.now() + timedelta(days=21),
    location="Central Park"
)

print("Sample data created successfully!")
exit()
```

### Step 7: Start the Django development server
```bash
python manage.py runserver
```

The backend should now be running at **http://localhost:8000**

---

## 🎨 Frontend Setup (React)

### Open a NEW terminal (keep backend running)

### Step 1: Navigate to frontend directory
```bash
cd frontend
```

### Step 2: Install Node dependencies
```bash
npm install
```

This may take a few minutes.

### Step 3: Start the React development server
```bash
npm start
```

The frontend should automatically open in your browser at **http://localhost:3000**

---

## ✅ Testing Your Setup

### 1. Check the Backend API

Open your browser and visit these URLs:

- **Admin Panel**: http://localhost:8000/admin
  - Login with the superuser credentials you created
  - You should see Board Members and Events in the admin panel

- **API Endpoints**:
  - Board Members: http://localhost:8000/api/board/members/
  - Events: http://localhost:8000/api/events/
  - Event Stats: http://localhost:8000/api/events/stats/

You should see JSON data returned for each endpoint.

### 2. Check the Frontend

Visit **http://localhost:3000** and verify:

#### Home Page (/)
- ✅ Beautiful hero section with gradient background
- ✅ "Welcome to ClubHub" heading
- ✅ Two stat cards showing event counts
- ✅ Upcoming events section (shows events if you created sample data)
- ✅ Responsive layout (try resizing your browser)

#### Board Page (/board)
- ✅ "Meet Our Board" heading
- ✅ Search bar and role filter dropdown
- ✅ Board member cards in a grid
- ✅ Each card shows name, role, bio, and social links
- ✅ Try searching for a name
- ✅ Try filtering by role

### 3. Test Search and Filter

On the Board page:
1. Type a name in the search box - cards should filter in real-time
2. Select a role from the dropdown - only matching members show
3. Clear filters - all members should return

### 4. Check Responsive Design

Resize your browser window or use browser dev tools (F12):
- Desktop (>960px): 3 columns
- Tablet (600-960px): 2 columns
- Mobile (<600px): 1 column

---

## 🛠️ Troubleshooting

### Backend Issues

**"No module named 'django'"**
- Make sure your virtual environment is activated
- Run `pip install -r requirements.txt` again

**"Port 8000 already in use"**
- Kill the process using port 8000 or run on a different port:
  ```bash
  python manage.py runserver 8001
  ```
  Then update frontend API_BASE_URL

**"CORS errors"**
- Check that django-cors-headers is installed
- Verify settings.py has correct CORS configuration

### Frontend Issues

**"Cannot find module"**
- Delete `node_modules` folder and run `npm install` again

**"Failed to load data"**
- Make sure the Django backend is running on port 8000
- Check browser console (F12) for error messages
- Verify API URLs in `src/services/api.js`

**Port 3000 already in use**
- Kill the process or allow React to run on a different port when prompted

---

## 📁 Project Structure

```
p2/
├── backend/                    # Django backend
│   ├── clubhub/               # Main project settings
│   │   ├── settings.py        # Django configuration
│   │   └── urls.py            # API URL routing
│   ├── board/                 # Board members app
│   │   ├── models.py          # BoardMember model
│   │   ├── views.py           # API views
│   │   └── serializers.py     # Data serialization
│   ├── events/                # Events app
│   │   ├── models.py          # Event model
│   │   ├── views.py           # API views
│   │   └── serializers.py     # Data serialization
│   ├── accounts/              # User accounts (Phase 4)
│   ├── faq/                   # FAQ system (Phase 2)
│   ├── groups/                # Interest groups (Phase 4)
│   ├── manage.py              # Django CLI
│   └── requirements.txt       # Python dependencies
│
└── frontend/                   # React frontend
    ├── public/
    │   └── index.html         # HTML template
    ├── src/
    │   ├── components/        # Reusable components
    │   │   ├── Navbar.js      # Navigation bar
    │   │   └── Footer.js      # Footer
    │   ├── pages/             # Page components
    │   │   ├── HomePage.js    # Home page
    │   │   └── BoardPage.js   # Board members page
    │   ├── services/          # API integration
    │   │   └── api.js         # API client
    │   ├── App.js             # Main app component
    │   └── index.js           # Entry point
    └── package.json           # Node dependencies
```

---

## 🎯 What You Can Do Now

### As a User:
1. **Browse the home page** - See upcoming events and club stats
2. **Meet the board** - View board member profiles
3. **Search and filter** - Find specific board members by name or role

### As an Admin:
1. **Login to admin panel** at http://localhost:8000/admin
2. **Add/Edit Board Members**:
   - Go to Board → Board Members
   - Click "Add Board Member"
   - Fill in details and save
3. **Add/Edit Events**:
   - Go to Events → Events
   - Click "Add Event"
   - Fill in details and save
4. **Changes reflect immediately** on the frontend

---

## 📸 Adding Images

### Board Member Photos:
1. Login to admin panel
2. Edit a board member
3. Upload a photo in the "Photo" field
4. Images are stored in `backend/media/board_photos/`

### Event Images:
1. Login to admin panel
2. Edit an event
3. Upload an image in the "Image" field
4. Images are stored in `backend/media/event_images/`

---

## 🔒 Security Notes

⚠️ **This is a development setup. DO NOT use in production as-is!**

For production, you need to:
- Change SECRET_KEY in settings.py
- Set DEBUG=False
- Configure proper ALLOWED_HOSTS
- Use PostgreSQL instead of SQLite
- Set up proper CORS policies
- Use environment variables for secrets
- Configure HTTPS
- Set up proper authentication

---

## 🚦 Next Steps (Phase 2 & Beyond)

Phase 1 is complete! Here's what's coming next:

**Phase 2**: FAQ System with search
**Phase 3**: Full Events Hub with RSVP and calendar export
**Phase 4**: Authentication, user profiles, interest groups
**Phase 5**: Voting, comments, and community features
**Phase 6**: Accessibility polish and optimization

---

## 📞 Need Help?

If you run into issues:
1. Check the Troubleshooting section above
2. Verify both backend and frontend are running
3. Check browser console (F12) for error messages
4. Check Django terminal for error messages

---

## ✨ Summary

You now have a working ClubHub setup with:
- ✅ Working backend API
- ✅ Beautiful, responsive frontend
- ✅ Home page with stats and events
- ✅ Board members page with search/filter
- ✅ Admin panel for content management
- ✅ Clean, accessible design

**Happy coding! 🎉**
