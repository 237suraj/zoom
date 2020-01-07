import React, { Component } from 'react'
import './Cafes.css'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import ProductData from '../../Data/Cafes.json'
import QuickSearch from '../../Containers/QuickSearch/QuickSearch'
export default class Cafes extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <QuickSearch ProductData={ProductData} title={'Cafés and Delis in Bengaluru'} />
                <Footer />
            </React.Fragment>
        )
    }
}
