const sendEmail = require("../lib/sendEmail");
const {
  findUserByEmail,
  hashedPassword,
  createNewUser,
  createRandomToken,
  saveVerificationToken,
  createEmailLink,
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
      .send({ success: false, msg: error.errors[0].message });
  }
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
    return res.status(400).send({ success: false, msg: "User already exist" });
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
    .send({ success: true, msg: "User created successfully", user });
};

module.exports = { login, register };
