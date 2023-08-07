const mongoose = require('mongoose');
const Schema = mongoose.Schemach;

//creating schema
const TaskSchema = new Schema(
    {
    title:{
        type: String,
        require:true
    },
    description:{
        type:string,
        require:true
    }
},
{timestamps:true}
);


module.exports=mongoose.model("Task",TaskSchema);

