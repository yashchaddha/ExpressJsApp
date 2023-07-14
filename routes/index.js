const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller')
const userRoute= require('../routes/users')
const adminRoute=require('../routes/admin');
const todoRoute=require('../routes/todo');

router.get('/',homeController.home);
router.use('/users',userRoute);
router.use('/admin',adminRoute);
router.use('/todolist',todoRoute);

module.exports=router