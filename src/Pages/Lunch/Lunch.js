import React, { Component } from 'react'
import './Lunch.css'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import ProductData from '../../Data/Lunch.json'
import QuickSearch from '../../Containers/QuickSearch/QuickSearch'
export default class Lunch extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <QuickSearch ProductData={ProductData} title={'Lunch Restaurants in Bengaluru'} />
                <Footer />
            </React.Fragment>
        )
    }
}
