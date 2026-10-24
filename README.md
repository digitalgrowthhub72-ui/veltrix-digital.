# Veltrix Digital website

Static site (HTML, CSS, JS) - no build step.

## Edit content
Open `site-data.js`: WhatsApp number, links, portfolio items and testimonials.

### Add a portfolio image
1. Copy the image into `assets/portfolio/` (e.g. `project-1.jpg`)
2. In `site-data.js` set `image: "assets/portfolio/project-1.jpg"` and change the title/category/description
3. Redeploy

### Add a testimonial
Edit the `testimonials` list in `site-data.js` (name, role, business, quote, optional photo).

## Deploy to Vercel
**Drag & drop:** vercel.com/new -> import the folder (Framework: Other, no build command, output = root).
**CLI:** `npm i -g vercel` then run `vercel --prod` inside this folder.
**GitHub:** push this folder to a repo, then Import Project on Vercel.
