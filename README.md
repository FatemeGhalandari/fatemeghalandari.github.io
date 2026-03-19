# Fateme Ghalandari Portfolio

A modern personal portfolio built to showcase my work as a full-stack software engineer.

This project highlights my engineering strengths, selected projects, experience, and contact information in a polished, responsive layout with a modern, product-focused visual style.

## Overview

This portfolio was designed to showcase my technical and professional skills as a software engineer and full-stack web developer.

It includes:

- Strong hero section with featured work
- Strengths section
- Selected projects section
- Experience timeline
- Contact section with EmailJS integration
- Custom favicon and personalized branding
- Scroll-linked motion and hover interactions with Framer Motion

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
```code
git clone https://github.com/your-username/your-portfolio-repo.git
cd your-portfolio-repo
```

## Install dependencies:
```
npm install
```
## Start the development server:
```
npm run dev
```
## Build for production:
```
npm run build
```
## Preview the production build:
```
npm run preview
```
## Environment Variables

### Create a .env file in the project root and add:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
### Restart the dev server after adding or updating environment variables.

### EmailJS Setup

The contact form uses EmailJS to send messages directly from the site.

### Required template variables

Your EmailJS template should use these variables:
```
{{from_name}}
{{reply_to}}
{{message}}
{{to_name}}
```
- Example template subject:
```
New portfolio message from {{from_name}}
Example template body
Hello {{to_name}},

You received a new message from your portfolio contact form.

Name: {{from_name}}
Reply Email: {{reply_to}}

Message:
{{message}}
Customization
```
You can easily update:

- project data in the Projects component

- experience entries in the Experience component

- strengths and stack items in the Skills component

- contact email and social links in the Contact component

- title, meta description, and favicon in index.html

# Deployment

This project can be deployed to:

- Vercel
- Netlify
- GitHub Pages

any static hosting provider that supports Vite builds

For deployment, make sure:

- Your EmailJS environment variables are added to the hosting platform
- Your resume file is inside public/
- favicon files are inside public/

# Contact

If you'd like to connect, collaborate, or discuss an opportunity:

- Email: fghalandarii@gmail.com

- [LinkedIn](https://www.linkedin.com/in/fghalandarii/)

- [GitHub](https://github.com/FatemeGhalandari)

- [Portfolio](https://fatemeghalandari.github.io/)

# License

This project is for personal portfolio use.
