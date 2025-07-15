const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const emailVerifyTokenModel = require("../models/emailVerifyToken.model");
const { thumbImageGenerator } = require("./common.service");

const findUserByEmail = async (email) => {
  try {
    let res = await userModel.findOne({ email });
    return res;
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

const createNewUser = async ({ name, email, password, role, avatarLink }) => {
  try {
    let res = new userModel({
      name,
      email,
      password,
      role,
      avatar: thumbImageGenerator(avatarLink),
    });
    await res.save();
    return res._id;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
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

module.exports = {
  findUserByEmail,
  createNewUser,
  saveVerificationToken,
  createEmailLink,
  hashedPassword,
  createRandomToken,
};
