const Restaurant = require('../models/Restaurant.js');

//@desc     Get all restaurants
//@route    GET /api/v1/restaurants
//@access   Public
exports.getRestaurants = (req, res) => {
    res.status(200).json({success: true, msg: 'Show all restaurants'});
};

//@desc     Get single restaurants
//@route    GET /api/v1/restaurants/:id
//@access   Public
exports.getRestaurant = (req, res) => {
    res.status(200).json({success: true, msg: `Show restaurant with ID: ${req.params.id}`});
};

//@desc     Create new restaurant
//@route    POST /api/v1/restaurants
//@access   Private
exports.createRestaurant = async (req, res) => {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json({
        success: true, 
        data: restaurant
    });
};

//@desc     Update restaurant
//@route    PUT /api/v1/restaurants/:id
//@access   Private
exports.updateRestaurant = (req, res) => {
    res.status(200).json({success: true, msg: `Update restaurant with ID: ${req.params.id}`});
};

//@desc     Delete restaurant
//@route    DELETE /api/v1/restaurants/:id
//@access   Private
exports.deleteRestaurant = (req, res) => {
    res.status(200).json({success: true, msg: `Delete restaurant with ID: ${req.params.id}`});
};