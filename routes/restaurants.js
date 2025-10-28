const express = require('express');
const router = express.Router();

const app = express();

router.get('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all restaurants'});
});

router.get('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Show restaurant with ID: ${req.params.id}`});
});

router.post('/', (req, res) => {
    res.status(201).json({success: true, msg: 'Create new restaurant'});
});

router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update restaurant with ID: ${req.params.id}`});
});

router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete restaurant with ID: ${req.params.id}`});
});

module.exports = router;