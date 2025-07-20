const {
  allCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  getSingleCategory,
} = require("../../controller/category.controller");
const createUploadMiddleware = require("../../middlewares/fileUpload");
const verifyAuthentication = require("../../middlewares/middleware");
const upload = createUploadMiddleware({ type: "thumb" });

const router = require("express").Router();

/**
 * All Category Route
 * https://localhost:5000/api/v1/courses/
 */
router.get("/category/", allCategories);

/**
 * Get Single Category Route
 * https://localhost:5000/api/v1/courses/:id
 */
router.get("/category/:id", getSingleCategory);

/**
 * Create Course Route
 * https://localhost:5000/api/v1/courses/create
 */
router.post(
  "/category/create",
  verifyAuthentication,
  upload.single("thumb"),
  createCategory
);

/**
 * Update Category Route
 * https://localhost:5000/api/v1/courses/update/:id
 */
router.put(
  "/category/update/:id",
  verifyAuthentication,
  upload.single("thumb"),
  updateCategory
);

/**
 * Delete Category Route
 * https://localhost:5000/api/v1/courses/delete/:id
 */
router.delete("/category/delete/:id", verifyAuthentication, deleteCategory);

module.exports = router;
