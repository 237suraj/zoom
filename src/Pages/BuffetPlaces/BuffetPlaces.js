import React, { Component } from 'react'
import './BuffetPlaces.css'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import ProductData from '../../Data/BuffetPlaces.json'
import QuickSearch from '../../Containers/QuickSearch/QuickSearch'
export default class BuffetPlaces extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <QuickSearch ProductData={ProductData} title={'Restaurants in Bengaluru serving Buffet'} />
                <Footer />
            </React.Fragment>
        )
    }
}
