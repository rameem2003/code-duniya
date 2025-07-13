const {
  getAllCategories,
  uploadCategory,
} = require("../services/category.service");

/**
 * Get all categories controller
 */
const allCategories = async (req, res) => {
  try {
    let data = await getAllCategories();
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error fetching categories",
      error: error.message,
    });
  }
};

/**
 * Create category controller
 */
const createCategory = async (req, res) => {
  const { name } = req.body;
  const thumb = req.file
    ? req.file.filename
    : "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  try {
    let data = await uploadCategory({ name, thumb });
    res.status(200).send({
      success: true,
      msg: "Category created successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error creating category",
      error: error.message,
    });
  }
};

module.exports = {
  allCategories,
  createCategory,
};
