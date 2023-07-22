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
    {failureRedirect:'/admin/login'},
),adminController.createSession);
router.get('/profile',passport.checkAuth,adminController.profile);

module.exports=router