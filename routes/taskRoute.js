

const express = require('express')
const taskController = require('../controllers/taskController');
const router = express.Router()


router.route('/')
      .get(taskController.getAllTask)
      .post(taskController.createTask)


router.route('/:id')
     .get(taskController.getTask)

  
module.exports = router;   

