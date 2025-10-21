const router = require("express").Router();
const {
  allCourses,
  createCourse,
  deleteCourse,
  updateCourse,
  getSingleCourse,
  purchaseCourse,
  completeCourse,
} = require("../../controller/courses.controller");
const createUploadMiddleware = require("../../middlewares/fileUpload");
const verifyAuthentication = require("../../middlewares/middleware");
const upload = createUploadMiddleware({ type: "thumb" });

/**
 * All Course Route
 * https://localhost:5000/api/v1/courses/
 */
router.get("/courses/", allCourses);

/**
 * Get single course controller
 * https://localhost:5000/api/v1/courses/:id
 */
router.get("/courses/:id", getSingleCourse);

/**
 * Create Course Route
 * https://localhost:5000/api/v1/courses/create
 */
router.post(
  "/courses/create",
  verifyAuthentication,
  upload.single("thumb"),
  createCourse
);

/**
 * Update Course Route
 * https://localhost:5000/api/v1/courses/update/:id
 */
router.put(
  "/courses/update/:id",
  verifyAuthentication,
  upload.single("thumb"),
  updateCourse
);

/**
 * Course Delete Route
 * https://localhost:5000/api/v1/courses/delete/:id
 */
router.delete("/courses/delete/:id", verifyAuthentication, deleteCourse);

/**
 * Course purchase route
 * https://localhost:5000/api/v1/courses/purchase
 */
router.post("/courses/purchase", verifyAuthentication, purchaseCourse);

/**
 * Course complete route
 * https://localhost:5000/api/v1/courses/complete/:id
 */
router.post("/courses/complete/:id", verifyAuthentication, completeCourse);

module.exports = router;
