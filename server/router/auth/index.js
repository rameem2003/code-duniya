const {
  register,
  login,
  logout,
  getUserProfile,
  sendEmailVerificationToken,
  verifyEmailToken,
  editProfile,
  changePassword,
  verifyResetPasswordToken,
  sendResetPasswordToken,
  resetPassword,
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
 * User profile update route
 * https://localhost:5000/api/v1/auth/update-profile
 */
router.patch(
  "/auth/update-profile",
  verifyAuthentication,
  upload.single("avatar"),
  editProfile
);

/**
 * User password update route
 * https://localhost:5000/api/v1/auth/update-password
 */
router.patch("/auth/update-password", verifyAuthentication, changePassword);

/**
 * Reset password link route
 * https://localhost:5000/api/v1/auth/reset-password
 */
router.post("/auth/reset-password", sendResetPasswordToken);

/**
 * Verify reset password token route
 * https://localhost:5000/api/v1/auth/reset-password-verify
 */
router.get("/auth/reset-password-verify/:token", verifyResetPasswordToken);

/**
 * Password reset route
 * https://localhost:5000/api/v1/auth/reset-password/:token
 */
router.post("/auth/reset-password/:token", resetPassword);

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
