// models/Task.js
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  user: { // To link tasks to users
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Refers to the 'User' model
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Task', taskSchema);
