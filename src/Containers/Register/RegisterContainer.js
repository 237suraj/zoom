import React, { Component } from 'react'
import Register from './Register'

export default class RegisterContainer extends Component {
    handleClose = ()=> {
        this.props.close()
    }
    render() {
        return (
            <div className="ui dimmer modals page transition active" style={{ display: "block !important" }}>
                <div id="modal-container" className="ui modal transition active scrolling"
                    style={{ marginLeft: "-225px", display: "block !important", height: "auto", width: "450px", top: "0px" }}>
                    <i className="close icon" onClick={this.handleClose}></i>
                    <div className="header" id="modal-header">Register</div>
                    <Register /> 
                </div>
            </div>

        )
    }
}
