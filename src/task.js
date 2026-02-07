const express = require('express')
const router = express.Router()

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/task')
const validateTask = require('../middlewares/validateTask')

router.get('/', getTasks)
router.post('/', validateTask, createTask)
router.patch('/:id', validateTask, updateTask)
router.delete('/:id', deleteTask)

module.exports = router