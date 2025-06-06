const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  leaveType: { type: String, required: true },
  leaveStartDate: { type: Date, required: true },
  leaveEndDate: { type: Date, required: true },
  comment: { type: String, required: true },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
}, { timestamps: true });

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);
