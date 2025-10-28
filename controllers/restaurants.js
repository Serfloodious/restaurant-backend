const Restaurant = require('../models/Restaurant.js');

//@desc     Get all restaurants
//@route    GET /api/v1/restaurants
//@access   Public
exports.getRestaurants = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json({success: true, count: restaurants.length, data: restaurants});
    } catch (err) {
        res.status(400).json({success: false});
    }
};

//@desc     Get single restaurants
//@route    GET /api/v1/restaurants/:id
//@access   Public
exports.getRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(400).json({success: false});
        }

        res.status(200).json({success: true, data: restaurant});
    } catch (err) {
        return res.status(400).json({success: false});
    }
};

//@desc     Create new restaurant
//@route    POST /api/v1/restaurants
//@access   Private
exports.createRestaurant = async (req, res, next) => {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json({
        success: true, 
        data: restaurant
    });
};

//@desc     Update restaurant
//@route    PUT /api/v1/restaurants/:id
//@access   Private
exports.updateRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!restaurant) {
            return res.status(400).json({success: false});
        }

        res.status(200).json({success: true, data: restaurant});
    } catch (err) {
        res.status(400).json({success: false});
    }
};

//@desc     Delete restaurant
//@route    DELETE /api/v1/restaurants/:id
//@access   Private
exports.deleteRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);

        if (!restaurant) {
            return res.status(400).json({success: false});
        }

        res.status(200).json({success: true, data: {}});
    } catch (err) {
        res.status(400).json({success: false});
    }
};