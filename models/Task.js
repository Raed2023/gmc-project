const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Task schema
const taskSchema = new Schema({
  action: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
