const express = require('express');
const Budget = require('../models/Budget');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', auth, role('Parent'), async (req, res) => {
  const budget = await Budget.create({ ...req.body, parent: req.user._id });
  res.json(budget);
});

router.get('/:childId', auth, async (req, res) => {
  const budgets = await Budget.find({ child: req.params.childId });
  res.json(budgets);
});

module.exports = router;
