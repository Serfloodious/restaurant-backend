const express = require('express');
const {getReservations, getReservation, addReservation} = require('../controllers/reservations');

const router = express.Router({mergeParams: true});

const {protect} = require('../middleware/auth');

router.route('/')
    .get(protect, getReservations)
    .post(protect, addReservation);
router.route('/:id').get(protect, getReservation);

module.exports = router;