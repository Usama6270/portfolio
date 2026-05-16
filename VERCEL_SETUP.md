Vercel deployment and EmailJS setup
=================================

Follow these steps to deploy this Vite React portfolio to Vercel and ensure the contact form sends emails via EmailJS.

1. Create a Vercel project
   - Go to https://vercel.com and create a new project.
   - Import this Git repository or use the Vercel CLI from the project folder.

2. Environment variables (required)
   - In the Vercel project settings > Environment Variables, add the following variables for all environments you want (Preview/Production):
     - `VITE_EMAILJS_SERVICE_ID` = <your EmailJS service id>
     - `VITE_EMAILJS_TEMPLATE_ID` = <your EmailJS template id>
     - `VITE_EMAILJS_PUBLIC_KEY` = <your EmailJS public key>

   - These values come from your EmailJS dashboard (https://www.emailjs.com/).

3. Build & Deploy
   - Vercel will run `npm run build` (this project already has a `build` script).
   - The `vercel.json` in the repository configures the static build and SPA routing.

   Using Vercel CLI (optional):

   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

4. Verify contact form
   - After deployment, open the site and submit the contact form in the `Contact` section.
   - If EmailJS is correctly configured and the env vars are set, you should receive the message at the destination configured in your EmailJS template.

Notes
-----
- This project currently uses EmailJS via the frontend (`src/components/Contact.tsx`). No server is required.
- Do not commit EmailJS keys to source control. Use Vercel Environment Variables to keep them secret.
