const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Private
exports.getUsers = async (req, res, next) => {
    try {
        let query;
        let queryStr = JSON.stringify(req.query);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

        query = User.find(JSON.parse(queryStr));

        const users = await query;

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (err) {
        res.status(400).json({success: false});
    }
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Private
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(400).json({success: false});
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({success: false});
    }
};