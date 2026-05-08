const { body } = require('express-validator');

const validateRoom = [
  body('roomNumber').notEmpty().withMessage('Room number is required'),
  body('type').isIn(['standard', 'deluxe', 'suite']).withMessage('Invalid room type'),
  body('pricePerNight').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('maxGuests').isInt({ min: 1 }).withMessage('Max guests must be at least 1'),
];

module.exports = { validateRoom };