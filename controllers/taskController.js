// Import necessary dependencies
const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while retrieving tasks.' });
  }
};


// Create a new task
exports.createTask = async(req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.send(newTask)
    
  } catch (error) {
    console.log(error.message)
    res.send(error.message)
  }
  // await newTask.save((err, task) => {
  //   if (err) {
  //     res.status(500).json({ error: 'An error occurred while creating the task.' });
  //   } else {
  //     res.status(201).json(task);
  //   }
  // });
};

// Update a task
exports.updateTask =  async(req,res)=>{
  try{
      const taskId = await task.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
      res.send(taskId);

  } catch (error) {
      res.send(error.message);
  }}


// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const taskId = await task.findByIdAndDelete(req.params.id);
    res.send(taskId);
  } catch (error) {
      res.send(error.message);

  }}