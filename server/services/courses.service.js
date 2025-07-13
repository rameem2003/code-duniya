const categoryModel = require("../models/category.model");
const courseModel = require("../models/course.model");

const getAllCourses = async () => {
  try {
    let res = await courseModel.find();
    return res;
  } catch (error) {
    throw new Error("Error fetching courses: " + error.message);
  }
};

const uploadCourse = async ({
  title,
  description,
  sellingPrice,
  discountedPrice,
  category,
  thumb,
}) => {
  try {
    let thumbLink =
      process.env.SYSTEM_ENV == "development"
        ? `http://localhost:5000/${thumb}`
        : `https://code-duniya.onrender.com/uploads/${thumb}`;
    let data = {
      title,
      description,
      sellingPrice,
      discountedPrice,
      category,
      thumb:
        thumbLink || "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };
    let newCourse = new courseModel(data);

    await newCourse.save();

    // Update the category with the new course
    await categoryModel.findByIdAndUpdate(
      { _id: category },
      {
        $push: { courses: newCourse._id },
      },
      { new: true }
    );
    return newCourse;
  } catch (error) {
    throw new Error("Error uploading course: " + error.message);
  }
};

module.exports = {
  getAllCourses,
  uploadCourse,
};
