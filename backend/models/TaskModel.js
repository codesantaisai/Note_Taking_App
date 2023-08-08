const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema
const TaskSchema = new Schema(
    {
    title:{
        type: "string",
        require:true
    },
    description:{
        type:"string",
        require:true
    }
},
{timestamps:true}
);


module.exports=mongoose.model("Task",TaskSchema);

