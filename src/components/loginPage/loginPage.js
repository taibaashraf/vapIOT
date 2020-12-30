import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import Spacer from 'react-add-space';
import { Link } from "react-router-dom";



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
            redirect: false
         }
        // this.login();
        // this.login = this.login.bind(this);
        // this.setState = this.setState.bind(this);
        
        // this.state(testing) ({
        //     value:testing
        // })
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
          return <Link to='/compiler'  />
          //history.push('/compiler.js');
        }
      }
      
    login = async () => {


    window.alert('login function is clicked');
    var email = await document.getElementById('emaillogin').value;
    var password = await document.getElementById('pwdlogin').value;
    window.alert(email);
    window.alert(password);
    var data = JSON.stringify({ "username": email, "password": password });


    window.alert(data);

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
        if(testing.includes('Login Successfully')){ 
        //this.setState({value:this.state.testing});
        this.setState();
       // window.alert("State changed");
        this.renderRedirect();
        //return <Link to='/compiler'  />
        }
        else{
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