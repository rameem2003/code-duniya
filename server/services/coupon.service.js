const couponModel = require("../models/coupon.model");

const findCouponCode = async (code) => {
  try {
    let coupon = await couponModel.findOne({ code });
    return coupon;
  } catch (error) {
    throw new Error("Error finding coupon: " + error.message);
  }
};

const createCouponService = async (code, discount, user) => {
  try {
    let coupon = new couponModel({ code, discount, user });
    await coupon.save();

    return coupon;
  } catch (error) {
    throw new Error("Error creating coupon: " + error.message);
  }
};

module.exports = { findCouponCode, createCouponService };
