import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div id="sticky_header" className="ui sticky v2">
                <header className="header" id="header">
                    <div className="header__container">
                        <div className="header__wrapper">
                            <div id="login-navigation" className="login__container right">
                                <div className="header-link">
                                    <Link to={"#"} className="signin-link header-login-button ui button mr0" id="signin-link">Log in</Link>
                                    <Link to={"#"} className="signup-link header-login-button ui button mr0" id="signup-link">Create an account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
