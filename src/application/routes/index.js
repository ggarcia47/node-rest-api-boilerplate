const express = require('express');
const router = new express.Router();

//const HelloWorldCtrl = new (require('../controllers/helloWorld.controller'))();

//router
//	.route('/hello-world')
//	.get(HelloWorldCtrl.sayHi);

router.use('/api', require('./userRoute'));

module.exports = router;
