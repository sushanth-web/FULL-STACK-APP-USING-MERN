// import express package
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workout');
const userRoutes = require('./routes/user')

dotenv.config();

// express app
const app = express();

// ✅ Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes (http://localhost:4000/)
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to our application' });
});

app.use('/api/workouts', workoutRoutes);
app.use('/api/user',userRoutes)

// Connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✅ Connected to DB successfully');
    // Listen to port only after DB connection
    app.listen(process.env.PORT || 4000, () => {
      console.log(`🚀 App running at http://localhost:${process.env.PORT || 4000}/`);
    });
  })
  .catch((error) => {
    console.log('❌ DB connection error:', error);
  });
 