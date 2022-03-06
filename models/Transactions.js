const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    recieverId: {type: String, required: true},
    amount: { type: Number, default: 1},
    date: { type: Date, default: Date.now }
  }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
