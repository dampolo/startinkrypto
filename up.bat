@echo off
chcp 65001 >nul

git pull
git add .
git commit -m "%*"
git push
echo ✅ Changes added to GitHub successfully! 🚀