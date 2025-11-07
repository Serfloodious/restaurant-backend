const Reservation = require('../models/Reservation');

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