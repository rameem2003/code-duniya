const sendEmail = require("../lib/sendEmail");
const {
  findUserByEmail,
  hashedPassword,
  createNewUser,
  createRandomToken,
  saveVerificationToken,
  createEmailLink,
  verifyPassword,
  authenticateUser,
  clearSession,
  findUserById,
  validateVerificationToken,
  findUserAndUpdateEmailVerification,
  clearTokenSchema,
  findUserAndUpdateProfile,
  updateUserPassword,
  createResetPasswordTokenLink,
  findResetPasswordToken,
  clearResetPasswordToken,
} = require("../services/auth.service");
const {
  loginValidator,
  registrationValidator,
  emailVerificationValidator,
  changePasswordValidator,
  emailValidator,
  resetPasswordValidator,
} = require("../validator/auth.validator");

/**
 * login controller
 */
const login = async (req, res) => {
  const { data, error } = loginValidator.safeParse(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password" });
  }

  let user = await findUserByEmail(data.email);

  if (!user) {
    return res.status(400).send({ success: false, message: "User not found" });
  }

  let isPasswordMatch = await verifyPassword(data.password, user.password);

  if (!isPasswordMatch) {
    return res
      .status(400)
      .send({ success: false, message: "Invalid password" });
  }

  let authdata = await authenticateUser({ req, res, user });

  return res
    .status(200)
    .send({ success: true, message: "Login successful", data: authdata });
};

/**
 * Get user profile controller
 */
const getUserProfile = async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ success: false, message: "Unauthorized" });
  }

  try {
    let user = await findUserById(req.user.id);

    if (!user) {
      return res
        .status(400)
        .send({ success: false, message: "User not found" });
    }
    console.log(user);

    return res.status(200).send({
      success: true,
      message: "User profile",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        role: user.role,
        isVerified: user.isVerified,
        avatar: user.avatar,
        block: user.block,
        courses: user.courses,
        successStory: user.successStories,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Internal server error" });
  }
};

/**
 * Edit user profile controller
 */
const editProfile = async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ success: false, message: "Unauthorized" });
  }
  const updateFields = {};

  //  available fields to update
  const fields = ["name", "email", "phone", "address"];

  // fill up updateFields with the fields that are present in the request body
  fields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updateFields[field] = req.body[field];
    }
  });

  try {
    await findUserAndUpdateProfile(
      req.user.id,
      updateFields,
      req?.file?.filename
    );

    return res
      .status(200)
      .send({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Internal server error" });
  }
};

/**
 * Change password controller
 */
const changePassword = async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ success: false, message: "Unauthorized" });
  }

  const { data, error } = changePasswordValidator.safeParse(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: JSON.parse(error.message)[0].message });
  }

  let userExist = await findUserById(req.user.id);

  if (!userExist) {
    return res.status(400).send({ success: false, message: "User not found" });
  }

  let isPasswordMatch = await verifyPassword(
    data.oldPassword,
    userExist.password
  );

  if (!isPasswordMatch) {
    return res
      .status(400)
      .send({ success: false, message: "Invalid password" });
  }

  let hashPassword = await hashedPassword(data.newPassword);

  await updateUserPassword(req.user.id, hashPassword);

  return res
    .status(200)
    .send({ success: true, message: "Password changed successfully" });
};

/**
 * Reset password link send controller
 */
const sendResetPasswordToken = async (req, res) => {
  const { data, error } = emailValidator.safeParse(req.body.email);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: JSON.parse(error.message)[0].message });
  }

  let userExist = await findUserByEmail(data);

  if (!userExist) {
    return res.status(400).send({ success: false, message: "User not found" });
  }

  let link = await createResetPasswordTokenLink(userExist._id);

  let emailBody = `
    <p>Click the link below to verify your email:</p>
    <a href="${link}">${link}</a> or copy and paste it this <b>${link}</b> into your browser.`;

  await sendEmail(userExist.email, "Reset Password Token", emailBody);

  return res
    .status(200)
    .send({ success: true, message: "Email sent successfully" });
};

/**
 * Find reset password token
 */
