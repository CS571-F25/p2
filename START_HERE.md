# 🚀 ClubHub - Start Here!

## Super Easy Setup (First Time Only)

### Step 1: First Time Setup (Do this once)

1. Open **Command Prompt** or **Terminal**
2. Navigate to the project:
   ```bash
   cd "D:\ANURAG\USA\Wisconsin\UNIVERSITY OF WISCONSIN-MADISON\Classes\Fall 2025\COMPSCI 571\Anurag\p2"
   ```

3. Go to backend folder:
   ```bash
   cd backend
   ```

4. **Double-click** `setup_first_time.bat`

   OR run in terminal:
   ```bash
   setup_first_time.bat
   ```

5. When asked to create a superuser:
   - **Username**: admin (or whatever you want)
   - **Email**: your-email@example.com (can be fake)
   - **Password**: admin123 (or whatever you want)
   - **Password confirmation**: (same as above)

6. Wait for it to finish. You'll see:
   - ✓ Virtual environment created
   - ✓ Dependencies installed
   - ✓ Database set up
   - ✓ Admin account created
   - ✓ Sample data added (8 board members, 10 events)

---

## Starting ClubHub (Every Time)

### Method 1: Using the Start Scripts (EASIEST!)

#### Terminal 1 - Start Backend:
1. Open **Command Prompt**
2. Navigate to backend:
   ```bash
   cd "D:\ANURAG\USA\Wisconsin\UNIVERSITY OF WISCONSIN-MADISON\Classes\Fall 2025\COMPSCI 571\Anurag\p2\backend"
   ```
3. **Double-click** `start_backend.bat`

   OR run:
   ```bash
   start_backend.bat
   ```

4. Wait until you see:
   ```
   Starting development server at http://127.0.0.1:8000/
   ```

#### Terminal 2 - Start Frontend:
1. Open a **NEW Command Prompt** (keep the first one running!)
2. Navigate to frontend:
   ```bash
   cd "D:\ANURAG\USA\Wisconsin\UNIVERSITY OF WISCONSIN-MADISON\Classes\Fall 2025\COMPSCI 571\Anurag\p2\frontend"
   ```
3. **Double-click** `start_frontend.bat`

   OR run:
   ```bash
   start_frontend.bat
   ```

4. Your browser will automatically open to http://localhost:3000

---

### Method 2: Manual Commands

#### Terminal 1 - Backend:
```bash
cd backend
venv\Scripts\activate
python manage.py runserver
```

#### Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

---

## 🎉 What You Should See

### Frontend (http://localhost:3000):

**Home Page**:
- Beautiful purple gradient hero section
- "Welcome to ClubHub" with mission statement
- 2 colorful stat cards (showing event counts)
- Grid of upcoming events

**Board Page** (click "Board" in nav):
- "Meet Our Board" heading
- 8 board member cards with names, roles, and bios
- Search bar (try searching "Sarah")
- Role filter dropdown (try filtering by "President")

### Backend Admin (http://localhost:8000/admin):
- Login with your admin credentials
- You can add/edit/delete:
  - Board Members
  - Events
  - User Profiles

---

## ✅ Testing Everything Works

### 1. Test the Backend API:

Open these URLs in your browser:
- http://localhost:8000/api/board/members/ ← Should show JSON list
- http://localhost:8000/api/events/ ← Should show JSON list
- http://localhost:8000/api/events/stats/ ← Should show stats

### 2. Test the Frontend:

