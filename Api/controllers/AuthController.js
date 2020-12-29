const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const register = (req,res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
        .then(user => {
            res.json({
                message:'user added Successfully'
            })
        })
        .catch(error => {
            res.json({
                message:'An error occured'
            });
        })
    })
    
}
const login = (req,res,next)=>{
    console.log("login is called");
    var username  = req.body.username
    var password = req.body.password
console.log(username);
console.log(password);

    User.findOne({$or:[{email:username}, {phone:username}]}).then(user=> {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    console.log("error occured while finding user")
                //    res.json({
                //        error: err
                //    }) 
                   //res.statusCode = 400;

                   //res.end();
                   //next();

                }
                if(result){
                    try{
                    let token = jwt.sign({name : user.name}, 'verysensitiveValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successfully',
                        token
                    })
                    
                    res.statusCode = 200;
                    
                    res.end();
                    next();
                }
                catch(error){
                    console.log("an error occured while comparing password and error is", error);
                    // res.statusCode = 404;
                    // res.end();
                    // next();
                }
                }else{
                    res.json({
                        message:' password doesnt matched!'
                       
                    })
                   // res.sendFile('localhost:3000/compiler/src/login/loginpage.js');
                   // res.statusCode = 404;
                   // res.redirect('http://localhost:3000');
                   // res.end();
                    //next();
                }
            })
        }else{
            res.json({
                message:'No user found'
            })
            res.end();
            next();
        }
    })
}
const getlogin = (req,res,next)=>{
//    if(req.body.name) { 
       res.status(200).json({
        message:'I am called from getlogin'
    }
    );
    res.end();
    next();
    // return res.status(200).json({ message: "status 200 set" });
    
//}
// else{
//     res.status(400).send({message:"status is set to 400"});
//    // window.alert("i am called from getlogin");
//    next();
// }
}
module.exports = {
    register, login, getlogin
}