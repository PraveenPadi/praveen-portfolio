@echo off
echo Initializing Git Repository...
git init
if %errorlevel% neq 0 (
    echo Error: Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/downloads and try again.
    pause
    exit /b
)

echo Adding files...
git add .

echo Committing files...
git commit -m "Initial commit: Portfolio Website"

echo.
echo Success! Your project is now a Git repository.
echo To push to GitHub:
echo 1. Create a new repository on GitHub.
echo 2. Run: git remote add origin <your-repo-url>
echo 3. Run: git push -u origin main
echo.
pause
