@echo off
echo ========================================
echo   ClubHub - First Time Setup
echo ========================================
echo.
echo This will:
echo   1. Create virtual environment
echo   2. Install dependencies
echo   3. Set up database
echo   4. Create admin account
echo   5. Add sample data
echo.
pause

REM Create virtual environment
echo.
echo [1/5] Creating virtual environment...
python -m venv venv

echo.
echo [2/5] Activating and installing dependencies...
call venv\Scripts\activate
pip install -r requirements.txt

echo.
echo [3/5] Setting up database...
python manage.py makemigrations
python manage.py migrate

echo.
echo [4/5] Creating admin account...
echo.
echo Please create your admin account:
python manage.py createsuperuser

echo.
echo [5/5] Adding sample data...
python add_sample_data.py

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo   1. Run 'start_backend.bat' to start the server
echo   2. In another terminal, go to 'frontend' folder
echo   3. Run 'npm install' then 'npm start'
echo.
echo Admin login at: http://localhost:8000/admin
echo Website at: http://localhost:3000
echo.
pause
