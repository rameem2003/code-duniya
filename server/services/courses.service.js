const deleteFile = require("../lib/deleteFile");
const categoryModel = require("../models/category.model");
const courseModel = require("../models/course.model");
const { thumbImageGenerator } = require("./common.service");

const findCourseById = async (id) => {
  try {
    let res = await courseModel
      .findById(id)
      .populate("category")
      .populate("successStories");
    return res;
  } catch (error) {
    throw new Error("Error finding category: " + error.message);
  }
};

const getAllCourses = async () => {
  try {
    let res = await courseModel
      .find()
      .populate("category")
      .populate("successStories");
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
  thumbLink,
}) => {
  try {
    let data = {
      title,
      description,
      sellingPrice,
      discountedPrice,
      category,
      thumb: thumbImageGenerator(thumbLink),
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

const courseUpdate = async (id, updateFields, file) => {
  try {
    let targetCourse = await findCourseById(id);

    await courseModel.findOneAndUpdate(
      { _id: targetCourse._id },
      { $set: { ...updateFields, thumb: thumbImageGenerator(file) } }
    );

    if (file && !targetCourse.thumb.includes("flaticon")) {
      let thumb = targetCourse.thumb.split("/");
      let fileName = thumb[thumb.length - 1];

      await deleteFile(fileName);
    }
  } catch (error) {
    throw new Error("Error updating course: " + error.message);
  }
};

const courseDelete = async (id) => {
  try {
    let targetCourse = await findCourseById(id);
    if (!targetCourse.thumb.includes("flaticon")) {
      let thumb = targetCourse.thumb.split("/");
      let file = thumb[thumb.length - 1];

      await deleteFile(file);
    }
    let res = await courseModel.findByIdAndDelete(id);

    // Remove the course from the category
    await categoryModel.findOneAndUpdate(
      { _id: targetCourse.category },
      {
        $pull: { courses: targetCourse._id },
      },
      { new: true }
    );
    return res;
  } catch (error) {
    throw new Error("Error deleting course: " + error.message);
  }
};

module.exports = {
  findCourseById,
  getAllCourses,
  uploadCourse,
  courseUpdate,
  courseDelete,
};
