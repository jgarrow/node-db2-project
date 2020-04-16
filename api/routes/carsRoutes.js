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

// get car by id
router.get("/:id", (req, res) => {
    const { id } = req.params;

    db("cars")
        .where({ id })
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

// create new car
router.post("/", (req, res) => {
    const newCar = req.body;

    if (!newCar.vin || !newCar.make || !newCar.model || !newCar.mileage) {
        res.status(400).json({
            message: `VIN, make, model, and mileage are required`,
        });
    } else if (
        !(typeof newCar.mileage === "int") ||
        !parseInt(newCar.mileage)
    ) {
        res.status(400).json({
            message: `Mileage must be a postive integer`,
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

// edit a car
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const updatedCar = req.body;

    db("cars")
        .where({ id })
        .update(updatedCar)
        .then((response) => {
            if (response > 0) {
                res.status(200).json(response);
            } else {
                res.status(400).json({
                    message: `Car of id ${id} not found`,
                });
            }
        })
        .catch((err) =>
            res
                .status(500)
                .json({ message: `Failed to update car of id ${id}` })
        );
});

// delete a car
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    db("cars")
        .where({ id })
        .del()
        .then((response) => {
            if (response > 0) {
                res.status(200).json({
                    message: `Car of id ${id} successfully deleted`,
                });
            } else {
                res.status(400).json({
                    message: `Failed to find car of id ${id}`,
                });
            }
        })
        .catch((err) =>
            res.status(500).json({ message: `Failed to delete car` })
        );
});

module.exports = router;
