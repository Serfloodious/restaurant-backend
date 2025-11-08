const express = require('express');
const {getUsers, getUser} = require('../controllers/users');

const router = express.Router();

const {protect, authorize} = require('../middleware/auth');

router.route('/').get(protect, authorize('admin'), getUsers);
router.route('/:id').get(protect, authorize('admin'), getUser);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: The auto-generated id of the user
 *           example: 60d0fe4f5311236168a109ca
 *         firstname:
 *           type: string
 *           description: The first name of the user
 *         lastname:
 *           type: string
 *           description: The last name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         phone:
 *           type: string
 *           description: The contact phone number of the user
 *         role:
 *           type: string
 *           description: The role of the user (e.g., user, admin)
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         id: 60d0fe4f5311236168a109ca
 *         firstname: Jim
 *         lastname: Doe
 *         email: jim.d@gmail.com
 *         phone: 123-456-7890
 *         role: user
 *         password: 11223344
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User retrieval
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */
