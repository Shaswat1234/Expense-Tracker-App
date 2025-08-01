const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  child: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: String,
  limit: Number
});

module.exports = mongoose.model('Budget', budgetSchema);
