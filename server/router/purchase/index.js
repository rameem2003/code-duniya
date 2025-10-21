const router = require("express").Router();
const {
  successPurchase,
  failPurchase,
  cancelPurchase,
} = require("../../controller/courses.controller");
const {
  getAllPurchases,
  getSinglePurchase,
  getSingleUserPurchase,
  approvedPurchase,
} = require("../../controller/purchase.controller");
const verifyAuthentication = require("../../middlewares/middleware");

router.post("/order/success/:id", successPurchase);
router.post("/order/fail/:id", failPurchase);
router.post("/order/cancel/:id", cancelPurchase);

router.get("/order/purchase/", verifyAuthentication, getAllPurchases);
router.get(
  "/order/purchase/single/:id",
  verifyAuthentication,
  getSinglePurchase
);
router.get("/order/purchase/user", verifyAuthentication, getSingleUserPurchase);
router.post(
  "/order/purchase/approve/:id",
  verifyAuthentication,
  approvedPurchase
);

module.exports = router;
