const express = require("express");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
} = require("./cars-middleware");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await Cars.getAll();
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {
  try {
    res.json(req.car);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res, next) => {
    try {
      const possibleCar = await Cars.create(req.body);
      res.status(201).json(possibleCar);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
