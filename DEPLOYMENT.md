# 🚀 Deployment Guide

Here is how you can easily publish your new portfolio website for free.

## Option 1: Netlify Drop (Easiest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop your **Portfolio** folder into the browser window.
3. Your site will be online in seconds!
4. You can change your site name in "Site Settings" -> "Change site name" (e.g., `praveen-padi-portfolio.netlify.app`).

## Option 2: GitHub Pages
1. Create a new repository on GitHub (e.g., `portfolio`).
2. Upload your files (`index.html`, `style.css`, `main.js`, and the `public` folder) to the repository.
3. Go to **Settings** -> **Pages**.
4. Under **Source**, select `main` branch and `/ (root)` folder.
5. Click **Save**. Your site will be live at `yourusername.github.io/portfolio`.

## Option 3: Run Locally
If you want to preview the site with a proper local server:
1. Open your terminal in the project folder.
2. Run:
   ```bash
   npx serve .
   ```
3. Open the link shown (usually `http://localhost:3000`).
