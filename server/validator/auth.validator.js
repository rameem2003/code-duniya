const z = require("zod");

const nameValidator = z
  .string()
  .trim()
  .min(3, { message: "Name must be at least 3 characters long." })
  .max(100, { message: "Name must be no more than 100 characters." });

const emailValidator = z
  .string()
  .trim()
  .email({ message: "Invalid email address" });

const passwordValidator = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(15, { message: "Password must be at most 15 characters long" });

const randomTokenValidator = z.string().min(6);

const emailVerificationValidator = z.object({
  email: emailValidator,
  token: randomTokenValidator,
});

const loginValidator = z.object({
  email: emailValidator,
  password: passwordValidator,
});

const registrationValidator = loginValidator.extend({
  name: nameValidator,
  role: z
    .enum(["user", "admin", "moderator"], {
      message: "Role is required",
    })
    .default("user"),
  phone: z
    .string()
    .trim()
    .min(11, { message: "Phone number must be at least 11 characters long" }),
});

const changePasswordValidator = z
  .object({
    oldPassword: passwordValidator,
    newPassword: passwordValidator,
    confirmPassword: passwordValidator,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
  randomTokenValidator,
  emailVerificationValidator,
  loginValidator,
  registrationValidator,
  changePasswordValidator,
};
