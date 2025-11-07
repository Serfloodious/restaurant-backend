const Reservation = require('../models/Reservation');

// @desc    Get all reservations
// @route   GET /api/v1/reservations
// @access  Public
exports.getReservations = async (req, res, next) => {
    let query;

    // General users can see only their reservations
    if (req.user.role !== 'admin') {
        query = Reservation.find({ user: req.user.id });
    } else { // Admins can see all reservations
        query = Reservation.find();
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