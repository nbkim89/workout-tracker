const express = require("express");
const router = express.Router();
const db = require('../models');

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    )
        .then(dbworkout => {
            res.json({ success: dbworkout });
        })
        .catch(err => {
            res.json(err);
        });

});

router.get("/api/workouts/range", ({ body }, res) => {

    db.Workout.find()
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;