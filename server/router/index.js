const router = require("express").Router();

const auth = require("./auth");
const cart = require("./cart");
const courses = require("./course");
const purchase = require("./purchase");
const categories = require("./category");
const successStory = require("./success_story");
const coupon = require("./coupon");
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
 * Purchase Routes
 * https://localhost:5000/api/v1/order
 */
router.use(api_base, purchase);

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

/**
 * Coupon Routes
 * https://localhost:5000/api/v1/coupon
 */
router.use(api_base, coupon);

module.exports = router;
