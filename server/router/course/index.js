const router = require("express").Router();
const {
  allCourses,
  createCourse,
} = require("../../controller/courses.controller");
const upload = require("../../middlewares/fileUpload");

/**
 * All Course Route
 * https://localhost:5000/api/v1/courses/
 */
router.get("/courses/", allCourses);

/**
 * Create Course Route
 * https://localhost:5000/api/v1/courses/create
 */
router.post("/courses/create", upload.single("thumb"), createCourse);

module.exports = router;
