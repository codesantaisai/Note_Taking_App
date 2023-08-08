const mongoose = require('mongoose');
const TaskModel = require('../models/TaskModel')


//create task on mongoDB
 
const  CreateTask = async (req,res)=>{
    const {title,description} = req.body;

    try{
        const Task = await TaskModel.create({title,description});
        res.status(200).json(Task)
    }catch(e){
        res.status(400).json({Error:e.message})
    }
}

//to get all tasks

const getTask = async (req,res)=>{
    try{
        const task = await TaskModel.find({})
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({Error:e.message})
    }
}

//to get single task 

const singleTask = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"id not valid"})

    }

    try{
        const Task = await TaskModel.findById(id)
        res.status(200).json(Task)
    }catch(e){
        res.status(400).json({Error:e.message})
    }
}

//to update tasks

const updateTask = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({Error:"Id not valid to update"})
    }
   try{
    const Task = await TaskModel.findByIdAndUpdate(
        {
            _id:id
        },
        {
            ...req.body
        })
        res.status(200).json(Task)
   }catch(e){
    res.status(400).json({Error:e.message})
   }


}

module.exports = {CreateTask,getTask,singleTask,updateTask};