**Home Page** (http://localhost:3000/):
- [ ] See hero section
- [ ] See 2 stat cards
- [ ] See upcoming events (should show 10 events)

**Board Page** (http://localhost:3000/board):
- [ ] See 8 board member cards
- [ ] Type "Sarah" in search → should filter to Sarah Johnson
- [ ] Select "President" from dropdown → should show only Sarah
- [ ] Clear filters → all 8 members return

### 3. Test Admin Panel:

1. Go to http://localhost:8000/admin
2. Login with your admin account
3. Click "Board Members" → you should see 8 members
4. Click "Events" → you should see 10 events
5. Try editing one → changes appear on frontend immediately!

---

## 📊 Sample Data Included

### 8 Board Members:
1. **Sarah Johnson** - President
2. **Michael Chen** - Vice President
3. **Emily Rodriguez** - Secretary
4. **David Kim** - Treasurer
5. **Aisha Patel** - Event Coordinator
6. **James Wilson** - Marketing Director
7. **Sophia Martinez** - Board Member
8. **Ryan Thompson** - Board Member

### 10 Events:
1. Welcome Back Social (3 days from now)
2. Python Workshop (7 days from now)
3. Community Park Cleanup (10 days from now)
4. Web Development Bootcamp (14 days from now)
5. Game Night Extravaganza (17 days from now)
6. Career Panel (21 days from now)
7. Hackathon 2025 (28 days from now)
8. Study Hall & Exam Prep (35 days from now)
9. Food Bank Volunteer Day (42 days from now)
10. End of Semester Celebration (49 days from now)

---

## 🛠️ Troubleshooting

### "Command not found" or "python not recognized"
- Make sure Python is installed: https://www.python.org/downloads/
- Make sure it's added to PATH during installation

### Backend won't start
1. Make sure you're in the `backend` folder
2. Make sure virtual environment is activated (you should see `(venv)` in terminal)
3. Try: `venv\Scripts\activate` then `python manage.py runserver`

### Frontend won't start
1. Make sure you're in the `frontend` folder
2. Make sure Node.js is installed: https://nodejs.org/
3. Try: `npm install` then `npm start`

### "Port already in use"
- Backend: Close any other programs using port 8000
- Frontend: Close any other programs using port 3000
- Or choose a different port when prompted

### Can't see data on frontend
1. Make sure backend is running (check http://localhost:8000/api/board/members/)
2. Make sure you added sample data (run `add_data.bat` again)
3. Refresh the browser (Ctrl+R or Cmd+R)

### Need to add data again
```bash
cd backend
venv\Scripts\activate
python add_sample_data.py
```

---

## 🎨 Adding Your Own Data

### Through Admin Panel (Easiest):
1. Go to http://localhost:8000/admin
2. Login
3. Click "Board Members" → "Add Board Member"
4. Fill in the form and save
5. Refresh frontend to see changes!

### Through Script:
Edit `backend/add_sample_data.py` and run:
```bash
cd backend
venv\Scripts\activate
python add_sample_data.py
```

---

## 📸 Adding Photos

1. Login to admin: http://localhost:8000/admin
2. Click "Board Members"
3. Click on a member's name
4. Click "Choose File" under Photo
5. Upload an image
6. Click "Save"
7. Refresh frontend - photo appears!

---

## 🚫 Stopping Everything

### To stop the servers:
- Press **Ctrl+C** in each terminal window
- Or just close the terminal windows

---

## 🎯 Quick Reference

| What | Where | URL |
|------|-------|-----|
| Frontend | Browser | http://localhost:3000 |
| Backend API | Browser | http://localhost:8000/api/ |
| Admin Panel | Browser | http://localhost:8000/admin |
| Board Members API | Browser | http://localhost:8000/api/board/members/ |
| Events API | Browser | http://localhost:8000/api/events/ |

---

## 📁 Useful Files

| File | What it does |
|------|--------------|
| `backend/setup_first_time.bat` | First time setup (run once) |
| `backend/start_backend.bat` | Start backend server |
| `backend/add_data.bat` | Add sample data |
| `frontend/start_frontend.bat` | Start frontend server |

---

## ✨ You're All Set!

Your ClubHub is ready to use! 🎉

**Next steps:**
1. Explore the website
2. Try the search and filter features
3. Add your own board members and events in the admin panel
4. Customize colors in `frontend/src/index.js`

**Need help?** Check [SETUP.md](./SETUP.md) for detailed documentation!

---

**Have fun building your club portal! 🚀**
