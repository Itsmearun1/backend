require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

try {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('MongoDB connection error:', error);
}

// Routes
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

app.use('/users', authRoutes);
app.use('/posts', postsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
