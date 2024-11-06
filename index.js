const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

// GET /tasks: Retrieve all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks: Add a new task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }
  const newTask = { id: uuidv4(), title, description, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id: Update a specific task by ID
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const task = tasks.find(task => task.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// DELETE /tasks/:id: Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Task management API running at http://localhost:${port}`);
});
