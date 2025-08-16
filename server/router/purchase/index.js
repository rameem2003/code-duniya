const router = require("express").Router();
const {
  successPurchase,
  failPurchase,
  cancelPurchase,
} = require("../../controller/courses.controller");

router.post("/order/success/:id", successPurchase);
router.post("/order/fail/:id", failPurchase);
router.post("/order/cancel/:id", cancelPurchase);

module.exports = router;
