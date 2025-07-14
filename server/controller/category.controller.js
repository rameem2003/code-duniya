const {
  getAllCategories,
  uploadCategory,
  categoryDelete,
  categoryUpdate,
  findCategoryById,
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
 * Get single category controller
 */
const getSingleCategory = async (req, res) => {
  const { id } = req.params;

  try {
    let data = await findCategoryById(id);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error fetching category",
      error: error.message,
    });
  }
};

/**
 * Create category controller
 */
const createCategory = async (req, res) => {
  const { name } = req.body;
  const thumb = req?.file?.filename;

  try {
    let data = await uploadCategory({ name, thumbLink: thumb });
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

/**
 * Update category controller
 */
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const updateFields = {};

  //  available fields to update
  const fields = ["name", "description"];

  // fill up updateFields with the fields that are present in the request body
  fields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updateFields[field] = req.body[field];
    }
  });

  try {
    await categoryUpdate(id, updateFields, req?.file?.filename);
    res.status(200).send({
      success: true,
      msg: "Category updated successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error updating category",
      error: error.message,
    });
  }
};

/**
 * Delete category controller
 */
const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    let data = await categoryDelete(id);
    res.status(200).send({
      success: true,
      msg: "Category deleted successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error deleting category",
      error: error.message,
    });
  }
};

module.exports = {
  allCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
