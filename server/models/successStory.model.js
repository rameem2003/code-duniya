const { default: mongoose } = require("mongoose");

const successStorySchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SuccessStory", successStorySchema);
