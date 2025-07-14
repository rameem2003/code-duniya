const { default: mongoose } = require("mongoose");

const successStorySchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
      default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SuccessStory", successStorySchema);
