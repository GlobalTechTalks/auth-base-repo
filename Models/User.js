const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resettoken: String,
  expire: Date,
  isVerified: { type: Boolean, default: false },
});

mongoose.model("User", userSchema);
