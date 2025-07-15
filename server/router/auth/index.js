const { register } = require("../../controller/auth.controller");
const createUploadMiddleware = require("../../middlewares/fileUpload");

const router = require("express").Router();

const upload = createUploadMiddleware({ type: "avatar" });

/**
 * User register route
 * https://localhost:5000/api/v1/auth/register
 */
router.post("/auth/register", upload.single("avatar"), register);

module.exports = router;
