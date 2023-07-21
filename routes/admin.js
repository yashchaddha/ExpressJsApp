const express=require('express');
const router= express.Router();
const passport=require('passport');

const adminController=require('../controllers/admin_controller')


router.get('/',adminController.admin);
router.get('/signup',adminController.signup);
router.get('/login',adminController.login);
router.post('/create-admin',adminController.createAdmin);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/admin/signup',failureFlash:true},
),adminController.createSession);

module.exports=router