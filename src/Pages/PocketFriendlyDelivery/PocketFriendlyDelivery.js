import React, { Component } from 'react'
import './PocketFriendlyDelivery.css'
import Filter from '../../Containers/Filters/Filter'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import Product from '../../Containers/Product/Product'
import ProductData from '../../Data/PocketFriendlyDelivery.json'
export default class PocketFriendlyDelivery extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="row">
                        <div className="col-l-16 search-top-area">
                            <div className="search-header mb5">
                                <h1 className="search_title ptop pb5 fn mb0 mt10">Pocket Friendly Delivery Restaurants in Bengaluru</h1>
                            </div>
                        </div>
                        <Filter />
                        <div className="col-s-16 search-start plr15 col-l-8 mt20" id="search-start">
                            {
                                ProductData.map(pro=>{
                                    return <Product product={pro}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
