# Task-Manager-App

A simple API for managing tasks with in-memory storage using Node.js and Express.


### Initialize the Project:

- cd task-manager-app
- npm init -y

### Install dependencies:

- npm install express uuid

### Start the Server:

- node index.js

## Endpoints

- Open POSTMAN and  create a new request.
- Set the request method to following.

### Create a Task
- **URL:** `POST /tasks` http://localhost:3000/tasks
- **Body:**

  ```json
  {
    "title": "Task title",
    "description": "Task description"
  }

### Retrieve All Tasks 
- **URL:** `GET /tasks` http://localhost:3000/tasks

### Update a Specific Task 
- **URL:** `PUT /tasks/:id`  http://localhost:3000/tasks/unique-task-id-1

### Delete a Specific Task 
- **URL:** `DELETE /tasks/:id`  http://localhost:3000/tasks/unique-task-id-1

## Summary of API Endpoints in Postman
Method	Endpoint	  Purpose
POST	  /tasks	    Add a new task
GET	    /tasks	    Retrieve all tasks
PUT	    /tasks/:id	Update a specific task by ID
DELETE	/tasks/:id	Delete a specific task by ID