import React, { Component } from 'react'
import './PocketFriendlyDelivery.css'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import ProductData from '../../Data/PocketFriendlyDelivery.json'
import QuickSearch from '../../Containers/QuickSearch/QuickSearch'
export default class PocketFriendlyDelivery extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <QuickSearch ProductData={ProductData} title={'Pocket-Friendly Delivery Restaurants in Bengaluru'} />
                <Footer />
            </React.Fragment>
        )
    }
}
