import React, { Component } from 'react'
import './Delivery.css'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import ProductData from '../../Data/Delivery.json'
import QuickSearch from '../../Containers/QuickSearch/QuickSearch'
export default class Delivery extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <QuickSearch ProductData={ProductData} title={'Delivery Restaurants in Bengaluru'} />
                <Footer />
            </React.Fragment>
        )
    }
}
