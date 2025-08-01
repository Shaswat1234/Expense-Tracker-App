const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/create-child', auth, role('Parent'), async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const child = await User.create({ name, email, password: hashed, role: 'Child' });
  req.user.children.push(child._id);
  await req.user.save();
  res.json(child);
});

router.get('/children', auth, role('Parent'), async (req, res) => {
  const children = await User.find({ _id: { $in: req.user.children } });
  res.json(children);
});

module.exports = router;
