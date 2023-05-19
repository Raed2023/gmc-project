const express = require('express');
const { createTask,getAllTasks,updateTask,deleteTask } = require('../controllers/taskController');


// Create the router
const router = express.Router();

// Define the task routes
router.get('/get', getAllTasks);
router.post('/Add',createTask);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;
