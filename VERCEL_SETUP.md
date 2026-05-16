Vercel deployment and EmailJS setup
=================================

This project is ready to import from GitHub and deploy on Vercel as a static Vite app.

1. Import from GitHub
   - Open https://vercel.com/new
   - Choose your GitHub repository for this portfolio
   - Select the project and continue

2. Confirm the build settings
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Root directory: leave empty unless the repo is inside a subfolder

   The repository already includes `vercel.json`, so SPA routing is handled.

3. Add environment variables
   - In Vercel project settings > Environment Variables, add these values for Preview and Production:
     - `VITE_EMAILJS_SERVICE_ID` = your EmailJS service id
     - `VITE_EMAILJS_TEMPLATE_ID` = your EmailJS template id
     - `VITE_EMAILJS_PUBLIC_KEY` = your EmailJS public key

   - Get them from your EmailJS dashboard: https://www.emailjs.com/
   - Do not add these to git; keep them in Vercel and local `.env.local` only.

4. Deploy
   - Click Deploy in Vercel after the settings are confirmed
   - Vercel will build the app and publish it automatically

5. Verify the contact form
   - Open the deployed site
   - Submit the Contact form
   - If the EmailJS env vars are correct, the message will send successfully

Optional CLI deploy
-------------------

If you prefer the terminal:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Notes
-----
- This project uses EmailJS from the frontend (`src/components/Contact.tsx`), so no backend is required.
- The build already succeeds locally with `npm run build`.
