const purchaseModel = require("../models/purchase.model");

const addToPurchase = async (userId, courseId) => {
  try {
    let data = new purchaseModel({ userId, course: courseId });
    await data.save();

    return data;
  } catch (error) {
    throw new Error("Error adding to purchase: " + error.message);
  }
};

const updatePurchase = async (id) => {
  try {
    let data = await purchaseModel.findOneAndUpdate(
      { _id: id },
      { $set: { isApproved: true } },
      { new: true }
    );
    return data;
  } catch (error) {
    throw new Error("Error updating purchase: " + error.message);
  }
};

const deletePurchase = async (id) => {
  try {
    let data = await purchaseModel.deleteOne({ _id: id });
    return data;
  } catch (error) {
    throw new Error("Error deleting purchase: " + error.message);
  }
};

module.exports = {
  addToPurchase,
  updatePurchase,
  deletePurchase,
};
