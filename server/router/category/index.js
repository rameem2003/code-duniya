const {
  allCategories,
  createCategory,
} = require("../../controller/category.controller");
const upload = require("../../middlewares/fileUpload");

const router = require("express").Router();

/**
 * All Category Route
 * https://localhost:5000/api/v1/courses/
 */
router.get("/category/", allCategories);

/**
 * Create Course Route
 * https://localhost:5000/api/v1/courses/create
 */
router.post("/category/create", upload.single("thumb"), createCategory);

module.exports = router;
