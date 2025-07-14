const deleteFile = require("../lib/deleteFile");
const courseModel = require("../models/course.model");
const successStoryModel = require("../models/successStory.model");
const { thumbImageGenerator } = require("./common.service");

const findAllStories = async () => {
  try {
    return await successStoryModel.find().sort({ createdAt: -1 });
  } catch (error) {
    throw new Error("Error getting all stories: " + error.message);
  }
};

const findStoriesById = async (id) => {
  try {
    return await successStoryModel.findOne({ _id: id });
  } catch (error) {
    throw new Error("Error getting stories: " + error.message);
  }
};
const findStoriesByUserId = async (userID) => {
  try {
    return await successStoryModel.findOne({ userID });
  } catch (error) {
    throw new Error("Error getting stories: " + error.message);
  }
};

const findStoriesByCourseId = async (course) => {
  try {
    return await successStoryModel.findOne({ course });
  } catch (error) {
    throw new Error("Error getting stories: " + error.message);
  }
};

const uploadSuccessStory = async ({ userID, course, videoLink, thumbLink }) => {
  try {
    let data = {
      userID,
      course,
      video: videoLink,
      thumb: thumbImageGenerator(thumbLink),
    };

    let newSuccessStory = new successStoryModel(data);

    await newSuccessStory.save();

    // Update the course with the new success story
    await courseModel.findByIdAndUpdate(
      { _id: course },
      {
        $push: { successStories: newSuccessStory._id },
      },
      { new: true }
    );

    return newSuccessStory;
  } catch (error) {
    throw new Error("Error uploading success story: " + error.message);
  }
};

const storyDelete = async (id) => {
  try {
    let targetStory = await findStoriesById(id);
    if (!targetStory.thumb.includes("flaticon")) {
      let thumb = targetStory.thumb.split("/");
      let file = thumb[thumb.length - 1];

      await deleteFile(file);
    }
    let res = await successStoryModel.findByIdAndDelete(id);

    // Remove the story from the course
    await courseModel.findOneAndUpdate(
      { _id: targetStory.course },
      {
        $pull: { successStories: targetStory._id },
      },
      { new: true }
    );
    return res;
  } catch (error) {
    throw new Error("Error deleting course: " + error.message);
  }
};

module.exports = {
  findAllStories,
  findStoriesByUserId,
  findStoriesByCourseId,
  uploadSuccessStory,
  storyDelete,
};
