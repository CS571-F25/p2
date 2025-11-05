@echo off
echo ========================================
echo   Starting ClubHub Frontend
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    echo This may take a few minutes...
    echo.
    call npm install
    echo.
)

echo Starting React development server...
echo.
echo ========================================
echo   Frontend will open in your browser
echo   at: http://localhost:3000
echo ========================================
echo.

call npm start

pause
