const express = require("express");

const router = express.Router();

const roomModule = require("./modules/roomModule");

router.get("/get",roomModule.getRoom);

router.post("/create",roomModule.createRoom);

module.exports = router;