const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller')
const userRoute= require('../routes/users')
const adminRoute=require('../routes/admin');

router.get('/home',homeController.home);
router.use('/users',userRoute);
router.use('/admin',adminRoute);

module.exports=router