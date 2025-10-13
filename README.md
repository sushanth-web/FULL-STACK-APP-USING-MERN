# 🏋️ MERN Gym App

A full-stack **Gym Workout Tracker** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This app allows users to **add, view, and delete workouts**, track **load and reps**, and see **time since creation** in real-time.  
It provides a **clean, responsive interface** for managing fitness routines.  

---

## ✨ Features

- ✅ **Add New Workouts:** Record exercise title, load (kg), and reps.  
- ✅ **View Workouts:** Display all workouts fetched from the backend.  
- ✅ **Delete Workouts:** Remove workouts with a single click.  
- ✅ **Real-Time Updates:** New workouts appear instantly after creation.  
- ✅ **Responsive Design:** Works on desktop, tablet, and mobile.  
- ✅ **Time Formatting:** Shows time since creation using `date-fns` (e.g., "5 minutes ago").  

---

## 🖼️ Screenshots

![Screenshot 1](<img width="1366" height="768" alt="Screenshot 2025-10-13 160307" src="https://github.com/user-attachments/assets/b7656b95-7f52-4acb-92a9-966b8f0e33ed" />
)  

---

## 🛠️ Technologies Used

### Backend

- Node.js – JavaScript runtime  
- Express.js – Web framework  
- MongoDB – Database  
- Mongoose – ODM for MongoDB  
- Cors – Cross-origin requests  

### Frontend

- React – Frontend library  
- Vite – Build tool  
- date-fns – Time formatting  
- React Context + useReducer – Global state management  

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed  
- MongoDB installed and running (or MongoDB Atlas)  

### Installation

1. **Clone the repository**


git clone https://github.com/sushanth-web/FULL-STACK-APP-USING-MERN.git
cd FULL-STACK-APP-USING-MERN

2.**Install backend dependencies**

cd backend
npm install


3.**Install frontend dependencies**

cd ../frontend
npm install

Run the App

Start Backend Server:

cd backend
npm run dev


The backend will run on http://localhost:4000

Start Frontend App:

cd frontend
npm run dev


The frontend will run on http://localhost:5173
and will proxy API requests to the backend.

**FOLDER STRUCTURE**  

FULL-STACK-APP-USING-MERN/
│
├── backend/
│   ├── controllers/
│   │   └── workoutController.js
│   ├── models/
│   │   └── workoutModel.js
│   ├── routes/
│   │   └── workout.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NavBar.jsx
│   │   │   ├── WorkoutForm.jsx
│   │   │   └── WorkoutDetails.jsx
│   │   ├── context/
│   │   │   └── WorkoutContext.jsx
│   │   ├── hooks/
│   │   │   └── useWorkoutContext.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── README.md
