# Vishnu Vaibhava - Restaurant & Party Hall (Demo Website)

Production-quality demo website for **Vishnu Vaibhava-restaurant party hall**, a beloved pure-vegetarian multi-cuisine family restaurant and celebratory banquet venue located on Kenchena Halli Road, Rajarajeshwari Nagar (RR Nagar), Bengaluru, Karnataka.

Built strictly according to real information collected from the Google Maps listing (`ChIJxQr9MQA_rjsRYCbhpacNGcU`) and authenticated directory listings.

---

## 🌟 Tech Stack
- **Framework:** React 18 + Vite (Plain JavaScript JSX)
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Routing:** React Router v6 (`react-router-dom`)
- **Icons:** Lucide React
- **Hosting / Deployment:** Fully configured for Netlify (`netlify.toml` and `public/_redirects`)

---

## 🗂️ Project Structure & Data Files

All customizable restaurant facts and demo datasets live in simple local files inside `src/data/`:
- **`src/data/restaurant.js`**: Master information file containing restaurant name, verified address, phone numbers, WhatsApp, opening hours, Google Maps links, and clearly marked editable placeholders.
- **`src/data/menu.js`**: Verified menu items, prices, categories, and vegetarian indicators.
- **`src/data/reviews.js`**: Real customer reviews from Google / Justdial directories plus sample review cards.
- **`src/data/gallery.js`**: Photo gallery items with high-resolution images, descriptions, and automatic fallback handling.
- **`src/data/instagram.js`**: 6 sample Instagram post tiles with placeholder links.
- **`src/data/faq.js`**: Accordion FAQs answering common questions based on verified facts.
- **`src/data/offers.js`**: Sample promotional offer cards.
- **`src/data/sampleOrders.js`**: 18 realistic sample orders and payment records for the owner dashboard.

---

## 🚀 Pages & Routes (7 Required Routes)
1. **Home (`/`)**: Hero with 4.1★ rating badge, About section, Popular dishes with Add-to-cart, Party Hall (300–500 capacity) enquiry section, Offers, Gallery with Lightbox, Table Booking form with WhatsApp confirmation, 7-Day Hours table (today highlighted), Customer Reviews, Instagram feed, FAQ accordion, and CTA strip.
2. **Menu (`/menu`)**: Live category filters, instant keyword search, pure veg badges, price indicators, and Add-to-cart quantity counters.
3. **Location (`/location`)**: Keyless embedded Google Map, "Get Directions" and "Open in Google Maps" links, landmark and parking info.
4. **Contact (`/contact`)**: Verified phone numbers, WhatsApp link, validated enquiry form, table booking and party hall shortcuts.
5. **Cart / Checkout (`/cart`)**: Item list, quantity controls, GST and packaging calculations, checkout form, demo payment options (UPI / Card / Cash), and instant order placement that persists to localStorage.
6. **Owner Login (`/owner-login`)**: Client-side demo authentication with 1-click auto-fill demo credentials.
7. **Owner Dashboard (`/owner-dashboard`)**: Protected route with summary KPI cards, SVG trend charts, order status updater (saves to localStorage), payment transactions history, and reset functionality.
8. **404 Page (`*`)**: Friendly page not found screen linking back to home.

---

## 🔐 Demo Owner Login Credentials
- **Email:** `owner@demo.com`
- **Password:** `demo1234`
*(A 1-click auto-fill button is also provided directly on the login page).*

> **Note on Security:** This is a front-end demo authentication mechanism utilizing browser `localStorage`. No sensitive data or real payment processing is handled.

---

## 💻 How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to Netlify

This project is pre-configured for 1-click Netlify deployment:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** `20` (configured in `netlify.toml`)
- **SPA Routing:** Configured in `netlify.toml` and `public/_redirects` (`/*  /index.html  200`) so direct page refreshes on `/menu`, `/location`, `/cart`, etc. work seamlessly.

