const {
  setToCart,
  checkCourseInCart,
  findCartByUserId,
  removeCartItem,
  applyCouponAndUpdateCart,
} = require("../services/cart.service");
const { findCouponCode } = require("../services/coupon.service");
const { findCourseById } = require("../services/courses.service");
const { code } = require("../validator/coupon.validator");

const getUserCart = async (req, res) => {
  if (!req.user) {
    return res
      .status(400)
      .send({ success: false, message: "Unauthorized user" });
  }

  try {
    const data = await findCartByUserId(req.user.id);
    return res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Error fetching cart",
      error: error.message,
    });
  }
};

const addToCart = async (req, res) => {
  const { courseId } = req.body;
  if (!req.user) {
    return res
      .status(400)
      .send({ success: false, message: "Unauthorized user" });
  }

  let courseExists = await findCourseById(courseId);

  if (!courseExists) {
    return res.status(404).send({
      success: false,
      msg: "Course not found",
    });
  }

  let courseInCart = await checkCourseInCart(req.user.id, courseId);
  if (courseInCart) {
    return res.status(400).send({
      success: false,
      msg: "Course already in cart",
    });
  }

  try {
    await setToCart(req.user.id, courseId);
    return res.status(200).send({
      success: true,
      msg: "Course added to cart",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Error adding course to cart",
      error: error.message,
    });
  }
};

const applyCoupon = async (req, res) => {
  if (!req.user) {
    return res
      .status(400)
      .send({ success: false, message: "Unauthorized user" });
  }

  let { data, error } = code.safeParse(req.body.code);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: JSON.parse(error.message)[0].message });
  }

  let coupon = await findCouponCode(data);
  if (!coupon) {
    return res.status(400).send({
      success: false,
      msg: "Invalid coupon code",
    });
  }
  let codeExistToCart = await findCartByUserId(req.user.id);

  if (codeExistToCart.coupon == coupon.code) {
    return res.status(400).send({
      success: false,
      msg: "Coupon already applied",
    });
  }

  try {
    await applyCouponAndUpdateCart(req.user.id, coupon.code, coupon.discount);
    return res.status(200).send({
      success: true,
      msg: "Coupon applied successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Error applying coupon",
      error: error.message,
    });
  }
};

const deleteCartItem = async (req, res) => {
  const { id } = req.body;
  if (!req.user) {
    return res
      .status(400)
      .send({ success: false, message: "Unauthorized user" });
  }

  try {
    await removeCartItem(id);
    return res.status(200).send({
      success: true,
      msg: "Course removed from cart",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Error removing course from cart",
      error: error.message,
    });
  }
};

module.exports = { getUserCart, addToCart, applyCoupon, deleteCartItem };
