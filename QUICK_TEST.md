# ClubHub - Quick Testing Guide

## 🚀 Start Everything

### Terminal 1 - Backend:
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Terminal 2 - Frontend:
```bash
cd frontend
npm install
npm start
```

---

## ✅ Quick Tests

### 1. Backend API Test (http://localhost:8000)

Open these URLs in your browser:

| URL | What to expect |
|-----|----------------|
| http://localhost:8000/admin | Admin login page ✅ |
| http://localhost:8000/api/board/members/ | JSON list of board members ✅ |
| http://localhost:8000/api/events/ | JSON list of events ✅ |
| http://localhost:8000/api/events/stats/ | JSON with event statistics ✅ |

### 2. Frontend Test (http://localhost:3000)

| Page | URL | What to check |
|------|-----|---------------|
| **Home** | http://localhost:3000/ | Hero section, stats cards, upcoming events ✅ |
| **Board** | http://localhost:3000/board | Board member cards, search, filter ✅ |

---

## 🎯 Feature Checklist

### Home Page Features:
- [ ] Hero section with gradient background
- [ ] "Welcome to ClubHub" heading
- [ ] Two call-to-action buttons
- [ ] Two stat cards (upcoming events, total events)
- [ ] Upcoming events section
- [ ] Responsive on mobile (resize browser)

### Board Page Features:
- [ ] "Meet Our Board" heading
- [ ] Search bar (type and see real-time filtering)
- [ ] Role filter dropdown
- [ ] Board member cards with photos/initials
- [ ] Name, role chip, and bio on each card
- [ ] Social media icons (if links exist)
- [ ] Responsive grid layout

### Navigation:
- [ ] Navbar at top with ClubHub logo
- [ ] Home and Board links work
- [ ] Footer at bottom with social links

---

## 📝 Add Sample Data

After creating superuser, run:

```bash
python manage.py shell
```

Then paste:

```python
from board.models import BoardMember
from events.models import Event
from django.utils import timezone
from datetime import timedelta

BoardMember.objects.create(
    name="Sarah Johnson",
    role="president",
    bio="Computer Science major passionate about building community.",
    email="sarah@example.com",
    order=1
)

BoardMember.objects.create(
    name="Michael Chen",
    role="vice_president",
    bio="Software Engineering student who loves organizing events.",
    email="michael@example.com",
    order=2
)

Event.objects.create(
    title="Welcome Back Social",
    description="Join us for pizza and games!",
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

print("✅ Sample data created!")
exit()
```

Refresh your browser to see the data appear!

---

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| "Module not found" (Python) | Activate venv: `venv\Scripts\activate` |
| "Module not found" (Node) | Run `npm install` again |
| Backend port 8000 in use | Kill process or use different port |
| Frontend port 3000 in use | Choose different port when prompted |
| CORS errors | Check backend is running on port 8000 |
| No data showing | Add sample data via Django shell |

---

## 🎨 Customization Tips

### Change Theme Colors:
Edit `frontend/src/index.js` - modify the theme object

### Add More Board Members:
1. Go to http://localhost:8000/admin
2. Click "Board Members"
3. Click "Add Board Member"
4. Fill form and save

### Add More Events:
1. Go to http://localhost:8000/admin
2. Click "Events"
3. Click "Add Event"
4. Fill form and save

---

## ✨ What Works Now

✅ **Backend**:
- Django 5 with REST Framework
- Board Members CRUD via admin
- Events CRUD via admin
- RESTful API endpoints
- CORS configured for React
- SQLite database

✅ **Frontend**:
- React 18 with Material-UI
- React Router for navigation
- Home page with hero and stats
- Board page with search/filter
- Responsive design
- API integration with axios
- Clean, accessible UI

✅ **Features**:
- View board members
- Search members by name
- Filter members by role
- View upcoming events
- See event statistics
- Mobile responsive
- Professional design

---

## 📸 Screenshots to Verify

Take screenshots of:
1. Home page showing hero and stats
2. Board page showing member cards
3. Search functionality working
4. Mobile view (narrow browser window)
5. Admin panel showing data

---

## 🎯 Next Phase Preview

**Phase 2** will add:
- FAQ system with accordion UI
- Search functionality for FAQs
- Category filtering
- Admin management for FAQs

Ready to continue? Let me know!

---

**For detailed setup:** See [SETUP.md](./SETUP.md)
