# TechKey Solutions website

The rebuilt [thetks.com](https://thetks.com) — Next.js + Tailwind, static-first, with a
Markdown blog and a contact form that emails submissions.

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS 4**
- **TypeScript**
- **Markdown blog** (`content/blog/*.md`, rendered with `gray-matter` + `marked`)
- **Contact form** delivered via [Resend](https://resend.com)

## Local development

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY if you want real emails
npm run dev
```

Open http://localhost:3000.

If `RESEND_API_KEY` isn't set, the contact form logs submissions to the server console and returns success — handy for local testing.

## Writing blog posts

Add a new `.md` file to `content/blog/`:

```markdown
---
title: "Your title"
description: "One-line summary for the card and SEO."
date: "2026-04-21"
author: "Your name"
tags: ["ai"]
---

Your post body in **Markdown**.
```

It will show up automatically at `/blog/<filename-without-extension>`.

## Deployment

Designed to deploy to Vercel:

1. Push this repo to GitHub.
2. Import in Vercel.
3. Set env vars in the Vercel project:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Point thetks.com DNS at the Vercel deployment.

## Structure

```
src/
  app/                 # routes (home, about, services, blog, contact, privacy)
  components/          # header, footer, logo, icons, container
  lib/
    site.ts            # site-wide constants (name, email, nav, socials)
    blog.ts            # markdown loading + rendering
content/blog/          # blog posts as .md files
public/                # static assets
```
