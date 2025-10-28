const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    district: {
        type: String,
        required: [true, 'Please add a district']
    },
    province: {
        type: String,
        required: [true, 'Please add a province']
    },
    postcode: {
        type: String,
        required: [true, 'Please add a postcode'],
        maxlength: [5, 'Postcode cannot be more than 5 characters']
    },
    phone: {
        type: String
    },
    openinghours: {
        type: String,
        required: [true, 'Please add opening hours']
    },
    closinghours: {
        type: String,
        required: [true, 'Please add closing hours']
    }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
