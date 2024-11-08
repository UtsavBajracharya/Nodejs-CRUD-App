# Task-Manager-App

CRUD operation using node js and express. A simple API for managing tasks with in-memory storage using Node.js and Express.

## Endpoints

### Create a Task
- **URL:** `POST /tasks`
- **Body:**
  ```json
  {
    "title": "Task title",
    "description": "Task description"
  }