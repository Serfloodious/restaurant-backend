const Reservation = require('../models/Reservation');
const Restaurant = require('../models/Restaurant');

// @desc    Get all reservations
// @route   GET /api/v1/reservations
// @access  Public
exports.getReservations = async (req, res, next) => {
    let query;

    // General users can see only their reservations
    if (req.user.role !== 'admin') {
        query = Reservation.find({user: req.user.id}).populate({
            path: 'restaurant',
            select: 'name province phone'
        });
    } else { // Admins can see all reservations
        if (req.params.restaurantId) {
            console.log(req.params.restaurantId);
            query = Reservation.find({restaurant: req.params.restaurantId}).populate({
                path: 'restaurant',
                select: 'name province phone'
            });
        } else {
            query = Reservation.find().populate({
                path: 'restaurant',
                select: 'name province phone'
            });
        }

        
    }

    try {
        const reservations = await query;

        res.status(200).json({
            success: true,
            count: reservations.length,
            data: reservations
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            success: false, 
            message: "Cannot find reservations"
        });
    }
};

// @desc    Get single reservation
// @route   GET /api/v1/reservations/:id
// @access  Public
exports.getReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findById(req.params.id).populate({
            path: 'restaurant',
            select: 'name province phone'
        });

        if (!reservation) {
            return res.status(404).json({
                success: false,
                message: `No reservation with id of ${req.params.id}`
            });
        }

        res.status(200).json({
            success: true,
            data: reservation
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Cannot find reservation"
        });
    }
};

// @desc    Add reservation
// @route   POST /api/v1/restaurants/:restaurantId/reservations
// @access  Private
exports.addReservation = async (req, res, next) => {
    try {
        req.body.restaurant = req.params.restaurantId;

        const restaurant = await Restaurant.findById(req.params.restaurantId);

        if (!restaurant) {
            return res.status(404).json({
                success: false,
                message: `No restaurant with id of ${req.params.restaurantId}`
            });
        }

        const reservation = await Reservation.create(req.body);

        res.status(201).json({
            success: true,
            data: reservation
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Cannot create reservation"
        });
    }
};