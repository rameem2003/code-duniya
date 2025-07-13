const categoryModel = require("../models/category.model");

const getAllCategories = async () => {
  try {
    let res = await categoryModel.find().populate("courses");
    return res;
  } catch (error) {
    throw new Error("Error fetching courses: " + error.message);
  }
};

const uploadCategory = async ({ name, thumb }) => {
  try {
    let thumbLink =
      process.env.SYSTEM_ENV == "development"
        ? `http://localhost:5000/${thumb}`
        : `https://code-duniya.onrender.com/uploads/${thumb}`;
    let data = {
      name,
      thumb:
        thumbLink || "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };
    let newCategory = new categoryModel(data);

    await newCategory.save();
    return newCategory;
  } catch (error) {
    throw new Error("Error uploading category: " + error.message);
  }
};

module.exports = {
  getAllCategories,
  uploadCategory,
};
