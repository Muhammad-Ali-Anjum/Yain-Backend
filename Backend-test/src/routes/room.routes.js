const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller');
const { validateRoom } = require('../validators/room.validator');
const { protect } = require('../middleware/auth.middleware');

router
  .route('/')
  .get(roomController.getRooms)
  .post(protect, validateRoom, roomController.createRoom);

router
  .route('/:id')
  .get(roomController.getRoomById)
  .put(protect, validateRoom, roomController.updateRoom)
  .delete(protect, roomController.deleteRoom);

module.exports = router;