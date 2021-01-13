import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import Spacer from 'react-add-space';
import { Link } from "react-router-dom";
import firebase from 'firebase';
import  'firebase/database';


import './loginPage.css';

import './responsiveLogin.css';


import BImage from '../Images/BackgroundImage.png';
import { Form } from 'react-bootstrap';

<meta name="viewport" content="width=device-width" />

// const response = axios({
//     url: 'http://localhost:5000/api/login',
//     data: {"email": "mjawad.nust@gmail.com", "password":"1243"},    
//     method: 'POST'
//   }).then(response => {
// var testing = JSON.stringify(response);
//   window.alert(testing);
//   console.log(testing);
//   }).catch(error => {
//     window.alert(error);
//   });
var testing = "";
class LoginPage extends Component {

    constructor(props) {
        super(props)
        //this.getCourses();
        //this.test();
        // this.State={apiResponse:""};
        this.state = {
            redirect: false,
            email: '',
            firebase_data: ''
        }
        // this.login();
        // this.login = this.login.bind(this);
        // this.setState = this.setState.bind(this);
       // this.firebasesetup = this.firebasesetup.bind(this);
        // this.state(testing) ({
        //     value:testing
        // })
    }
    setsession() {
        let email = document.getElementById("emaillogin");
        localStorage.setItem('email', JSON.stringify(email));
        sessionStorage.setItem("email", JSON.stringify(email));
        this.firebasesetup();
        var database = firebase.database();
        try{
        database.ref().on("value", function (snap) {
            var name = JSON.stringify(snap.val().tmep);
            window.alert(name);
            console.log(name);
        });
    }catch(e){
        window.alert("this is firebase error", e);
        console.log("this is firebase error", e);
    }
    }
    firebasesetup() {
       
    }
    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyD_yBImzc5tWwfWfiCR0WWP3Bk0dQpUd2s",
            authDomain: "serial-data-node.firebaseapp.com",
            databaseURL: "https://serial-data-node-default-rtdb.firebaseio.com",
            projectId: "serial-data-node",
            storageBucket: "serial-data-node.appspot.com",
            messagingSenderId: "458814118167",
            appId: "1:458814118167:web:bc9b85b0fd230f83bd3f52",
            measurementId: "G-RNR5VJSD1S"
        };
        firebase.initializeApp(firebaseConfig);




        //      };
        //     //let email = '';



        // });
    }

    // setState = (testing) => {
    //     this.setState = {
    //         value: "testing matched" 
    //     }
    //     console.log(this.state.value);
    // }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Link to='/compiler' />
            //history.push('/compiler.js');
        }
    }

    login = async () => {


        //window.alert('login function is clicked');
        var email = await document.getElementById('emaillogin').value;
        var password = await document.getElementById('pwdlogin').value;
        //window.alert(email);
       // window.alert(password);
        var data = JSON.stringify({ "username": email, "password": password });


       // window.alert(data);

        axios({
            method: 'post',
            url: 'http://localhost:5000/api/login',
            data: data,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => {
            var testing = JSON.stringify(response);
            window.alert(testing);
            if (testing.includes('Login Successfully')) {
                //this.setState({value:this.state.testing});
                this.setState();
                this.setsession();
                // window.alert("State changed");
                this.renderRedirect();
                //return <Link to='/compiler'  />
            }
            else {
                window.alert("State Not changed");
            }

            //window.alert(testing);
        }).catch(error => {
            window.alert(error);
        });
        // axios(config)
        //     .then(function (response) {
        //         window.alert("axios then called");
        //        let value = JSON.stringify(response.data);
        //        console.log('Axios:',response);
        //         console.log('Axios data:',response.data);
        //     //    window.alert(value);
        //         //this.setState(value)
        //       }).catch(function (error) {
        //         window.alert(error);
        //     }); 

        // var config = {
        //     method: 'POST',
        //     url: 'http://localhost:5000/api/login',
        //     headers: {
        //         'Content-Type': 'application/json ; charset=UTF-8; application/x-www-form-urlencoded',
        //         "Access-Control-Allow-Origin": "*"
        //     }
        //     ,
        //  data: {"email": "mjawad.nust@gmail.com", "password":"1243"},    

        // };

    }
    render() {
        return (
            <div>
                <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
                <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
                <div>
                    <img className="img-responsive" src={BImage} id="vapBglogin" style={{}} />
                    {/* <br />
                    <br /> */}
                    <div className="top-leftlogin"><i className="fa fa-signal" style={{ color: ' #F89E12' }} />VAP IoT lab</div>

                    <div id="containerlogin" style={{ backgroundColor: 'white' }}>
                        <div id="examplelogin">
                            <div><a href="#"><i className="fa fa-times-circle-o" id="closeIconlogin" /></a></div>
                            <div className="top-centerlogin"><i className="fa fa-signal" style={{ color: ' #F89E12' }} />VAP IoT lab</div>
                            {/* <br /> */}
                            {/*
                            <br/>
                            <br/> */}
                            <h1 className="wlcomelogin" >Welcome</h1>
                            <br />
                            <i> <p className="p1login" style={{ backgroundColor: 'white' }} >Login here and <b><i>experience</i></b> the <b><i>intengibility</i></b> of <b><i>IoT's</i></b> </p></i>
                            <br />
                            {/* <br />
                            <br /> */}
                            <form action="#" className="form1">
                                <div className="form-grouplogin" id="div1login" style={{}}>
                                    <input type="email" className="form-controllogin" id="emaillogin" placeholder="Registeration#/Email" name="email" style={{}} />
                                </div>
                                <br />
                                <div className="form-grouplogin" id="div2login" style={{}}>
                                    <input type="password" className="form-controllogin" id="pwdlogin" placeholder="Password" name="pwd" style={{}} />
                                    <ion-icon name="eye" id="eyePwdlogin" style={{}}></ion-icon>
                                </div>

                            </form>
                            <i> <p className="p2testlogin" style={{ backgroundColor: 'white' }}> <i className="fa fa-circle" style={{ color: ' #F89E12' }} /> Login with the credentials provided by the university </p></i>
                            <br /> {/*<br /> */}
                            <Form className="frm2login">
                                {/* <Link to="/Compiler">Login</Link> */}
                                {/* <Button className="btn"><ion-icon id="rightArrow" name="arrow-forward"></ion-icon></Button> */}
                            </Form>

                            <Button onClick={this.login} className="btnlogin" style={{}}>Login<ion-icon id="rightArrowlogin" name="arrow-forward"></ion-icon></Button>
                            <br />


                            {/* <br />
                            <br />
                            <br />
                            <br /> */}
                            <p className="p3login" style={{ backgroundColor: 'white' }}>New Memeber? Sign up</p >
                        </div>


                    </div>
                    <div className="vaplogin">2019 VAP IoT Lab, All Rights Reserved</div>

                </div>
            </div>



        );
    }
}
export default LoginPage;