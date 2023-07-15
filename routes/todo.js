const express=require('express');
const router=express.Router();


const todoController=require('../controllers/todo_controller');

router.get('/',todoController.todo);
router.post('/create-task',todoController.addTasks);

module.exports=router