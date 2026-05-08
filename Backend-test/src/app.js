const express = require('express');
const connectDB = require('../src/config/db.config');   // ✅ fixed path
const roomRoutes = require('../src/routes/room.routes');
const errorHandler = require('../src/middleware/error.middleware');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/rooms', roomRoutes);
app.use(errorHandler);

module.exports = app;