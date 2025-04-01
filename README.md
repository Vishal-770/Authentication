
# 🔐 Node.js Authentication System

A simple yet secure authentication system built with Node.js, Express, and MongoDB. Features user registration, login, JWT token-based authentication, and protected routes.

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT + bcrypt
- **Templating**: EJS
- **Session Management**: cookie-parser

## 📂 File Structure

```
auth-system/
├── controllers/
│   ├── authController.js
├── models/
│   ├── User.js
├── routes/
│   ├── authRoutes.js
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   ├── dashboard.ejs
├── node_modules/
├── package.json
├── package-lock.json
└── server.js
```

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
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open in browser:
   ```
   http://localhost:3000
   ```


