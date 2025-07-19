const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const emailVerifyTokenModel = require("../models/emailVerifyToken.model");
const sessionModel = require("../models/session.model");
const { thumbImageGenerator } = require("./common.service");
const {
  ACCESS_TOKEN_EXPIRY,
  MILLISECONDS_PER_SECOND,
  REFRESH_TOKEN_EXPIRY,
} = require("../constant/constant");
const deleteFile = require("../lib/deleteFile");
const resetPasswordTokenModel = require("../models/resetPasswordToken.model");

const findUserById = async (id) => {
  try {
    let user = await userModel.findOne({ _id: id });
    return user;
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    let res = await userModel.findOne({ email });
    return res;
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

const findSessionById = async (id) => {
  try {
    let session = await sessionModel.findOne({ _id: id });

    return session;
  } catch (error) {
    throw new Error("Error finding session: " + error.message);
  }
};

const createNewUser = async ({
  name,
  email,
  password,
  role,
  phone,
  avatarLink,
}) => {
  try {
    let res = new userModel({
      name,
      email,
      password,
      role,
      phone,
      avatar: thumbImageGenerator(avatarLink),
    });
    await res.save();
    return res._id;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const findUserAndUpdateProfile = async (id, updateFields, avatarPath) => {
  try {
    let targetUser = await findUserById(id);

    await userModel.findOneAndUpdate(
      { _id: targetUser._id },
      { $set: { ...updateFields, avatar: thumbImageGenerator(avatarPath) } }
    );

    if (avatarPath && !targetUser.avatar.includes("flaticon")) {
      let thumb = targetUser.avatar.split("/");
      let fileName = thumb[thumb.length - 1];

      await deleteFile(fileName);
    }
  } catch (error) {
    throw new Error("Error updating course: " + error.message);
  }
};

const updateUserPassword = async (id, newPassword) => {
  try {
    await userModel.findOneAndUpdate(
      { _id: id },
      { $set: { password: newPassword } }
    );
  } catch (error) {
    throw new Error("Error updating course: " + error.message);
  }
};

const authenticateUser = async ({ req, res, user }) => {
  const session = await createSession(
    user._id,
    req.headers["user-agent"],
    req.ip
  );
  const accessToken = createAccessToken({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isVerified: user.isVerified,
    avatar: user.avatar,
    session: session._id,
  });

  const refreshToken = createRefreshToken(session._id);

  const baseConfig = { httpOnly: true, secure: true };

  res.cookie("access_token", accessToken, {
    ...baseConfig,
    maxAge: ACCESS_TOKEN_EXPIRY,
  });

  res.cookie("refresh_token", refreshToken, {
    ...baseConfig,
    maxAge: REFRESH_TOKEN_EXPIRY,
  });
};

const verifyJWTToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const createSession = async (userId, userAgent, ip) => {
  try {
    const session = new sessionModel({
      userId,
      userAgent,
      ip,
    });
    await session.save();

    return session;
  } catch (error) {
    throw new Error("Error creating session: " + error.message);
  }
};

const clearSession = async (sessionId) => {
  try {
    await sessionModel.findOneAndDelete({ _id: sessionId });
  } catch (error) {
    throw new Error("Error clearing session: " + error.message);
  }
};

const createAccessToken = ({
  id,
  name,
  email,
  role,
  isVerified,
  avatar,
  session,
}) => {
  return jwt.sign({ id, name, email, session }, process.env.JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY / MILLISECONDS_PER_SECOND, //   expiresIn: "15m",
  });
};

const createRefreshToken = (sessionId) => {
  return jwt.sign({ sessionId }, process.env.JWT_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY / MILLISECONDS_PER_SECOND, //   expiresIn: "1w",
  });
};

const refreshTokens = async (refreshToken) => {
  try {
    const decodedToken = verifyJWTToken(refreshToken);

    const currentSession = await findSessionById(decodedToken.sessionId);

    if (!currentSession) {
      throw new Error("Invalid session");
    }

    const user = await findUserById(currentSession.userId);

    if (!user) throw new Error("Invalid User");

    const userInfo = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
      avatar: user.avatar,
      session: currentSession._id,
    };

    const newAccessToken = createAccessToken(userInfo);
    const newRefreshToken = createRefreshToken(currentSession._id);

    return {
      newAccessToken,
      newRefreshToken,
      user: userInfo,
    };
  } catch (error) {
    console.log(error.message);
  }
};

const saveVerificationToken = async (userID, token) => {
  try {
    await emailVerifyTokenModel.findOneAndDelete({ userID });
    let newToken = new emailVerifyTokenModel({ userID, token });
    await newToken.save();
  } catch (error) {
    throw new Error("Error saving verification token: " + error.message);
  }
};

const validateVerificationToken = async (userID, token) => {
  try {
    let tokenExist = await emailVerifyTokenModel.findOne({ userID, token });
    return tokenExist;
  } catch (error) {
    throw new Error("Error validating verification token: " + error.message);
  }
};

const findUserAndUpdateEmailVerification = async (id) => {
  try {
    let user = await userModel.findOneAndUpdate(
      { _id: id },
      { isVerified: true }
    );
    return user;
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

const findResetPasswordToken = async (token) => {
  try {
    let data = await resetPasswordTokenModel.findOne({ token });

    return data;
  } catch (error) {
    throw new Error("Error finding reset password token: " + error.message);
  }
};

const createResetPasswordTokenLink = async (userID) => {
  try {
    let token = createRandomToken();
    await resetPasswordTokenModel.findOneAndDelete({ userID });

    let newToken = new resetPasswordTokenModel({ userID, token });
    newToken.save();

    let tokenLink =
      process.env.SYSTEM_ENV == "development"
        ? `http://localhost:5000/api/v1/auth/reset-password/${token}`
        : `https://code-duniya.onrender.com/api/v1/auth/reset-password/${token}`;

    return tokenLink;
  } catch (error) {
    throw new Error(
      "Error creating reset password token link: " + error.message
    );
  }
};

const clearResetPasswordToken = async (id) => {
  try {
    await resetPasswordTokenModel.findOneAndDelete({ _id: id });
  } catch (error) {
    throw new Error("Error clearing reset password token: " + error.message);
  }
};

const clearTokenSchema = async (userID) => {
  try {
    await emailVerifyTokenModel.findOneAndDelete({ userID });
  } catch (error) {
    throw new Error("Error clearing token schema: " + error.message);
  }
};

const createEmailLink = (email, token) => {
  const url = new URL(
    process.env.SYSTEM_ENV == "development"
      ? `http://localhost:5000/api/v1/auth/verify-email`
      : `https://code-duniya.onrender.com/api/v1/auth/verify-email`
  );

  url.searchParams.append("token", token);
  url.searchParams.append("email", email);

  return url.toString();
};

const hashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const createRandomToken = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  findUserById,
  findUserByEmail,
  findSessionById,
  createNewUser,
  findUserAndUpdateProfile,
  updateUserPassword,
  authenticateUser,
  verifyJWTToken,
  createSession,
  clearSession,
  createAccessToken,
  createRefreshToken,
  refreshTokens,
  saveVerificationToken,
  validateVerificationToken,
  findUserAndUpdateEmailVerification,
  findResetPasswordToken,
  createResetPasswordTokenLink,
  clearResetPasswordToken,
  clearTokenSchema,
  createEmailLink,
  hashedPassword,
  createRandomToken,
  verifyPassword,
};
