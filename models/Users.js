const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    balance: { type: Number, default: 500 }
  }
);

module.exports = mongoose.model("User", UserSchema);