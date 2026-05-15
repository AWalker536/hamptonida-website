# HamptonIda Advisory Group Website

This is a deployable React/Vite landing page for HamptonIda Advisory Group.

## What to replace before launch

Place these files in `public/assets/`:

1. `hamptonida-logo.png`  
   - Your HamptonIda brand logo.

2. `april-headshot.jpg`  
   - Your professional headshot.

3. `executive-profile.pdf`  
   - Optional downloadable executive profile PDF.

Then open `src/App.jsx` and update:

```js
const contactEmail = 'contact@hamptonida.com'
const linkedInUrl = 'https://www.linkedin.com/in/YOUR-LINKEDIN-PROFILE'
```

## How to run locally

```bash
npm install
npm run dev
```

## How to deploy on Vercel

1. Upload this project to a GitHub repository named `hamptonida-website`.
2. Go to Vercel and choose **New Project**.
3. Import the GitHub repository.
4. Click **Deploy**.
5. In Vercel, go to **Settings > Domains** and add your HamptonIda domain.
6. Update DNS records wherever your domain is registered.

## Notes

This is intentionally a focused one-page executive advisory site. You can later add:
- Insights page
- Speaking page
- HamptonIda Studios
- downloadable white papers
- contact form
