const { register, login, logout } = require("../../controller/auth.controller");
const createUploadMiddleware = require("../../middlewares/fileUpload");
const verifyAuthentication = require("../../middlewares/middleware");

const router = require("express").Router();

const upload = createUploadMiddleware({ type: "avatar" });

/**
 * User login route
 * https://localhost:5000/api/v1/auth/login
 */
router.post("/auth/login", login);

/**
 * User register route
 * https://localhost:5000/api/v1/auth/register
 */
router.post("/auth/register", upload.single("avatar"), register);

/**
 * User logout route
 * https://localhost:5000/api/v1/auth/logout
 */
router.post("/auth/logout", verifyAuthentication, logout);

module.exports = router;
