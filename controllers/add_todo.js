const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false })); // Middleware to parse request body
const todoTasks=require('./todo_controller')

module.exports.addTodo=function(req,res){
    // taskse.push({
    //     description:"Fuck Some Girls",
    //     date:new Date().toISOString().split('T')[0],
    //     priority:"High"
    // })
    todoTasks.todo({
        description:"Fuck Some Girls",
        date:new Date().toISOString().split('T')[0],
        priority:"High"
    })
    res.redirect('back');
}