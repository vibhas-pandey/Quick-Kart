# Quick-Kart
# 🛒 MERN eCommerce Platform

Welcome to your full-featured **Online Shopping Platform**, built with the **MERN Stack** – **MongoDB, Express.js, React, and Node.js**.  
This project offers a smooth and powerful eCommerce experience with all essential features like user authentication, cart, product management, payments, and admin dashboard.

---

## 🔗 Live Demo

🌐 [Live App Link](<YOUR_LIVE_APP_LINK_HERE>)

> ⚠️ *Note: Free hosting tiers like Render may take 15–30 seconds to wake the backend after inactivity.*

---

## 🚀 Features

- 🛒 **Shopping Cart**: Add, remove, and manage products in real time  
- ⭐ **Product Reviews & Ratings**  
- 🔁 **Top Products Carousel**  
- 📄 **Product Pagination**  
- 🔍 **Keyword-Based Product Search**  
- 👤 **User Profile & Order History**  
- 🧑‍💻 **Admin Dashboard**:
  - Manage admins, products, users, and orders  
  - View detailed order info  
  - Mark orders as delivered  
- 💳 **Razorpay Payment Gateway Integration**  
- 📦 **Checkout Process with Shipping & Payment**  
- 📩 **Email Notifications via Brevo (Sendinblue)**  
- 🧪 **Database Seeder** for sample users/products

---

## 📦 Tech Stack

- **Frontend**: React, Redux Toolkit, React-Bootstrap  
- **Backend**: Node.js, Express.js, MongoDB  
- **Auth**: JWT (JSON Web Tokens)  
- **Payments**: Razorpay  
- **Emails**: Brevo SMTP  
- **Hosting**: (Add here: Render / Vercel / Netlify / etc.)

---

## 🛠️ Getting Started

### 🔐 Prerequisites

- MongoDB Atlas Account
- Razorpay Account
- Brevo (Sendinblue) SMTP Account
- Node.js & npm installed

---

### 📁 Clone the Repository

```bash
git clone https://github.com/<your-username>/mern-ecommerce.git
cd mern-ecommerce

Environment Variables
Rename .env.example to .env and add the following:
NODE_ENV=development
PORT=5000
JWT_SECRET=YOUR_SECRET_HERE

MONGO_URI=YOUR_MONGODB_ATLAS_URI

RAZORPAY_KEY_ID=YOUR_RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_RAZORPAY_KEY_SECRET

PAGINATION_MAX_LIMIT=12

EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_USER=YOUR_BREVO_EMAIL
EMAIL_PASS=YOUR_BREVO_PASSWORD
EMAIL_FROM=YOUR_BREVO_EMAIL

Install Dependencies:
bash
npm install        # Install backend packages
cd frontend
npm install        # Install frontend packages

▶️ Run the App
To start both frontend & backend concurrently:

npm run dev

Build for Production:

cd frontend
npm run build

Seed / Reset Database:
# Import sample users & products
npm run data:import

# Destroy all data
npm run data:destroy

🔐 Sample Logins
🔑 Admin Login
🔗 Admin Dashboard
Email: workforvibhas@gmail.com
Password: 1234Radhe

🛍️ Customer Logins
🔗 Customer Login
Name: John Doe
Email: john@email.com
Password: john123

📄 License
This project is open source and available under the MIT License.

