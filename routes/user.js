const express = require('express');
const { register, login, auth } = require('../controllers/user.controller');
const { registerValidator } = require('../Middleware/validator');
const verifyAuth = require('../Middleware/verifyAuth');
const router = express.Router();

router.post('/register', registerValidator, register );
router.post('/login' , login)
router.get ('/auth',verifyAuth,auth)





module.exports = router;