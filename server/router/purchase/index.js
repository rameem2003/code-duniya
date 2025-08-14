const {
  successPurchase,
  failPurchase,
  cancelPurchase,
} = require("../../controller/courses.controller");

const router = require("express").Router();

router.post("/order/success/:id", successPurchase);
router.post("/order/fail/:id", failPurchase);
router.post("/order/cancel/:id", cancelPurchase);

module.exports = router;
