# Fateme G. Portfolio

A modern personal portfolio built to showcase my work as a full-stack software engineer.

This project highlights my engineering strengths, selected projects, experience, and contact information in a polished dark UI with subtle scroll-based motion, responsive layouts, and a more modern product-minded visual style.

## Overview

This portfolio was designed to feel more current, technical, and professional for software engineering and full-stack web development roles.

It includes:

- a strong hero section with featured work
- an engineering strengths section
- a selected projects section
- an experience timeline
- a contact section with EmailJS integration
- custom favicon and personalized branding
- scroll-linked motion and hover interactions with Framer Motion

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **EmailJS**

## Features

- Responsive layout for desktop and mobile
- Modern dark glassmorphism-inspired UI
- Scroll-based motion and section parallax
- Featured project cards with hover states
- Personalized favicon and browser tab branding
- Contact form with EmailJS
- Downloadable resume link
- Social links for GitHub, LinkedIn, X, and email

## Sections

### Hero
Introduces me as a full-stack software engineer and highlights my focus areas, stack, and selected featured work.

### Engineering Strengths
Explains how I approach building software across frontend systems, backend APIs, delivery, and reliability.

### Projects
Showcases selected projects with descriptions, highlights, stack, and links to live demos or source code.

### Experience
Presents my professional experience in a clean timeline/card layout.

### Contact
Provides direct contact details, social links, resume access, and a working contact form powered by EmailJS.

## Project Structure

```txt
src/
  components/
    Navbar.jsx
    Hero.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
  App.jsx
  main.jsx
public/
  favicon files
  resume pdf
Getting Started
```

## Clone the repository:

git clone https://github.com/your-username/your-portfolio-repo.git
cd your-portfolio-repo

## Install dependencies:

npm install

Start the development server:

npm run dev

## Build for production:

npm run build

## Preview the production build:

npm run preview
Environment Variables

## Create a .env file in the project root and add:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

Restart the dev server after adding or updating environment variables.

## EmailJS Setup

The contact form uses EmailJS to send messages directly from the site.

## Required template variables

Your EmailJS template should use these variables:

{{from_name}}
{{reply_to}}
{{message}}
{{to_name}}
Example template subject
New portfolio message from {{from_name}}
Example template body
Hello {{to_name}},

You received a new message from your portfolio contact form.

Name: {{from_name}}
Reply Email: {{reply_to}}

Message:
{{message}}
Customization

You can easily update:

project data in the Projects component

experience entries in the Experience component

strengths and stack items in the Skills component

contact email and social links in the Contact component

title, meta description, and favicon in index.html

Deployment

This project can be deployed to:

Vercel

Netlify

GitHub Pages

any static hosting provider that supports Vite builds

For deployment, make sure:

your EmailJS environment variables are added in the hosting platform

your resume file is inside public/

favicon files are inside public/

Future Improvements

add project detail pages

add blog/articles section

add light mode

add case-study style project breakdowns

improve accessibility audits and keyboard navigation

add form spam protection with reCAPTCHA

Contact

If you'd like to connect, collaborate, or discuss an opportunity:

Email: fghalandarii@gmail.com

LinkedIn: [Add your LinkedIn link]

GitHub: [Add your GitHub link]

Portfolio: [Add your live site link]

License

This project is for personal portfolio use.


## A few changes I recommend before using it

Replace these placeholders:

- `your-username/your-portfolio-repo`
- LinkedIn link
- GitHub link
- live site link

Also, if you want it to look more professional, change the title to one of these:

- `Fateme G. Portfolio`
- `Fateme Ghalandari Portfolio`
- `Fateme G. | Full-Stack Software Engineer`

If you want, I can turn this into a **stronger GitHub-ready README with badges, preview image, and polished sections**.