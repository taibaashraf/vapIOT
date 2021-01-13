// const mongoose = require('mongoose');
// const Schema = mongoose.SchemaType

// const userScheme = new userSchema({
//     name: {
//         type: String
//     },
//     email:{
//         type: String
//     },
//     phone: {
//         type: String
//     },
//     password:{
//         type: String
//     }

// }, {timeStamps: true})

// const User = mongoose.model('user', userScheme)
// module.exports = User
var cors = require('cors')
const AuthController = require('../controllers/AuthController')
const express = require('express')
const router = express.Router()


var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

router.post('/register',cors(corsOptions), AuthController.register)
router.post('/login',cors(corsOptions), AuthController.login)
router.get('/',cors(corsOptions), AuthController.getlogin)
router.get('/compiler/exec_trainer1/iot1',cors(corsOptions), AuthController.exec_trainer1_iot1)
router.get('/get_firebase_app',cors(corsOptions), AuthController.get_firebase_app)
router.post('/serialdata',cors(corsOptions), AuthController.serialdata)
router.post('/compile',cors(corsOptions), AuthController.compile)

module.exports = router
