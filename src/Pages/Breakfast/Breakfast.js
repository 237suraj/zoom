import React, { Component } from 'react'
import './Breakfast.css'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import ProductData from '../../Data/BuffetPlaces.json'
import QuickSearch from '../../Containers/QuickSearch/QuickSearch'
export default class Breakfast extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <QuickSearch ProductData={ProductData} title={'Breakfast Restaurants in Bengaluru'} />
                <Footer />
            </React.Fragment>
        )
    }
}
