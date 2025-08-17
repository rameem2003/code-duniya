const { createCoupon } = require("../../controller/coupon.controller");
const verifyAuthentication = require("../../middlewares/middleware");

const router = require("express").Router();

/**
 * Add new coupon route
 * https://localhost:5000/api/v1/coupon/create
 */
router.post("/coupon/create", verifyAuthentication, createCoupon);

module.exports = router;
