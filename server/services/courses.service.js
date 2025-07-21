const deleteFile = require("../lib/deleteFile");
const sslcz = require("../lib/paymentGateway");
const categoryModel = require("../models/category.model");
const courseModel = require("../models/course.model");
const { thumbImageGenerator } = require("./common.service");
const { addToPurchase } = require("./purchase.service");

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

const coursePurchase = async (userData, courseData) => {
  try {
    const order = await addToPurchase(userData._id, courseData._id);
    const data = {
      total_amount: 20000,
      currency: "BDT",
      tran_id: "transactionID", // use unique tran_id for each api call
      success_url: `${process.env.HOST_URL}${process.env.PORT}${process.env.BASE_URL}/order/success/${order._id}`,
      fail_url: `${process.env.HOST_URL}${process.env.PORT}${process.env.BASE_URL}/order/fail/${order._id}`,
      cancel_url: `${process.env.HOST_URL}${process.env.PORT}${process.env.BASE_URL}/order/cancel/${order._id}`,
      ipn_url: "http://localhost:3030/ipn",
      shipping_method: "Courier",
      product_name: "Code Duniya Course.",
      product_category: "Professional Courses",
      product_profile: "general",
      cus_name: userData.name,
      cus_email: userData.email,
      cus_add1: userData.address,
      cus_add2: userData.address,
      cus_city: userData.city,
      cus_state: userData.city,
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: userData.phone,
      cus_fax: userData.phone,
      ship_name: userData.name,
      ship_add1: userData.address,
      ship_add2: userData.address,
      ship_city: userData.address,
      ship_state: userData.address,
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };

    const response = await sslcz.init(data);

    return response.GatewayPageURL;
  } catch (error) {
    throw new Error("Error processing course purchase: " + error.message);
  }
};

module.exports = {
  findCourseById,
  getAllCourses,
  uploadCourse,
  courseUpdate,
  courseDelete,
  coursePurchase,
};