const verifyResetPasswordToken = async (req, res) => {
  const { token } = req.params;

  try {
    let resetToken = await findResetPasswordToken(token);

    if (!resetToken) {
      return res.status(400).send({ success: false, message: "Invalid token" });
    }

    let user = await findUserById(resetToken.userID);

    if (!user) {
      return res
        .status(400)
        .send({ success: false, message: "User not found" });
    }

    // return res.status(200).send({
    //   success: true,
    //   message: "Token is valid",
    //   user,
    // });

    res.redirect("https://rolstudiobangladesh.vercel.app/");
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Internal server error" });
  }
};

/**
 * Reset password controller
 */
const resetPassword = async (req, res) => {
  const { token } = req.params;

  let existToken = await findResetPasswordToken(token);

  if (!existToken) {
    return res.status(400).send({ success: false, message: "Invalid token" });
  }

  const { data, error } = resetPasswordValidator.safeParse(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: JSON.parse(error.message)[0].message });
  }

  let user = await findUserById(existToken.userID);

  if (!user) {
    return res.status(400).send({ success: false, message: "User not found" });
  }

  let hashPassword = await hashedPassword(data.newPassword);

  await updateUserPassword(user._id, hashPassword);
  await clearResetPasswordToken(existToken._id);

  return res
    .status(200)
    .send({ success: true, message: "Password changed successfully" });
};
/**
 * Register controller
 */
const register = async (req, res) => {
  const { data, error } = registrationValidator.safeParse(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: JSON.parse(error.message)[0].message });
  }

  let existUser = await findUserByEmail(data.email);

  if (existUser) {
    return res
      .status(400)
      .send({ success: false, message: "User already exist" });
  }

  let hashPassword = await hashedPassword(data.password);

  let user = await createNewUser({
    name: data.name,
    email: data.email,
    password: hashPassword,
    role: data.role,
    phone: data.phone,
    avatarLink: req?.file?.filename,
  });

  return res
    .status(200)
    .send({ success: true, message: "User created successfully", user });
};

/**
 * Send email verification controller
 */
const sendEmailVerificationToken = async (req, res) => {
  if (!req.user)
    return res.status(400).send({ success: false, message: "User not found" });

  if (req.user.isVerified)
    return res
      .status(400)
      .send({ success: false, message: "User already verified" });
  try {
    const exist = await findUserById(req.user.id);

    if (!exist) {
      return res
        .status(400)
        .send({ success: false, message: "User not found" });
    }
    let randomToken = createRandomToken();

    await saveVerificationToken(exist._id, randomToken);

    let emailLink = createEmailLink(exist.email, randomToken);

    let emailBody = `
    <p>Click the link below to verify your email:</p>
    <a href="${emailLink}">${emailLink}</a> or copy and paste it this code <b>${randomToken}</b> into your browser.`;

    await sendEmail(exist.email, "Email Verification", emailBody);

    return res
      .status(200)
      .send({ success: true, message: "Email sent successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Internal server error" });
  }
};

/**
 * Token verification controller
 */
const verifyEmailToken = async (req, res) => {
  const { data, error } = emailVerificationValidator.safeParse(req.query);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: JSON.parse(error.message)[0].message });
  }

  try {
    const userExist = await findUserByEmail(data.email);

    if (!userExist) {
      return res
        .status(400)
        .send({ success: false, message: "User not found" });
    }

    let validateToken = await validateVerificationToken(
      userExist._id,
      data.token
    );

    if (!validateToken) {
      return res.status(400).send({ success: false, message: "Invalid token" });
    }

    await findUserAndUpdateEmailVerification(validateToken.userID);
    await clearTokenSchema(validateToken._id);

    return res
      .status(200)
      .send({ success: true, message: "Email verified successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Internal server error" });
  }
};

/**
 * Logout controller
 */
const logout = async (req, res) => {
  if (!req.user)
    return res.status(400).send({ success: false, message: "User not found" });

  await clearSession(req.user.session);
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  return res
    .status(200)
    .json({ success: true, message: "User logged out successfully" });
};

module.exports = {
  login,
  getUserProfile,
  editProfile,
  changePassword,
  sendResetPasswordToken,
  verifyResetPasswordToken,
  resetPassword,
  register,
  sendEmailVerificationToken,
  verifyEmailToken,
  logout,
};
