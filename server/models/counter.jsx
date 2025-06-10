const mongoose = require('mongoose')

const idCounterSchema = new mongoose.Schema({
    leaveId: {type: String, required: true, unique: true},
    seq:{type: number, default: 0}
})