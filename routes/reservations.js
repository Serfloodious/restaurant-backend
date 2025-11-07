const express = require('express');
const {getReservations, getReservation} = require('../controllers/reservations');

const router = express.Router();

const {protect} = require('../middleware/auth');

router.route('/').get(protect, getReservations);
router.route('/:id').get(protect, getReservation);

module.exports = router;