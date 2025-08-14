const cartModel = require("../models/cart.model");

const checkCourseInCart = async (userId, courseId) => {
  try {
    let data = await cartModel.findOne({ userId, course: courseId });
    return data;
  } catch (error) {
    throw new Error("Error checking course in cart: " + error.message);
  }
};

const findCartByUserId = async (userId) => {
  try {
    let data = await cartModel.findOne({ userId }).populate("course");
    return data;
  } catch (error) {
    throw new Error("Error fetching cart by user ID: " + error.message);
  }
};

const setToCart = async (userId, courseId) => {
  try {
    await removeUserCart(userId);

    let data = new cartModel({ userId, course: courseId });
    await data.save();
    return data;
  } catch (error) {
    throw new Error("Error adding course to cart: " + error.message);
  }
};

const removeCartItem = async (id) => {
  try {
    let data = await cartModel.deleteOne({ _id: id });
    return data;
  } catch (error) {
    throw new Error("Error removing course from cart: " + error.message);
  }
};

const removeUserCart = async (userId) => {
  try {
    let data = await cartModel.deleteMany({ userId });
    return data;
  } catch (error) {
    throw new Error("Error removing user cart: " + error.message);
  }
};

module.exports = {
  checkCourseInCart,
  findCartByUserId,
  setToCart,
  removeCartItem,
  removeUserCart,
};
