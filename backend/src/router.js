const express = require("express");

const router = express.Router();

const carControllers = require("./controllers/carControllers");

router.get("/cars", carControllers.browse);

router.get("/cars/:id", carControllers.read);

module.exports = router;
