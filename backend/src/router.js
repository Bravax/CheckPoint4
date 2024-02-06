const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const carControllers = require("./controllers/carControllers");

// Route to get a list of items
router.get("/cars", carControllers.browse);

// Route to get a specific item by ID
router.get("/cars/:id", carControllers.read);

// Route to add a new item

// Route to delete a car

/* ************************************************************************* */

module.exports = router;
