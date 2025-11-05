@echo off
echo ========================================
echo   Starting ClubHub Backend
echo ========================================
echo.

REM Check if virtual environment exists
if not exist "venv\" (
    echo Creating virtual environment...
    python -m venv venv
    echo.
)

echo Activating virtual environment...
call venv\Scripts\activate

echo.
echo Installing/updating dependencies...
pip install -r requirements.txt --quiet

echo.
echo Running database migrations...
python manage.py makemigrations
python manage.py migrate

echo.
echo ========================================
echo   Backend server starting...
echo   Access at: http://localhost:8000
echo   Admin at: http://localhost:8000/admin
echo ========================================
echo.
python manage.py runserver

pause
