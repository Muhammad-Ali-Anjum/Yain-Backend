const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    roomNumber: { type: String, required: true, unique: true },
    type: { type: String, enum: ['standard', 'deluxe', 'suite'], required: true },
    pricePerNight: { type: Number, required: true, min: 0 },
    isAvailable: { type: Boolean, default: true },
    maxGuests: { type: Number, required: true, min: 1 },
    amenities: [String],
    images: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Room', roomSchema);