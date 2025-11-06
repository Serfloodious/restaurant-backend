// @desc    Get all restaurants
// @route   GET /api/v1/restaurants
// @access  Public
exports.getRestaurants = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all restaurants'});
};

// @desc    Get single restaurant
// @route   GET /api/v1/restaurants/:id
// @access  Public
exports.getRestaurant = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show restaurant with ID: ${req.params.id}`});
};

// @desc    Create new restaurant
// @route   POST /api/v1/restaurants
// @access  Private
exports.createRestaurant = (req, res, next) => {
    res.status(201).json({success: true, msg: 'Create new restaurant'});
};

// @desc    Update restaurant
// @route   PUT /api/v1/restaurants/:id
// @access  Private
exports.updateRestaurant = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update restaurant with ID: ${req.params.id}`});
};

// @desc    Delete restaurant
// @route   DELETE /api/v1/restaurants/:id
// @access  Private
exports.deleteRestaurant = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete restaurant with ID: ${req.params.id}`});
};