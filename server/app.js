require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const requestIp = require("request-ip");
const { welcomeNote } = require("./constant/constant");
const connectDb = require("./config/db");

const app = express();
connectDb();

/* * Middleware */
app.use(
  cors({
    origin: "*", // Allow all origins
    credentials: true, // Allow cookies to be sent
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestIp.mw());

/**
 * Welcome Route
 */
app.get("/", (req, res) => {
  res.status(200).send(welcomeNote);
});

/**
 * For Error Route
 */
app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    msg: "Invalid Route",
  });
});

module.exports = app;
