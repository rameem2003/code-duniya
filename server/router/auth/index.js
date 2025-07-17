const {
  register,
  login,
  logout,
  getUserProfile,
  sendEmailVerificationToken,
  verifyEmailToken,
} = require("../../controller/auth.controller");
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
 * Get user profile route
 * https://localhost:5000/api/v1/auth/profile
 */
router.get("/auth/profile", verifyAuthentication, getUserProfile);

/**
 * User register route
 * https://localhost:5000/api/v1/auth/register
 */
router.post("/auth/register", upload.single("avatar"), register);

/**
 * Send email verification token route
 * https://localhost:5000/api/v1/auth/send-email-verification
 */
router.post(
  "/auth/send-email-verification",
  verifyAuthentication,
  sendEmailVerificationToken
);

/**
 * Verify email token route
 * https://localhost:5000/api/v1/auth/verify-email
 */
router.get("/auth/verify-email", verifyEmailToken);

/**
 * User logout route
 * https://localhost:5000/api/v1/auth/logout
 */
router.post("/auth/logout", verifyAuthentication, logout);

module.exports = router;
