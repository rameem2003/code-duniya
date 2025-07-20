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

module.exports = {
  addToPurchase,
};
