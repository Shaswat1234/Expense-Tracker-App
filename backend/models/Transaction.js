const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  amount: Number,
  category: String,
  date: Date,
  type: { type: String, enum: ['Income', 'Expense'] }
});

module.exports = mongoose.model('Transaction', transactionSchema);
