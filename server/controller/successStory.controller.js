const {
  uploadSuccessStory,
  storyDelete,
  findAllStories,
} = require("../services/successStory.service");

/**
 * Get All Success Story
 */
const allSuccessStories = async (req, res) => {
  let { limit } = req.query;
  try {
    let data = await findAllStories(parseInt(limit));
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
 * Create Success Story Controller
 */
const createSuccessStory = async (req, res) => {
  const { userID, course, video } = req.body;

  const thumb = req?.file?.filename;

  try {
    let data = await uploadSuccessStory({
      userID,
      course,
      videoLink: video,
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
 * Story Delete Controller
 */
const deleteStory = async (req, res) => {
  const { id } = req.params;

  try {
    let data = await storyDelete(id);
    res.status(200).send({
      success: true,
      msg: "Story deleted successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error deleting story",
      error: error.message,
    });
  }
};

module.exports = {
  allSuccessStories,
  createSuccessStory,
  deleteStory,
};
