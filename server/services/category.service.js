const deleteFile = require("../lib/deleteFile");
const categoryModel = require("../models/category.model");
const { thumbImageGenerator } = require("./common.service");

const findCategoryById = async (id) => {
  try {
    let res = await categoryModel.findById(id).populate("courses");

    return res;
  } catch (error) {
    throw new Error("Error finding category: " + error.message);
  }
};

const getAllCategories = async () => {
  try {
    let res = await categoryModel.find().populate("courses");
    return res;
  } catch (error) {
    throw new Error("Error fetching courses: " + error.message);
  }
};

const uploadCategory = async ({ name, thumbLink }) => {
  try {
    let data = {
      name,
      thumb: thumbImageGenerator(thumbLink),
    };
    let newCategory = new categoryModel(data);

    await newCategory.save();
    return newCategory;
  } catch (error) {
    throw new Error("Error uploading category: " + error.message);
  }
};

const categoryUpdate = async (id, updateFields, file) => {
  try {
    let targetCategory = await findCategoryById(id);

    await categoryModel.findOneAndUpdate(
      { _id: targetCategory._id },
      { $set: { ...updateFields, thumb: thumbImageGenerator(file) } }
    );

    if (file && !targetCategory.thumb.includes("flaticon")) {
      let thumb = targetCategory.thumb.split("/");
      let fileName = thumb[thumb.length - 1];

      await deleteFile(fileName);
    }
  } catch (error) {
    throw new Error("Error updating category: " + error.message);
  }
};

const categoryDelete = async (id) => {
  try {
    let targetCategory = await findCategoryById(id);
    if (!targetCategory.thumb.includes("flaticon")) {
      let thumb = targetCategory.thumb.split("/");
      let file = thumb[thumb.length - 1];

      await deleteFile(file);
    }
    let res = await categoryModel.findByIdAndDelete(id);
    return res;
  } catch (error) {
    throw new Error("Error deleting category: " + error.message);
  }
};

module.exports = {
  findCategoryById,
  getAllCategories,
  uploadCategory,
  categoryUpdate,
  categoryDelete,
};
