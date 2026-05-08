const Room = require('../models/Room.model');

const rooms = [
  { roomNumber: '101', type: 'standard', pricePerNight: 80, maxGuests: 2 },
  { roomNumber: '202', type: 'deluxe', pricePerNight: 150, maxGuests: 4 },
];

const seedRooms = async () => {
  await Room.deleteMany();
  await Room.insertMany(rooms);
  console.log('Rooms seeded');
};

module.exports = seedRooms;