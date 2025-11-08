const express = require('express');
const {register, login, getMe, updateDetails, updatePassword, logout, deleteAccount} = require('../controllers/auth');

const router = express.Router();

const {protect} = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.get('/logout', protect, logout);
router.delete('/deleteaccount', protect, deleteAccount);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication and user account management
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     response:
 *       200:
 *         description: The user was successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     response:
 *       200:
 *         description: The user was successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: User have to provide email and password
 *       401:
 *         description: Password does not match or password or email cannot be converted to string
 *       404:
 *         description: Invalid credentials
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /me:
 *   get:
 *     summary: Get the logged in user's details
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: The user details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /updatedetails:
 *   put:
 *     summary: Update the logged in user's details
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *     response:
 *       200:
 *         description: The user details were successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /updatepassword:
 *   put:
 *     summary: Update the logged in user's password
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     response:
 *       200:
 *         description: The user password was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logout the current user
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: User logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /deleteaccount:
 *   delete:
 *     summary: Delete the logged in user's account
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: The user account was successfully deleted
 */