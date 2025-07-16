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
} = require("../services/auth.service");
const {
  loginValidator,
  registrationValidator,
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
    avatarLink: req?.file?.filename,
  });

  let randomToken = createRandomToken();

  await saveVerificationToken(user, randomToken);

  let emailLink = createEmailLink(data.email, randomToken);

  let emailBody = `
    <p>Click the link below to verify your email:</p>
    <a href="${emailLink}">${emailLink}</a> or copy and paste it this code <b>${randomToken}</b> into your browser.`;

  await sendEmail(data.email, "Email Verification", emailBody);
  return res
    .status(200)
    .send({ success: true, message: "User created successfully", user });
};

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
module.exports = { login, register, logout };
