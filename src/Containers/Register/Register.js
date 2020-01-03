import React, { Component } from 'react'
import Terms from '../../Component/Terms/Terms'

export default class Register extends Component {
    render() {
        return (
            <div className="content">
                <div className="column clearfix">
                    <div className="login-section signup-form" id="signup-form">
                        <span className="hidden" id="login-section-heading-signup-form">Register</span>
                        <div className="zomato-form-error ui error message error-message-highlight-small mbot hidden"
                            id="sd-error"></div>
                        <form className="sd-form ui form" method="POST" id="sd-form-global"
                            data-store-cookie-session="&quot;false&quot;">
                            <div className="field">
                                <div className="fontsize4 ui header">Full Name</div>
                                <div className="ui icon fluid input">
                                    <input type="text" id="sd-fullname" name="fullname"
                                        className="zomato-form-input-plain" />
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <div className="fontsize4 ui header">Email Address</div>
                                <div className="ui icon fluid input">
                                    <input type="text" id="sd-email" name="email" className="zomato-form-input-plain" />
                                    <i className="mail icon"></i>
                                </div>
                            </div>

                            <div className="ui checkbox">
                                <input type="checkbox" style={{ marginRight: "5px" }} id="sd-newsletter" name="newsletter"
                                    value="1" />
                                <label htmlFor="sd-newsletter">
                                    I agree to Zomato's <a className="medium" href="https://www.zomato.com/conditions">Terms
                                    of Service</a>, <a className="medium" href="https://www.zomato.com/privacy">Privacy
                                    Policy</a> and <a className="medium" href="https://www.zomato.com/policies">Content
                                    Policies</a>
                                </label>
                            </div>
                            <div className="clear mbot"></div>

                            <input type="submit" id="sd-submit" className="ui button red fluid" value="Register" />
                            <div className="clear"></div>
                            <Terms />
                        </form>
                        <div className="clear"></div>
                        <div className="signup-form-loader hidden"
                            style={{ position: "absolute", top: "60px", left: "0", right: "0", bottom: "0", backgroundColor: "#fff" }}>
                            <div className="ui loader"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
