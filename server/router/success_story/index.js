const {
  createSuccessStory,
  deleteStory,
  allSuccessStories,
} = require("../../controller/successStory.controller");
const createUploadMiddleware = require("../../middlewares/fileUpload");
const verifyAuthentication = require("../../middlewares/middleware");

const router = require("express").Router();

const uploadThumb = createUploadMiddleware({ type: "thumb" });

/**
 * Get all success stories route
 * https://localhost:5000/api/v1/successstory
 */

router.get("/successstory/", allSuccessStories);

/**
 * Create a success story route
 * https://localhost:5000/api/v1/successstory/create
 */

router.post(
  "/successstory/create",
  verifyAuthentication,
  uploadThumb.single("thumb"),
  createSuccessStory
);

/**
 * Delete a success story route
 * https://localhost:5000/api/v1/successstory/delete/:id
 */

router.delete("/successstory/delete/:id", verifyAuthentication, deleteStory);

module.exports = router;
