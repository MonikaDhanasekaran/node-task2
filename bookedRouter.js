const express = require("express");

const router = express.Router();

const bookedModule = require("./modules/bookedModule");

router.get("/get",bookedModule.getbookedRoom);

router.post("/create",bookedModule.createbookedRoom);

module.exports = router;