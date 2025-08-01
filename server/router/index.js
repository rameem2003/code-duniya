const router = require("express").Router();

const auth = require("./auth");
const cart = require("./cart");
const courses = require("./course");
const categories = require("./category");
const successStory = require("./success_story");
const api_base = process.env.API_VERSION_BASE || "/api/v1";

/**
 * Auth Routes
 * https://localhost:5000/api/v1/auth
 */
router.use(api_base, auth);

/**
 * Cart Routes
 * https://localhost:5000/api/v1/cart
 */
router.use(api_base, cart);

/**
 * Course Routes
 * https://localhost:5000/api/v1/courses
 */
router.use(api_base, courses);

/**
 * Category Routes
 * https://localhost:5000/api/v1/category
 */
router.use(api_base, categories);

/**
 * Success Story Routes
 * https://localhost:5000/api/v1/successstory
 */
router.use(api_base, successStory);

module.exports = router;
