import React, { Component } from 'react'
import './Header.css'
import Login from '../../Containers/Login/Login'
import RegisterContainer from '../../Containers/Register/RegisterContainer'
export default class Header extends Component {

    constructor() {
        super()
        this.state = {
            isLoginClicked: false,
            isCreateAccoutClicked: false
        }
    }

    handleLogin = () => {
        this.setState({ isLoginClicked: true })
    }
    handleCreateAccout = () => {
        this.setState({isCreateAccoutClicked: true})
    }

    handleClose = () => {
        this.setState({ isLoginClicked: false })
        this.setState({isCreateAccoutClicked: false})
    }

    render() {
        return (
            <div>
                {this.state.isLoginClicked && <Login close={this.handleClose} />}
                {this.state.isCreateAccoutClicked && <RegisterContainer close={this.handleClose} />}
                <div id="sticky_header" className="ui sticky v2">
                    <header className="header" id="header">
                        <div className="header__container">
                            <div className="header__wrapper">
                                <div id="login-navigation" className="login__container right">
                                    <div className="header-link">
                                        <button className="signin-link header-login-button ui button mr0" id="signin-link" onClick={this.handleLogin}>Log in</button>
                                        <button className="signup-link header-login-button ui button mr0" id="signup-link" onClick={this.handleCreateAccout}>Create an account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}
