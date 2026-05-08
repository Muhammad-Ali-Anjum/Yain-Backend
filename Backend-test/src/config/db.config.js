const mongoose = require('mongoose');
require('dotenv').config(); // force reload .env inside this file

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log('Inside db.config.js - MONGO_URI:', uri); // debug
    if (!uri) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }
    await mongoose.connect(uri);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ DB Connection Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;