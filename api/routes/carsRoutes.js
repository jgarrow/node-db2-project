const express = require("express");
const db = require("../../data/dbConfig");

const router = express.Router();

// get all cars
router.get("/", (req, res) => {
    db("cars")
        .then((response) => res.status(200).json(response))
        .catch((err) =>
            res.status(500).json({ message: `Error fetching cars` })
        );
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    db("cars")
        .then((response) => {
            if (response.length) {
                res.status(200).json(response);
            } else {
                res.status(400).json({
                    message: `Car with id ${id} not found`,
                });
            }
        })
        .catch((err) =>
            res
                .status(500)
                .json({ message: `Error fetching car with id ${id}` })
        );
});

router.post("/", (req, res) => {
    const newCar = req.body;

    if (!newCar.vin || !newCar.make || !newCar.model || !newCar.mileage) {
        res.status(400).json({
            message: `VIN, make, model, and mileage are required`,
        });
    } else {
        db("cars")
            .insert(newCar)
            .then((response) => {
                if (response.length) {
                    res.status(200).json(response);
                } else {
                    res.status(500).json({
                        message: `Failed to create new car`,
                    });
                }
            })
            .catch((err) =>
                res.status(500).json({ message: `Failed to create new car` })
            );
    }
});

module.exports = router;
