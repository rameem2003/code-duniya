const sendEmail = require("../lib/sendEmail");
const { findUserById } = require("../services/auth.service");
const {
  findCartByUserId,
  removeUserCart,
} = require("../services/cart.service");
const {
  getAllCourses,
  uploadCourse,
  courseDelete,
  courseUpdate,
  findCourseById,
  coursePurchase,
  pushNewPurchaseCourse,
} = require("../services/courses.service");
const {
  updatePurchase,
  deletePurchase,
  findPurchaseById,
} = require("../services/purchase.service");

/**
 * Get All Courses Controller
 */
const allCourses = async (req, res) => {
  const { limit } = req.query;
  try {
    let data = await getAllCourses(parseInt(limit));
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

  if (!cartData) {
    return res.status(404).send({
      success: false,
      msg: "Cart not found",
    });
  }

  let finalCoursePrice = cartData.coupon
    ? cartData.finalPrice
    : cartData.course.sellingPrice
    ? cartData.course.sellingPrice
    : cartData.course.discountedPrice;

  try {
    let url = await coursePurchase(user, cartData, finalCoursePrice);

    await removeUserCart(req.user.id);
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

const successPurchase = async (req, res) => {
  const { id } = req.params;

  try {
    await updatePurchase(id);
    let data = await findPurchaseById(id);
    console.log(data);
    await pushNewPurchaseCourse(data.userId._id, data.course._id);

    // send confirmation email
    let html = `
  <p>Hi ${data.userId.name},</p>
  <h1>Course purchased successfully 🎉</h1>
  <p><strong>Course:</strong> ${data.course.title}</p>

  <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 500px;">
    <tr>
      <th align="left">Item</th>
      <th align="left">Details</th>
    </tr>
    <tr>
      <td>Price</td>
      <td>BDT ${
        data.course.sellingPrice
          ? data.course.sellingPrice
          : data.course.discountedPrice
      }</td>
    </tr>
    <tr>
      <td>Discount</td>
      <td>BDT (-) ${data.discount}</td>
    </tr>
    <tr>
      <td>Coupon Code</td>
      <td>${data.coupon ? data.coupon : "N/A"}</td>
    </tr>
    <tr>
      <td><strong>Grand Total</strong></td>
      <td><strong>BDT ${data.finalPrice}</strong></td>
    </tr>
  </table>

  <br/>
  <p>Thank you for your purchase! 🚀</p>
`;

    await sendEmail(data.userId.email, "Course purchased successfully", html);
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error processing purchase",
      error: error.message,
    });
  }

  if (process.env.SYSTEM_ENV === "production") {
    return res.redirect(`${process.env.REMOTE_HOST_URL}/payment/success/${id}`);
  } else {
    return res.redirect(`http://localhost:3000/payment/success/${id}`);
  }
};

const failPurchase = async (req, res) => {
  const { id } = req.params;

  try {
    await deletePurchase(id);
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error processing purchase",
      error: error.message,
    });
  }

  if (process.env.SYSTEM_ENV === "production") {
    return res.redirect(`${process.env.REMOTE_HOST_URL}/payment/failed/${id}`);
  } else {
    return res.redirect(`http://localhost:3000/payment/failed/${id}`);
  }
};

const cancelPurchase = async (req, res) => {
  const { id } = req.params;

  try {
    await deletePurchase(id);
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error processing purchase",
      error: error.message,
    });
  }

  if (process.env.SYSTEM_ENV === "production") {
    return res.redirect(`${process.env.REMOTE_HOST_URL}/payment/cancel/${id}`);
  } else {
    return res.redirect(`http://localhost:3000/payment/cancel/${id}`);
  }
};

module.exports = {
  allCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  purchaseCourse,
  successPurchase,
  failPurchase,
  cancelPurchase,
};
