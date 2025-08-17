const { default: mongoose } = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  expiry: {
    type: Date,
    default: Date.now,
    expires: 24 * 3600, // 1 day (in seconds)
  },
  isUsed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Coupon", couponSchema);
