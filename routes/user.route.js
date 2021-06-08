
var express = require('express')
var router = express.Router()
var userController = require('../controller/user.controller')
var validate = require('../validate/user.validate')

router.get('/', userController.index)
 
router.get('/create', userController.create);
 
router.get('/search', userController.search)

router.get('/login', userController.login)

router.get('/:id', userController.getInfo)

router.post('/create', validate.postCreate, userController.postCreate)


module.exports = router