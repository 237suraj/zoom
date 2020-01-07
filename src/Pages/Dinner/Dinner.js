import React, { Component } from 'react'
import './Dinner.css'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import ProductData from '../../Data/Dinner.json'
import QuickSearch from '../../Containers/QuickSearch/QuickSearch'
export default class Dinner extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <QuickSearch ProductData={ProductData} title={'Dinner Restaurants in Bengaluru'} />
                <Footer />
            </React.Fragment>
        )
    }
}
