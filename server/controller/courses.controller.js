const { findUserById } = require("../services/auth.service");
const { findCartByUserId } = require("../services/cart.service");
const {
  getAllCourses,
  uploadCourse,
  courseDelete,
  courseUpdate,
  findCourseById,
  coursePurchase,
} = require("../services/courses.service");

/**
 * Get All Courses Controller
 */
const allCourses = async (req, res) => {
  try {
    let data = await getAllCourses();
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error fetching courses",
      error: error.message,
    });
  }
};

/**
 * Get single course controller
 */
const getSingleCourse = async (req, res) => {
  const { id } = req.params;

  try {
    let data = await findCourseById(id);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error fetching course",
      error: error.message,
    });
  }
};

/**
 * Create Course Controller
 */
const createCourse = async (req, res) => {
  const { title, description, sellingPrice, discountedPrice, category } =
    req.body;

  const thumb = req?.file?.filename;

  try {
    let data = await uploadCourse({
      title,
      description,
      sellingPrice,
      discountedPrice,
      category,
      thumbLink: thumb,
    });
    res.status(200).send({
      success: true,
      msg: "Course created successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error creating course",
      error: error.message,
    });
  }
};

/**
 * Course Update Controller
 */
const updateCourse = async (req, res) => {
  const { id } = req.params;
  const updateFields = {};

  //  available fields to update
  const fields = ["name", "description", "sellingPrice", "discountedPrice"];

  // fill up updateFields with the fields that are present in the request body
  fields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updateFields[field] = req.body[field];
    }
  });

  try {
    await courseUpdate(id, updateFields, req?.file?.filename);
    res.status(200).send({
      success: true,
      msg: "Course updated successfully",
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
 * Course Delete Controller
 */
const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    let data = await courseDelete(id);
    res.status(200).send({
      success: true,
      msg: "Course deleted successfully",
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

/**
 * Course purchase controller
 */
const purchaseCourse = async (req, res) => {
  const { courseId } = req.body;
  if (!req.user) {
    return res.status(401).send({
      success: false,
      msg: "Unauthorized access",
    });
  }

  let user = await findUserById(req.user.id);

  if (!user) {
    return res.status(404).send({
      success: false,
      msg: "User not found",
    });
  }

  let cartData = await findCartByUserId(user._id);
  cartData.map(async (item) => {
    let courseExists = await findCourseById(item.course._id);
    if (!courseExists) {
      console.log("Course not found in cart:", item.course._id);
      return res.status(404).send({
        success: false,
        msg: "Course not found",
      });
    }
  });

  let grandTotal = cartData.reduce((total, item) => {
    return total + item.course.sellingPrice;
  }, 0);

  console.log("Grand Total:", grandTotal);

  try {
    let url = await coursePurchase(user, cartData, grandTotal);
    res.status(201).send({
      success: true,
      msg: "Course purchased successfully",
      url,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      msg: "Error processing purchase",
      error: error.message,
    });
  }
};

module.exports = {
  allCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  purchaseCourse,
};
