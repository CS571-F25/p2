@echo off
echo ========================================
echo   Adding Sample Data to ClubHub
echo ========================================
echo.

echo Activating virtual environment...
call venv\Scripts\activate

echo.
echo Running sample data script...
python add_sample_data.py

echo.
echo ========================================
echo   Done! Data has been added.
echo ========================================
echo.
echo Press any key to close...
pause > nul
