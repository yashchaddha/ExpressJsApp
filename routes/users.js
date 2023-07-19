const express=require('express');
const router=express.Router();

const userController=require('../controllers/user_controller')

router.get('/profile',userController.profile);
router.get('/signup',userController.signup);
router.get('/login',userController.login)
router.post('/create-user',userController.createUser);
router.post('/create-session',userController.createSession);


module.exports=router