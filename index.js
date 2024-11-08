const express = require('express');
const { v4: uuidv4 } = require('uuid'); // to generate unique id an incremental number for each task

const app = express();
const port = 3000; // Express server port number

// Middleware to parse JSON body
app.use(express.json());

// Array to store task data
let tasks = [];


// POST /tasks: Add a new task(Create)
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  // Condition to display message if title or description is missing
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }
  const newTask = { id: uuidv4(), title, description, completed: false };

  tasks.push(newTask); //Add the new task to the tasks array

  res.status(201).json(newTask);
});


// GET /tasks: Retrieve all tasks(Read)
app.get('/tasks', (req, res) => {
  res.json(tasks);
});


// PUT /tasks/:id: Update a specific task by ID(Update)
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const task = tasks.find(task => task.id === id);

  // Condition to display if the task id is not found
  if (!task) {
    return res.status(404).json({ error: `Task with the ${id} is not found.` });
  }

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// DELETE /tasks/:id: Delete a task by ID(Delete)
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex(task => task.id === id);

  // Condition to display if the task id is not found
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  tasks.splice(taskIndex, 1);

  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Task manager app API is running at http://localhost:${port}`);
});
