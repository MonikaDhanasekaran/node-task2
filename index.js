const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const roomRouter = require("./roomRouter");
const bookedRouter = require("./bookedRouter");

const mongo = require("./connection");
mongo.connect();

const app = express();

app.use(express.json());  

app.use("/room",roomRouter);

app.use("/booked",bookedRouter);

app.listen(process.env.PORT);