
const express = require('express');
const router = express.Router();
const LeaveRequest = require('../models/LeaveRequest');

// POST /api/leaves — add a leave
router.post('/', async (req, res) => {
  try {
    const leave = new LeaveRequest(req.body);
    await leave.save();
    res.status(201).json(leave);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create leave' });
  }
});

// GET /api/leaves — get all leaves
router.get('/', async (req, res) => {
  try {
    const leaves = await LeaveRequest.find().sort({ createdAt: -1 });
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaves' });
  }
});

module.exports = router;