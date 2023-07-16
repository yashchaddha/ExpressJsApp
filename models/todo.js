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
        required:true,
        get: function (value) {
            return value.toISOString().split('T')[0];
        }
    }
});

const TodoLists=mongoose.model('todos',todoSchema);

module.exports=TodoLists