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

router.get('/:id', async (req, res, next) => {
    try {
        const car = await Cars.getById(req.params.id)
        res.status(200).json(car)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const possibleCar = await Cars.create(req.body)
        res.status(201).json(possibleCar)
    } catch (error) {
        next(error)
    }
})



module.exports = router;