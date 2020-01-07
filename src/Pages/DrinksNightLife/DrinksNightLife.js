import React, { Component } from 'react'
import './DrinksNightLife.css'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import ProductData from '../../Data/DrinksNightLife.json'
import QuickSearch from '../../Containers/QuickSearch/QuickSearch'
export default class DrinksNightLife extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <QuickSearch ProductData={ProductData} title={'Drinks Night Life Restaurants in Bengaluru'} />
                <Footer />
            </React.Fragment>
        )
    }
}
