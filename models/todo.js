const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const TodoLists=mongoose.model('todos',todoSchema);

module.exports=TodoLists