const express = require('express');
const {getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant} = require('../controllers/restaurants');

// Include other resource routers
const reservationRouter = require('./reservations');

const router = express.Router();

const {protect, authorize} = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:restaurantId/reservations', reservationRouter);

router.route('/')
    .get(getRestaurants)
    .post(protect, authorize('admin'), createRestaurant);
router.route('/:id')
    .get(getRestaurant)
    .put(protect, authorize('admin'), updateRestaurant)
    .delete(protect, authorize('admin'), deleteRestaurant);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - district
 *         - province
 *         - postalcode
 *         - hours
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: The auto-generated id of the restaurant
 *           example: 60d0fe4f5311236168a109ca
 *         name:
 *           type: string
 *           description: The name of the restaurant
 *         address:
 *           type: string
 *           description: Building, House No., Road, Sub-district
 *         district:
 *           type: string
 *           description: District
 *         province:
 *           type: string
 *           description: Province
 *         postalcode:
 *           type: string
 *           description: 5-digit postal code
 *         phone:
 *           type: string
 *           description: Contact phone number
 *         hours:
 *           type: string
 *           description: Operating hours
 *       example:
 *         id: 60d0fe4f5311236168a109ca
 *         name: Sizzler One Bangkok
 *         address: One Bangkok, 89 Wireless, Lumphini
 *         district: Pathum Wan
 *         province: Bangkok
 *         postalcode: 10330
 *         phone: 093-5803947
 *         hours: 10:00-22:00
 */

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: The restaurants managing API
 */

/**
 * @swagger
 * /restaurants:
 *   get:
 *     summary: Returns the list of all the restaurants
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: The list of restaurants
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Restaurant'
 */

/**
 * @swagger
 * /restaurants/{id}:
 *   get:
 *     summary: Get the restaurant by id
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant id
 *     responses:
 *       200:
 *         description: The restaurant description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: The restaurant was not found
 */

/**
 * @swagger
 * /restaurants:
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     response:
 *       201:
 *         description: The restaurant was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /restaurants/{id}:
 *   put:
 *     summary: Update the restaurant by the id
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       200:
 *         description: The restaurant was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: The restaurant was not found
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /restaurants/{id}:
 *   delete:
 *     summary: Remove the restaurant by id
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant id
 *     response:
 *       200:
 *         description: The restaurant was deleted
 *       404:
 *         description: The restaurant was not found
 */
