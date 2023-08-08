const express = require('express')
const router = express.Router();
const {CreateTask,getTask,singleTask,updateTask,DeleteTask} = require('../controller/TaskController')


router.post('/',CreateTask); // when request hit the / url it send to createTask
router.get('/',getTask); //to get all details from mongodb
router.get('/:id',singleTask ) //to update single task
router.patch('/:id',updateTask) //findbyid and update
router.delete('/:id',DeleteTask)


module.exports= router;
