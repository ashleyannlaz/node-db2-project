const express = require('express');
const Cars = require('./cars-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.status(200).json(cars)
    } catch (error) {
        next(error)
    }
})



module.exports = router;