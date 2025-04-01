markdown
Copy
# 🔐 Node.js Authentication System

A simple yet secure authentication system built with Node.js, Express, and MongoDB. Features user registration, login, JWT token-based authentication, and protected routes.

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT + bcrypt
- **Templating**: EJS
- **Session Management**: cookie-parser

## 📂 File Structure
auth-system/
├── controllers/
│ ├── authController.js
├── models/
│ ├── User.js
├── routes/
│ ├── authRoutes.js
├── views/
│ ├── login.ejs
│ ├── register.ejs
│ ├── dashboard.ejs
├── node_modules/
├── package.json
├── package-lock.json
└── server.js

Copy

## ✨ Features

- ✅ User registration with password hashing
- ✅ Secure login with JWT tokens
- ✅ Protected routes middleware
- ✅ Cookie-based session management
- ✅ Responsive EJS views

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas URI or local MongoDB instance

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/Vishal-770/auth-system.git
   cd auth-system
Install dependencies:

bash
Copy
npm install
Create .env file:

env
Copy
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
Start the server:

bash
Copy
npm start
Open in browser:

Copy
http://localhost:3000
🔒 Authentication Flow
Register → /register

Login → /login

Access Dashboard → /dashboard

Copy

Just copy everything between the triple backticks and paste into your README.md file! The formatting will work perfectly on GitHub/GitLab.
