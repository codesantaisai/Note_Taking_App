const TaskModel = require('../models/TaskModel')



const CreatTask = async (req,res)=>{
    const {title,description} = req.body; // catch the title and description from req.body

    try{
        const task = await TaskModel.create({title,description}); //hit the input to save in mongodb
        res.status(200).json(task)

    }catch(e){
        res.status(400).json({error:e.message})
    }
};

module.exports ={CreatTask};
