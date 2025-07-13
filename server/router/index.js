const router = require("express").Router();

const courses = require("./course");
const categories = require("./category");
const api_base = process.env.API_VERSION_BASE || "/api/v1";

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

module.exports = router;
