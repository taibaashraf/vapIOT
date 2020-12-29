import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


import Spacer from 'react-add-space';
import { Link } from "react-router-dom";



import './loginPage.css';

import './responsiveLogin.css';


import BImage from '../Images/BackgroundImage.png';
import { Form } from 'react-bootstrap';

<meta name="viewport" content="width=device-width" />

class LoginPage extends Component {
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
                            <br/>
                            <i> <p className="p1login" style={{ backgroundColor: 'white' }} >Login here and <b><i>experience</i></b> the <b><i>intengibility</i></b> of <b><i>IoT's</i></b> </p></i>
                            <br />
                            {/* <br />
                            <br /> */}
                            <form action="#" className="form1">
                                <div className="form-grouplogin" id="div1login" style={{  }}>
                                    <input type="email" className="form-controllogin" id="emaillogin" placeholder="Registeration#/Email" name="email"  style={{  }}/>
                                </div>
                                <br />
                                <div className="form-grouplogin" id="div2login" style={{  }}>
                                    <input type="password" className="form-controllogin" id="pwdlogin" placeholder="Password" name="pwd" style={{  }} />
                                    <ion-icon name="eye" id="eyePwdlogin"  style={{ }}></ion-icon>
                                </div>

                            </form>
                            <i> <p className="p2testlogin" style={{ backgroundColor: 'white' }}> <i className="fa fa-circle" style={{ color: ' #F89E12' }} /> Login with the credentials provided by the university </p></i>
                             <br /> {/*<br /> */}
                            <Form className="frm2login">
                            {/* <Link to="/Compiler">Login</Link> */}
                                    {/* <Button className="btn"><ion-icon id="rightArrow" name="arrow-forward"></ion-icon></Button> */}
                            </Form>
                            <Button className="btnlogin" style={{}}>Login<ion-icon id="rightArrowlogin" name="arrow-forward"></ion-icon></Button>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
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