const purchaseModel = require("../models/purchase.model");

const findPurchases = async () => {
  try {
    let data = await purchaseModel.find().populate("course").populate("userId");
    return data;
  } catch (error) {
    throw new Error("Error fetching purchases: " + error.message);
  }
};

const findPurchaseById = async (id) => {
  try {
    let data = await purchaseModel
      .findOne({ _id: id })
      .populate("course")
      .populate("userId");
    return data;
  } catch (error) {
    throw new Error("Error fetching purchase by ID: " + error.message);
  }
};

const findPurchasesByUserId = async (userId) => {
  try {
    let data = await purchaseModel
      .find({ userId })
      .populate("course")
      .populate("userId");
    return data;
  } catch (error) {
    throw new Error("Error fetching purchases by user ID: " + error.message);
  }
};

const addToPurchase = async (
  userId,
  courseId,
  coupon,
  discount,
  finalPrice
) => {
  try {
    let data = new purchaseModel({
      userId,
      course: courseId,
      coupon,
      discount,
      finalPrice,
    });
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
      { $set: { paid: true } },
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
  findPurchases,
  findPurchaseById,
  findPurchasesByUserId,
  addToPurchase,
  updatePurchase,
  deletePurchase,
};
