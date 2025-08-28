require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const requestIp = require("request-ip");
const morgan = require("morgan");
const router = require("./router");
const { welcomeNote } = require("./constant/constant");
const connectDb = require("./config/db");

const app = express();
connectDb();

/* * Middleware */
app.use(
  cors({
    origin: ["http://localhost:3000"], // Allow all origins
    credentials: true, // Allow cookies to be sent
  })
);
app.use(express.static("uploads")); // Serve static files from the uploads directory
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestIp.mw());
app.use(morgan("dev")); // Logging middleware
app.use(router);

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
