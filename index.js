const express = require('express')

const app = express()

const taskRoutes = require('./src/routes/task')

app.use(express.urlencoded({ extended: false }))
app.use('/tasks', taskRoutes)

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    now: new Date()
  })
})

app.listen(3000, () => {
  console.log('Task manager app is ready to use :)')
})
















/*
  # Task Manager App

  - Data
    1. Task
      - id (Number)
      - text (String)
      - completed (Boolean)
        - default: false

  - APIs
    1. GET /tasks - Returns list of all tasks 
    2. POST /tasks - Create a new task 
    3. PATCH /tasks/:id - Update existing task 
    4. DELETE /tasks/:id - Delete existing task 

*/