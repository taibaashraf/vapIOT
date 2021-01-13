const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
const fs = require('fs');
var socket = require('socket.io');
const bodyParser = require('body-parser');

var firebase = require('firebase');
var database = require('firebase/database');
const { parse } = require('@fortawesome/fontawesome-svg-core');
const { stderr, stdout } = require('process');
require('firebase/auth');

function firebaseConnection(){
    const firebaseConfig = {
        apiKey: "AIzaSyD_yBImzc5tWwfWfiCR0WWP3Bk0dQpUd2s",
        authDomain: "serial-data-node.firebaseapp.com",
        databaseURL: "https://serial-data-node-default-rtdb.firebaseio.com",
        projectId: "serial-data-node",
        storageBucket: "serial-data-node.appspot.com",
        messagingSenderId: "458814118167",
        appId: "1:458814118167:web:bc9b85b0fd230f83bd3f52",
        measurementId: "G-RNR5VJSD1S"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else{
        firebase.app(); 
    }
    // firebase.initializeApp(firebaseConfig);
  //  return console.log("firebase connection successfull");
};

// Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");


const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        firebaseConnection();
        firebase.database().ref('yain/').set({"temp" : "chal chor day"});

        user.save()
            .then(user => {
                res.json({
                    message: 'user added Successfully'
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error occured'
                });
            })
    })

}
const login = (req, res, next) => {
    console.log("login is called");
    var username = req.body.username
    var password = req.body.password
    console.log(username);
    console.log(password);

    User.findOne({ $or: [{ email: username }, { phone: username }] }).then(user => {
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    console.log("error occured while finding user")
                    //    res.json({
                    //        error: err
                    //    }) 
                    //res.statusCode = 400;

                    //res.end();
                    //next();

                }
                if (result) {
                    try {
                        let token = jwt.sign({ name: user.name }, 'verysensitiveValue', { expiresIn: '1h' })
                        res.json({
                            message: 'Login Successfully',
                            token
                        })

                        res.statusCode = 200;

                        res.end();
                        next();
                    }
                    catch (error) {
                        console.log("an error occured while comparing password and error is", error);
                        // res.statusCode = 404;
                        // res.end();
                        // next();
                    }
                } else {
                    res.json({
                        message: ' password doesnt matched!'

                    })
                    // res.sendFile('localhost:3000/compiler/src/login/loginpage.js');
                    // res.statusCode = 404;
                    // res.redirect('http://localhost:3000');
                    // res.end();
                    //next();
                }
            })
        } else {
            res.json({
                message: 'No user found'
            })
            res.end();
            next();
        }
    })
}
const getlogin = (req, res, next) => {
    //    if(req.body.name) { 
    res.status(200).json({
        message: 'I am called from getlogin'
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
const exec_trainer1_iot1 = (req, res, next) => {
    try {
        child_process.exec('../trainer1_iot1.bat', function (error, stdout, stderr) {
            //console.log(stdout);
            res.send(stdout)

            // stream.on('data', (data)=>{
            //     stream.pipe(JSONStream.stringify()).pipe(process.stdout
            // }
            //  stream.on('end', done)
        });


        // const anyData = await pool.connect((err, client, done) => {
        //     if (err) throw err;
        //     const query = new QueryStream(`SELECT"_reference180"."_description" AS person FROM "_reference180"  `)
        //     const stream = client.query(query)
        //release the client when the stream is finished

        // i can see my data in console

        //})
        // res.send(anyData); // THIS DONT SEND MY DATA, sorry;)
    } catch (e) {
        console.error(e.message);
    }

}
const get_firebase_app = (req, res, next) => {
    console.log("firebase is called");

    const firebaseConfig = {
        apiKey: "AIzaSyD_yBImzc5tWwfWfiCR0WWP3Bk0dQpUd2s",
        authDomain: "serial-data-node.firebaseapp.com",
        databaseURL: "https://serial-data-node-default-rtdb.firebaseio.com",
        projectId: "serial-data-node",
        storageBucket: "serial-data-node.appspot.com",
        messagingSenderId: "458814118167",
        appId: "1:458814118167:web:bc9b85b0fd230f83bd3f52",
        measurementId: "G-RNR5VJSD1S"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().signInWithEmailAndPassword("mjawad.nust@gmail.com", "123456")
            .then((user) => {
                console.log(user);
                res.send(user);
            }
            ).catch((e) => {
                console.log(e);
                res.send(e);
            }
            )


    }
    else {
        firebase.app(); // if already initialized, use that one
        // firebase.initializeApp(firebaseConfig);
        firebase.auth().signInInWithEmailAndPassword("mjawad.nust@gmail.com", "123456")
            .then((user) => {
                console.log(user);
                res.send(user);
            }
            ).catch((e) => {
                console.log(e);
                res.send(e);
            }
            )

    }
    /* <--------------------- Real data retrival code --------------------->
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            var database = firebase.database();
            database.ref('/jawad').on("value", function (snap) {
                var temp_data = snap.val().temp;
                console.log(temp_data);
                res.send({"name":temp_data});
            });
    
        } else {
            firebase.app(); // if already initialized, use that one
            var database = firebase.database();
            database.ref('/jawad').on("value", function (snap) {
                var temp_data = snap.val().temp;
                console.log(temp_data);
               // temp_data= {"name":temp_data}
               // res.send({"name":temp_data});
            });
    
        }
        <--------------------- Real data retrival code ---------------------> */
    //res.end();
}
/* <--------------------------- Serial data Starts Here --------------------->>> */
const serialdata = (req, res, next) => {
    const port = req.body.port;
    const baudRate = req.body.baudrate;
    const loop = req.body.loop;
    console.log(port, baudRate);

    res.send({
        "port": port,
        "baudrate": baudRate
    })
    const SerialPort = require('serialport');
    const Readline = SerialPort.parsers.Readline;
    const usbport = new SerialPort("COM" + port, { baudRate: baudRate });
    const parser = usbport.pipe(new Readline());

    try {
        parser.on('data', function (data) {
            console.log(data);
            
        });
        parse.on("end", function () {
            console.log("Port closed");
        });
    }
    catch (e) {
        parser.on('error', function (error) {
            //         fs.writeFile('programming.txt', error, (err) => {
            //             if (err) {
            console.log("some erorr occured in parser");
            //             }
            //         });
            //     });

        });

    }
}

/* <--------------------------- Serial data ENds Here --------------------->>> */
/* <--------------------------- Compile Starts Here --------------------->>> */
const compile = (req, res, next) => {
       let filename = req.body.filename;
       console.log(filename);
    var ls = spawn('C:/Users/DELL/Downloads/reactproject/Api/'+filename);

    
  
   ls.stdout.on('data', function (data) {
        data = data.toString();
        console.log(data);
        //console.log('stdout: ' + data.toString());
       // console.log(JSON.stringify({"serial-data":data}));
        
        firebaseConnection();
       firebase.database().ref('yain/').update({data});
        
    })

    ls.stderr.on('error', function (data) {
        console.log('stderr: ' + error.toString());
       // res.write(error);
       // flush(stderr);
    });

    ls.on('exit', function (code) {
        console.log('code ' + code.toString());
       res.status(500);
        
    })
  res.end();
}

module.exports = {
    register, login, getlogin, exec_trainer1_iot1, get_firebase_app, serialdata, compile
}