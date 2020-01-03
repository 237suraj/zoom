import React, { Component } from 'react'
import './ZomatoApp.css'
export default class ZomatoApp extends Component {
    handleOnChange = () => {
        
    }
    render() {
        return (
            <div className="ptop">
                <div className="wrapper mbot mtop">
                    <div className="row ui segment">
                        <div className="mtop mbot clearfix">
                            <div className="col-l-1"></div>
                            <div className="col-l-6">
                                <img src="./img/zomato-app.png" alt="app" style={{height: "330px", display: "block" }}/>
                                {/* <div className="" data-original="https://b.zmtcdn.com/web_assets/3ec0071f7aaa2e580d50adc1a4b803431567149562.png?output-format=webp" style={{height: "330px" , backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center center", display: "block", backgroundImage: "url(&quot;https://b.zmtcdn.com/web_assets/3ec0071f7aaa2e580d50adc1a4b803431567149562.png?output-format=webp&quot;)" }}></div> */}
                            </div>
                            <div className="col-l-9">
                                <div className="grid_8 column">
                                    <div className="row">
                                        <div className="col-l-15">
                                            <h2>Get the Zomato App</h2>
                                            <div className="grey-text fontsize3">See menus and photos for nearby restaurants and bookmark your favorite places on the go</div>
                                            <div className="mt5 mtop">We'll send you a link, open it on your phone to download the app</div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="send-app-link mtop0 ptop0 clearfix">
                                        <div className="col-l-2">
                                            <div className="row">
                                                <div className="ui fluid action input">
                                                    <input size="3" id="country-code" value="" type="text" onChange={this.handleOnChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-l-12">
                                            <div className="row">
                                                <div className="ui fluid action input">
                                                    <input id="phone-no" size="25" className="br0" placeholder="Enter phone number" type="tel" />
                                                    <div id="app-download-sms" className="ui button green">
                                                        <span className="ls1">&nbsp;Text App Link&nbsp;</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                        <div className="col-l-14 hidden" id="send-sms-error-message">
                                            <div className="row mtop0">
                                                <div className="ui red message error-message">
                                                    Your message is not sent because the SMS limit is reached. Please try again later.                  </div>
                                            </div>
                                        </div>
                                        <div className="col-l-14 hidden" id="rest-sms-success-message">
                                            <div className="row mtop0">
                                                <div className="ui green message">
                                                    Message sent. Check your phone to find a link to download the app. Happy eating!                  </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-l-14 mt5 mb5">
                                        <div className="row">
                                            <div className="ui horizontal divider">OR</div>
                                        </div>
                                    </div>
                                    <div className="col-l-14 send-app-link-by-email mbot">
                                        <div className="row">
                                            <div className="ui fluid action input">
                                                <input id="email-id" placeholder="Enter your email id" type="tel" />
                                                <div id="send-email" className="ui button green">
                                                    <span className="ls1">Email App Link</span>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                            <div id="email-error-message" className="mtop0 hidden">
                                                <div className="ui red message error-message"></div>
                                            </div>
                                            <div id="email-success-message" className="mtop0 hidden">
                                                <div className="ui green message">
                                                    Email sent. Open the email on your phone to download the app. Happy eating!                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="store-links col-l-10">
                                            <a className="pr20" target="_blank" href="https://bnc.lt/download-zomato-ios">
                                                <img src="https://b.zmtcdn.com/images/mobile/applestore@2x.png?output-format=webp" alt="Download Zomato for iOS" height="40" />
                                            </a>
                                            <a target="_blank" href="https://bnc.lt/download-z-android">
                                                <img src="https://b.zmtcdn.com/images/mobile/googleplay@2x.png?output-format=webp" alt="Download Zomato for Android" height="40" />
                                            </a>
                                        </div>
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
