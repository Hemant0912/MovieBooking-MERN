# 🎬 Movie Booking and Rating Application

A full-stack MERN (MongoDB, Express, React, Node.js) web application that allows users to book movie tickets, rate movies, and explore theaters and seat selections with a smooth and user-friendly interface.

## 🚀 Features

- 🔐 **User Authentication**
  - Sign up, log in, and secure user sessions.

- 🎟️ **Movie Booking**
  - Browse movies currently playing or coming soon.
  - Select a theater, timing, and seats.
  - Book tickets with mock payment gateway.

- 🌟 **Ratings & Reviews**
  - Users can rate movies and leave reviews.
  - Ratings are displayed for all movies.

- 🎬 **Admin Panel**
  - Add, edit, or delete movies.
  - Manage theaters, show timings, and bookings.

- 💺 **Seat Selection System**
  - Real-time seat availability.
  - Visually choose seats in the UI.

- 🧾 **Mock Payment Gateway**
  - Simulated payment process (for learning/demo purposes).

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML, CSS, JavaScript
- Axios for API calls
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)

### Tools & Services
- GitHub for version control
- MongoDB Atlas (optional, for cloud DB)
- Postman (for API testing)

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
Install dependencies for backend
cd backend
npm install

Install dependencies for frontend
cd ../frontend
npm install

Run the app
# Start backend
cd backend
npm run dev

# Start frontend (in another terminal)
cd frontend
npm start


Branch	Purpose
main	Contains frontend code (React app)
backend	Contains backend code (Node.js + Express)
admin	Contains admin panel code
