# fadiopgenorth.com

Personal website and consulting site for Fadi Opgenorth — AI automation for nonprofit financial operations.

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account).
2. Click **New repository**.
3. Name the repository **`fadiopgenorth.github.io`** (this exact name enables GitHub Pages at the root).
4. Set it to **Public**.
5. Do **not** initialize with a README (you already have one).
6. Click **Create repository**.

### Step 2: Push Files to GitHub

From the `fadiopgenorth-site/` directory, run:

```bash
git init
git add -A
git commit -m "Initial site deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fadiopgenorth.github.io.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (left sidebar).
3. Under **Source**, select **Deploy from a branch**.
4. Choose branch: **main**, folder: **/ (root)**.
5. Click **Save**.
6. Wait 2-3 minutes. Your site will be live at **https://fadiopgenorth.github.io**.

### Step 4: Add Custom Domain

1. In the same **Settings > Pages** section, under **Custom domain**, enter **`fadiopgenorth.com`**.
2. Click **Save**.

### Step 5: Configure DNS (Squarespace Domains)

In your Squarespace Domains dashboard, go to **DNS Settings** and add these records:

| Type  | Host | Value                          |
|-------|------|--------------------------------|
| A     | @    | 185.199.108.153                |
| A     | @    | 185.199.109.153                |
| A     | @    | 185.199.110.153                |
| A     | @    | 185.199.111.153                |
| CNAME | www  | fadiopgenorth.github.io        |

### Step 6: Finalize

1. Wait for DNS propagation (up to 24 hours, usually much faster).
2. Go back to **Settings > Pages** on GitHub.
3. Check **Enforce HTTPS** once DNS is verified.
4. Your site is now live at **https://fadiopgenorth.com**.

## Post-Deployment Checklist

- [ ] Replace placeholder headshot on About page with actual photo
- [ ] Replace Cal.com links with real booking URLs
- [ ] Connect Buttondown newsletter forms (update action URLs if needed)
- [ ] Set up Formspree (or alternative) for the contact form
- [ ] Add actual resume PDF at `/files/fadi-opgenorth-resume.pdf`
- [ ] Replace placeholder testimonials with real quotes
- [ ] Add LinkedIn profile URL in footer and contact page
- [ ] Update portfolio cards as demos become available

## Tech Stack

- Pure HTML, CSS, JavaScript — no frameworks or build tools
- Google Fonts (Inter, Plus Jakarta Sans)
- Designed for GitHub Pages deployment
- Mobile responsive (breakpoints at 768px and 480px)

## License

All rights reserved. Content and design copyright Fadi Opgenorth.
