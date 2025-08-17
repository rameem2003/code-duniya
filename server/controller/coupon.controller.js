const { createCouponService } = require("../services/coupon.service");
const { newCouponValidator } = require("../validator/coupon.validator");

const createCoupon = async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ success: false, message: "Unauthorized" });
  }

  let { data, error } = newCouponValidator.safeParse(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: JSON.parse(error.message)[0].message });
  }

  try {
    let coupon = await createCouponService(
      data.code.toUpperCase(),
      data.discount,
      req.user.id
    );
    res.status(200).send({
      success: true,
      msg: "Coupon created successfully",
      coupon,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error creating coupon",
      error,
    });
  }
};

module.exports = { createCoupon };
