const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Private
exports.getUsers = async (req, res, next) => {
    try {
        let query;

        // Copy req.query
        const reqQuery = {...req.query};

        // Fields to exclude
        const removeFields = ['select', 'sort', 'page', 'limit'];

        // Loop over removeFields and delete them from reqQuery
        removeFields.forEach(param => delete reqQuery[param]);
        console.log(reqQuery);

        // Create query string
        let queryStr = JSON.stringify(reqQuery);

        // Create operators ($gt, $gte, etc)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

        // Finding resource
        query = User.find(JSON.parse(queryStr));

<<<<<<< HEAD
        // Select Fields
        if (req.query.select) {
            const fields = req.query.select.split(',').join(' ');
            query = query.select(fields);
        }
        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        // Pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 25;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await User.countDocuments();

        query = query.skip(startIndex).limit(limit);

        // Executing query
||||||| cd397a4
=======
        // Select Fields
        if (req.query.select) {
            const fields = req.query.select.split(',').join(' ');
            query = query.select(fields);
        }
        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        // Pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 1;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await User.countDocuments();

        query = query.skip(startIndex).limit(limit);

        // Executing query
>>>>>>> 4325aa7a98ad4d546b1a22d8e948e935e01f4205
        const users = await query;

        // Pagination result
        const pagination = {};

        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit
            };
        }

        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit
            };
        }

        res.status(200).json({
            success: true,
            count: users.length,
            pagination,
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