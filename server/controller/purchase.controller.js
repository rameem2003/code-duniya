const { findUserById } = require("../services/auth.service");
const {
  findPurchases,
  findPurchaseById,
  findPurchasesByUserId,
  approvePurchaseById,
} = require("../services/purchase.service");

const getAllPurchases = async (req, res) => {
  try {
    let data = await findPurchases();
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error fetching purchases",
      error: error.message,
    });
  }
};

const getSinglePurchase = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await findPurchaseById(id);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error fetching purchase",
      error: error.message,
    });
  }
};

const getSingleUserPurchase = async (req, res) => {
  if (!req.user) {
    return res.status(400).send({ success: false, msg: "Unauthorized user" });
  }

  let user = await findUserById(req.user.id);

  try {
    let data = await findPurchasesByUserId(user._id);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error fetching purchases by user ID",
      error: error.message,
    });
  }
};

const approvedPurchase = async (req, res) => {
  if (!req.user) {
    return res.status(400).send({ success: false, msg: "Unauthorized user" });
  }

  const { id } = req.params;

  try {
    let data = await findPurchaseById(id);
    if (!data) {
      return res
        .status(404)
        .send({ success: false, msg: "Purchase not found" });
    }

    await approvePurchaseById(id);

    res.status(200).send({
      success: true,
      msg: "Purchase approved successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error approving purchase",
      error: error.message,
    });
  }
};

module.exports = {
  getAllPurchases,
  getSinglePurchase,
  getSingleUserPurchase,
  approvedPurchase,
};
