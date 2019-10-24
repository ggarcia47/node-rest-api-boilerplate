const express = require ("express");
const router = express.Router(); 
const userService=require('../controllers/user.controller');

router.get('/user',userService.getUsers);


module.exports= router;