const {
  addToCart,
  getUserCart,
  deleteCartItem,
} = require("../../controller/cart.controller");
const verifyAuthentication = require("../../middlewares/middleware");

const router = require("express").Router();

/**
 * Get user cart route
 * https://localhost:5000/api/v1/cart
 */
router.get("/cart", verifyAuthentication, getUserCart);

/**
 * Add to cart route
 * https://localhost:5000/api/v1/cart/add
 */
router.post("/cart/add", verifyAuthentication, addToCart);

/**
 * Remove from cart route
 * https://localhost:5000/api/v1/cart/remove
 */
router.delete("/cart/remove", verifyAuthentication, deleteCartItem);

module.exports = router;
