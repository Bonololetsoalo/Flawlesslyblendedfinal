# Flawlessly Blended — Website Project

**Student Name:** Bonolo Letsoalo  
**Module:** Web Development (WEDE5020)  
**Institution:** Rosebank College  
**Year:** 2026  


## Project Overview

Flawlessly Blended is a professional makeup artist website built as part of the WEDE5020 Web Development module. The website provides information about makeup services, pricing, a gallery of client work, a booking form, and contact details.

The project was completed in three parts:
- **Part 1:** HTML structure and content
- **Part 2:** CSS styling and responsive design
- **Part 3:** JavaScript functionality, SEO, forms, and deployment

## Live Website

🌐 **Deployed on Netlify:** https://flawlessly-blended.netlify.app

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with welcome message and about section |
| Gallery | `gallery.html` | Grid display of client makeup work with lightbox |
| Pricing | `services.html` | Service packages, pricing cards, and search feature |
| Booking | `enquiry.html` | Appointment booking form via WhatsApp |
| Contact | `contact.html` | Contact details, Google Maps, and contact form |


## Technologies Used

- HTML5
- CSS3 (External Stylesheet)
- JavaScript (Vanilla)
- GitHub (version control)
- Netlify (deployment)


## Part 3 — Functionality & SEO

### JavaScript Features
- Hamburger navigation menu (shows on screens 768px and below)
- Gallery lightbox (click image to view full size)
- Dynamic search feature on pricing page (filters cards in real time)
- Booking form validation with error messages
- Contact form validation with error messages
- WhatsApp booking submission
- Email contact form submission via mailto

### SEO Implementation
- Unique title tags on all 5 pages
- Meta descriptions on all 5 pages
- Meta keywords on all 5 pages
- Descriptive alt text on all images
- robots.txt file to guide search engine crawlers
- sitemap.xml file to help search engines index all pages
- Semantic HTML structure (h1, h2, h3, nav, section, footer)

### Interactive Elements
- Hamburger menu for mobile/tablet navigation
- Gallery lightbox for full-size image viewing
- Pricing search filter (dynamic content)
- Google Maps embed on contact page
- Booking form → WhatsApp integration
- Contact form → Email (mailto) integration


## Changelog

### Part 3 — Functionality & SEO (June 2026)

| Date | File | Change | Reason |
|------|------|--------|--------|
| 19 June 2026 | All pages | Added SEO meta title tags, meta descriptions, and meta keywords | Required for SEO optimisation and Part 3 marks |
| 19 June 2026 | All pages | Replaced onclick hamburger with JavaScript event listener and checkScreenSize() function | More reliable hamburger that responds to browser resize on desktop and mobile |
| 19 June 2026 | `gallery.html` | Added gallery lightbox feature — click image to open full size | Required interactive element for Part 3 |
| 19 June 2026 | `services.html` | Added dynamic search feature that filters pricing cards in real time | Required dynamic content feature for Part 3 |
| 19 June 2026 | `enquiry.html` | Added JavaScript form validation with error messages | Required form validation for Part 3 |
| 19 June 2026 | `contact.html` | Added Google Maps embed, contact form with validation, and mailto email submission | Required interactive map, contact controls, contact validation, and contact email for Part 3 |
| 19 June 2026 | `robots.txt` | Created robots.txt to guide search engine crawlers | Required for SEO |
| 19 June 2026 | `sitemap.xml` | Created sitemap.xml to help search engines index all pages | Required for SEO |
| 19 June 2026 | All pages | Updated copyright year to 2026 | Accuracy |

### Part 2 Feedback Fix (June 2026)

| Date | File | Change | Reason |
|------|------|--------|--------|
| 19 June 2026 | `css/style.css` | Replaced CSS variable font sizes in media queries with fixed rem values (h1: 1.75rem tablet, 1.25rem mobile) | Part 2 feedback: typography adjustments were present but could be improved — text elements needed to adapt more correctly to different screen sizes |

### Part 2 — CSS & Responsive Design

| Date | Change | Description |
|------|--------|-------------|
| May 2026 | Created `css/style.css` | Built complete external stylesheet covering reset, variables, typography, layout, visual styles, and responsive design |
| May 2026 | Added media queries | Implemented tablet (768px) and mobile (480px) breakpoints |
| May 2026 | Responsive gallery | Gallery grid switches from multi-column to single column on smaller screens |
| May 2026 | Responsive navigation | Navigation bar adapts for smaller screens |
| May 2026 | CSS variables | Added `:root` custom properties for consistent colour scheme and typography |

### Part 1 Feedback Fixes

| Date | File | Change | Reason |
|------|------|--------|--------|
| May 2026 | All pages | Added HTML comments to every section on all 5 pages | No comments were present in Part 1 |
| May 2026 | `services.html` | Replaced `<br>` tags with proper `<h2>` and `<p>` tags | Content tags were incomplete |
| May 2026 | `contact.html` | Replaced plain `<p>` tags with `<ul>/<li>` list and `<a>` anchor links | Lacked proper semantic structure |
| May 2026 | `index.html` | Added missing `<!DOCTYPE html>` declaration | Document type was absent |


## References

- W3Schools. (2024). *HTML and CSS Tutorials*. Retrieved from https://www.w3schools.com
- YouTube tutorials on HTML, CSS, JavaScript, and responsive design (various creators).
- Anthropic. (2026). *Claude — Used for guidance on HTML, CSS, and JavaScript implementation*. Retrieved from https://claude.ai
- Rosebank College. (2026). *WEDE5020 Web Development class notes and slides*.
- Google Maps. (2026). *Embedded Maps API*. Retrieved from https://maps.google.com
- Netlify. (2026). *Free website deployment platform*. Retrieved from https://www.netlify.com

---

## GitHub Repository

Submitted via the Learning Management System (LMS).

---

*&copy; 2026 Flawlessly Blended | Developed by Bonolo Letsoalo*
