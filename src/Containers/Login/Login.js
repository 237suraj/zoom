import React, { Component } from 'react'
import './Login.css'
import Terms from '../../Component/Terms/Terms'
import Register from '../Register/Register'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            isLoginButtonClicked: false,
            isSignUpButtonClicked: false
        }
    }
    handleClose = () => {
        this.props.close()
    }
    handleLogin = () => {
        this.setState({ isLoginButtonClicked: true })
    }
    handleSignup = () => {
        this.setState({ isSignUpButtonClicked: true })
    }
    handleGoogleLogin = () => {

    }
    render() {
        return (
            <div className="ui dimmer modals page transition active" style={{ display: "block !important" }}>
                <div id="modal-container" className="ui modal transition active scrolling"
                    style={{ marginLeft: "-225px", display: "block !important", height: "auto", width: "450px", top: "0px" }}>
                    <i className="close icon" onClick={this.handleClose}></i>
                    <div className="header" id="modal-header">
                        {
                            (!this.state.isLoginButtonClicked && !this.state.isSignUpButtonClicked && <div> Sign up or log in to Zomato </div>)
                            || (this.state.isSignUpButtonClicked && <div> Register </div>)
                            || <div> Log in to Zomato </div>
                        }
                    </div>
                    {
                        this.state.isLoginButtonClicked &&
                        <div className="content">
                            <div className="column clearfix">
                                <div className="login-section login-form-dialog" id="login-form-dialog">
                                    <span className="hidden" id="login-section-heading-login-form-dialog">Log in to Zomato</span>
                                    <div id="ld-message" className="ui error message error-message-highlight-small mbot hidden">
                                        &nbsp;</div>
                                    <form method="POST" className="ui form ld-form" id="ld-form-global"
                                        data-store-cookie-session="false">
                                        <div className="field">
                                            <div className="fontsize4 ui header">Email / Zomato Username</div>
                                            <div className="ui icon fluid input">
                                                <input type="text" id="ld-email" className="zomato-form-input-plain" />
                                                <i className="mail icon"></i>
                                            </div>
                                        </div>
                                        <div className="ptop">
                                            <input type="submit" id="ld-submit-global"
                                                className="zomato-form-button login-submit-btn ui red massive button fluid"
                                                value="Log in" />
                                            <img src="https://b.zmtcdn.com/images/floading.gif" className="login-submit-loading hidden"
                                                style={{ height: "14px", width: "33px", marginLeft: "188px" }} />
                                        </div>
                                        <div className="clear"></div>
                                        <Terms />
                                    </form>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        !this.state.isLoginButtonClicked && !this.state.isSignUpButtonClicked &&
                        <div className="content">
                            <div className="column clearfix">
                                <div id="login-home" className="login-section login-home">
                                    <span className="hidden" id="login-section-heading-login-home">Log in to Zomato</span>
                                    <div id="login-social" className="ta-center">
                                        <div className="twitter-dep-message hidden ui error message error-message-highlight-small mbot">
                                        </div>
                                        <div id="customBtn" title="Log in with Google">
                                            <button onClick={this.handleGoogleLogin}
                                                className="ui basic fluid massive button zs-google-connect-btn google-redirect-link pl20i">
                                                <img className="left" src="https://b.zmtcdn.com/images/new_google_icon.png" />
                                                <span className="fontsize3">Continue with Google</span>
                                            </button>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="ui horizontal divider"></div>
                                    <div id="login-nonsocial" className="ta-center">
                                        <div className="ui header fontsize2">Or use your email address</div>
                                        <div className="row">
                                            <div className="col-l-8">
                                                <button className="ui button red fluid massive login-icons ld-small" onClick={this.handleLogin} id="login-email">
                                                    <span className="fontsize3">Log in</span>
                                                </button>
                                            </div>
                                            <div className="col-l-8">
                                                <button className="ui button massive basic fluid login-icons ld-small" onClick={this.handleSignup}
                                                    id="signup-email">
                                                    <span className="fontsize3">Sign up</span>
                                                </button>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <Terms />
                                </div>
                            </div>
                        </div>
                    }
                    {
                        this.state.isSignUpButtonClicked &&
                        <Register />
                    }


                    <div className="content">
                        <div className="column clearfix">
                            <div className="hidden ta-center login-section" id="ld-login-otp-page">
                                <span className="hidden" id="login-section-heading-ld-login-otp-page">Email Verification</span>
                                <div className="ui error message otp-error error-message-highlight hidden" id="login-otp-error">
                                </div>
                                <div className="ptop0 clearfix enter-verification-code">
                                    <p id="enter-otp-text"></p>
                                    <p className="ptop0 clearfix">
                                    </p>
                                    <div className="ui icon fluid input">
                                        <input type="text" placeholder="Enter One Time Password" className="verification-code-value"
                                            style={{ height: "50px" }} />
                                    </div>
                                    <input type="hidden" value="" className="verif-loginid" />
                                    <input type="hidden" value="" className="verif-uid" />
                                    <a href="#" className="mtop ui button fluid massive red verif-code-submit"
                                        style={{ marginTop: "13px", lineHeight: "13px" }}>
                                        <span className="verif-code-submit-text fontsize3">Go</span>
                                        <img src="https://b.zmtcdn.com/images/floading.gif"
                                            className="verif-code-submit-loading hidden" />
                                    </a>
                                    <p></p>
                                </div><br />
                                <div id="before-resend-otp">
                                    <p id="resend-verification-email-msg">Didn't receive the email? Check your spam folder or<br />
                                        <a id="resend-verification-email" className="zred" style={{ cursor: "pointer" }}><u>Resend
                                    verification email</u></a>
                                    </p>
                                </div>
                                <div className="ui green basic disabled loading button resend-otp-sending-text"
                                    style={{ display: "none" }}>&nbsp;</div>
                            </div>

                            <div className="login-verif-success hidden login-section ta-center">
                                <h5 className="login-verif-container-head">Woot, woot!</h5>
                                <p>Logged in successfully</p>
                                <input type="submit" value="Proceed" className="ui button verif-success-proceed mtop" />
                            </div>

                            <div className="signup-verif-success hidden login-section ta-center">
                                <h5 className="signup-verif-container-head">Woot, woot!</h5>
                                <p>Thank you for confirming your email address.</p>
                                <input type="submit" value="Proceed" className="ui button verif-success-proceed mtop" />
                            </div>

                            <div className="ta-center signup-verif-container hidden login-section" id="signup-verif-container">
                                <span className="hidden" id="login-section-heading-signup-verif-container">Email Verification</span>

                                <div className="signup-verif-form">
                                    <div className="ui error message otp-error error-message-highlight hidden"
                                        id="signup-otp-error"></div>
                                    <h5 className="signup-verif-container-head" id="signup-verif-container-head">Thank you for
                            signing up!</h5>
                                    <p id="enter-verif-code-text"></p>
                                    <p className="ptop0 clearfix">
                                    </p>
                                    <div className="ui icon fluid input">
                                        <input type="text" placeholder="Enter Verification Code" id="verification-code-value"
                                            className="verification-code-value" style={{ height: "50px" }} />
                                    </div>
                                    <input type="hidden" value="" className="verif-loginid" />
                                    <input type="hidden" value="" className="verif-uid" />
                                    <a href="#" className="mtop ui button fluid massive red verif-code-submit"
                                        style={{ marginTop: "13px", lineHeight: "13px" }}>
                                        <span className="verif-code-submit-text fontsize3"> Go </span>
                                        <img src="https://b.zmtcdn.com/images/floading.gif"
                                            className="verif-code-submit-loading hidden" />
                                    </a>
                                    <p></p>
                                    <div className="signup-verif-bottom-container">
                                        <p className="grey-text small-text ptop">
                                            If you have not received the verification                                email,<br /> please check your spam folder.</p>
                                        <p className="grey-text small-text" id="signup-verif-resend-text">Still no luck? <a href="#"
                                            className="signup-verif-resend-code zred"
                                            style={{ textDecoration: "underline" }}>Resend verification email</a></p>
                                        <div className="ui green basic disabled loading button resend-otp-sending-text"
                                            style={{ display: "none" }}>&nbsp;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
