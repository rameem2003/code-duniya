const { getAllCourses, uploadCourse } = require("../services/courses.service");

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
 * Create Course Controller
 */
const createCourse = async (req, res) => {
  const { title, description, sellingPrice, discountedPrice, category } =
    req.body;

  const thumb = req.file
    ? req.file.filename
    : "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  try {
    let data = await uploadCourse({
      title,
      description,
      sellingPrice,
      discountedPrice,
      category,
      thumb,
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

module.exports = {
  allCourses,
  createCourse,
};
