# Sriram — Developer Portfolio

A responsive modern-dark portfolio built with React, Vite and plain CSS.

## Run locally

1. Install Node.js (LTS).
2. Extract this project folder.
3. Open a terminal in the project folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Create a production build

```bash
npm run build
npm run preview
```

## Personalize before sharing with recruiters

- Confirm all dates, job titles, education details and project descriptions.
- Add your own profile photo if you want one (the current design uses a code illustration).
- Add your LinkedIn profile URL in `src/App.jsx` once you have the correct URL.
- Add a real deployed Boeing Travels demo URL when available.
- Add a PDF resume to `public/` and link it from the Resume section if desired. The current page intentionally does not invent a resume download.
- Update project links if your repositories change.

## Deploy

You can deploy the `dist` folder after `npm run build` to Vercel, Netlify or GitHub Pages. For Vercel/Netlify, importing the GitHub repository and using the default Vite build settings is usually easiest.
