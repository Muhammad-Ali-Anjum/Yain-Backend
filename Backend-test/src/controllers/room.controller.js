// src/controllers/room.controller.js
const Room = require('../models/Room.model');

// Try to load asyncHandler – show clear error if missing
let asyncHandler;
try {
  asyncHandler = require('../middleware/asyncHandler');
  if (typeof asyncHandler !== 'function') throw new Error('asyncHandler is not a function');
} catch (err) {
  console.error('❌ Failed to load asyncHandler:', err.message);
  console.error('   Make sure src/middleware/asyncHandler.js exists and exports a function.');
  process.exit(1);
}

// @desc    Get all rooms
// @route   GET /api/rooms
const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({ success: true, count: rooms.length, data: rooms });
});

// @desc    Get single room
// @route   GET /api/rooms/:id
const getRoomById = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (!room) {
    res.status(404);
    throw new Error('Room not found');
  }
  res.status(200).json({ success: true, data: room });
});

// @desc    Create a room
// @route   POST /api/rooms
const createRoom = asyncHandler(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(201).json({ success: true, data: room });
});

// @desc    Update a room
// @route   PUT /api/rooms/:id
const updateRoom = asyncHandler(async (req, res) => {
  const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!room) {
    res.status(404);
    throw new Error('Room not found');
  }
  res.status(200).json({ success: true, data: room });
});

// @desc    Delete a room
// @route   DELETE /api/rooms/:id
const deleteRoom = asyncHandler(async (req, res) => {
  const room = await Room.findByIdAndDelete(req.params.id);
  if (!room) {
    res.status(404);
    throw new Error('Room not found');
  }
  res.status(200).json({ success: true, message: 'Room deleted' });
});

module.exports = {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};