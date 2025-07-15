const { default: mongoose } = require("mongoose");

const emailVerifyTokenSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: Number,
  expiresAt: {
    type: Date,
    default: Date.now,
    expires: 60, // 1 minute (in seconds)
  },
});

module.exports = mongoose.model("EmailVerifyToken", emailVerifyTokenSchema);
