const express = require('express');
const {getReservations, getReservation, addReservation, updateReservation, deleteReservation} = require('../controllers/reservations');

const router = express.Router({mergeParams: true});

const {protect, authorize} = require('../middleware/auth');

router.route('/')
    .get(protect, getReservations)
    .post(protect, addReservation);
router.route('/:id')
    .get(protect, getReservation)
    .put(protect, updateReservation)
    .delete(protect, deleteReservation);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       required:
 *         - user
 *         - restaurant
 *         - resvDate
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: The auto-generated id of the reservation
 *           example: 609e12672f8fb814c89f9e77
 *         user:
 *           type: ObjectId
 *           description: The id of the user who made the reservation
 *         restaurant:
 *           type: ObjectId
 *           description: The id of the restaurant for the reservation
 *         resvDate:
 *           type: Date
 *           description: The date and time of the reservation
 *       example:
 *         id: 609e12672f8fb814c89f9e77
 *         user: 609e125f2f8fb814c89f9e75
 *         restaurant: 609e123a2f8fb814c89f9e73
 *         resvDate: 2023-12-01T19:30:00.000Z
 */

/**
 * @swagger
 * tags:
 *   name: Reservations
 *   description: The reservations managing API
 */

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Returns the list of all the reservations
 *     tags: [Reservations]
 *     responses:
 *       200:
 *         description: The list of the reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 */

/**
 * @swagger
 * /reservations/{id}:
 *   get:
 *     summary: Get the reservation by id
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reservation id
 *     responses:
 *       200:
 *         description: The reservation description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: The reservation was not found
 */

/**
 * @swagger
 * /restaurants/{restaurantId}/reservations:
 *   post:
 *     summary: Create a new reservation
 *     tags: [Reservations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     responses:
 *       201:
 *         description: The reservation was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /reservations/{id}:
 *   put:
 *     summary: Update the reservation by the id
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reservation id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     responses:
 *       200:
 *         description: The reservation was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: The reservation was not found
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /reservations/{id}:
 *   delete:
 *     summary: Remove the reservation by id
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reservation id
 *     responses:
 *       200:
 *         description: The reservation was deleted
 *       404:
 *         description: The reservation was not found
 */

/**
 * @swagger
 * /restaurants/{restaurantId}/reservations:
 *   get:
 *     summary: Returns the list of reservations for a specific restaurant
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant id
 *     responses:
 *       200:
 *         description: The list of the reservations for the restaurant
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: The restaurant was not found
 */
