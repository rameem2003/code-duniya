const z = require("zod");
const code = z
  .string()
  .min(4, { message: "Code must be at least 4 characters long" })
  .max(4, { message: "Code must be at most 4 characters long" });
const discount = z.number();

const newCouponValidator = z.object({
  code,
  discount,
});

module.exports = {
  code,
  discount,
  newCouponValidator,
};
