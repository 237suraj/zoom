import React, { Component } from 'react'

export default class Terms extends Component {
    render() {
        return (
            <div className="tos-disclaimer">
                By logging in, you agree to Zomato's
                <a href="https://www.zomato.com/conditions"> Terms of Service</a>,
                <a href="https://www.zomato.com/cookiepolicy"> Cookie Policy</a>,
                <a href="https://www.zomato.com/privacy"> Privacy Policy</a> and
                <a href="https://www.zomato.com/policies"> Content Policies</a>.
            </div>
        )
    }
}
