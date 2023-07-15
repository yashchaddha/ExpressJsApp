const express=require('express');
const router=express.Router();



const todoController=require('../controllers/todo_controller');
const addtodotasks=require('../controllers/add_todo');

router.get('/',todoController.todo);
router.post('/create-task',addtodotasks.addTodo);

module.exports=router