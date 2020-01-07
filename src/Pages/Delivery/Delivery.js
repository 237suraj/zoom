import React, { Component } from 'react'
import './Delivery.css'
import Filter from '../../Containers/Filters/Filter'
import Product from '../../Containers/Product/Product'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import ProductData from '../../Data/Delivery.json'
import OriginalProduct from '../../Data/Delivery.json'
export default class Delivery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ProductData: ProductData,
            OriginalProduct: OriginalProduct,
            costA: 0,
            costB: 0,
            costC: 0,
            costD: 0,
            costE: 0,
            costF: 0,
            cost: {}
        }
    }

    async componentDidMount() {
        await this.getCostCount(ProductData)
        this.setState({
            cost: {
                costA: this.state.costA,
                costB: this.state.costB,
                costC: this.state.costC,
                costD: this.state.costD,
                costE: this.state.costE,
                costF: this.state.costF,
            }
        })
    }


    getCostCount = async (data) => {
        for (let index = 0; index < data.length; index++) {
            var cost = data[index]["cost"];
            if (cost < 250) {
                this.setState({ costA: ++this.state.costA })
            }
            if (cost >= 250 && cost < 500) {
                this.setState({ costB: ++this.state.costB })
            }
            if (cost >= 500 && cost < 1000) {
                this.setState({ costC: ++this.state.costC })
            }
            if (cost >= 1000 && cost < 1500) {
                this.setState({ costD: ++this.state.costD })
            }
            if (cost >= 1500 && cost < 2500) {
                this.setState({ costE: ++this.state.costE })
            }
            if (cost >= 2500) {
                this.setState({ costF: ++this.state.costF })
            }
        }
    }

    handleClearFilter = () => {
        this.setState({ ProductData: this.state.OriginalProduct })
    }

    handleFilterCost = async (value) => {
        if (value === "costA") {
            this.setState({ ProductData: this.state.OriginalProduct.filter(pro => pro.cost < 250) })
        }
        if (value === "costB") {
            this.setState({ ProductData: this.state.OriginalProduct.filter(pro => pro.cost >= 250 && pro.cost < 500) })
        }
        if (value === "costC") {
            this.setState({ ProductData: this.state.OriginalProduct.filter(pro => pro.cost >= 500 && pro.cost < 1000) })
        }
        if (value === "costD") {
            this.setState({ ProductData: this.state.OriginalProduct.filter(pro => pro.cost >= 1000 && pro.cost < 1500) })
        }
        if (value === "costE") {
            this.setState({ ProductData: this.state.OriginalProduct.filter(pro => pro.cost >= 1500 && pro.cost < 2500) })
        }
        if (value === "costF") {
            this.setState({ ProductData: this.state.OriginalProduct.filter(pro => pro.cost >= 2500) })
        }
    }

    handleClick = (value) => {
        if (value === "popularity")
            this.setState({ ProductData: this.state.ProductData.sort() })
        if (value === "costasc")
            this.setState({ ProductData: this.state.ProductData.sort(this.sortBYCostAsc) })
        if (value === "costdesc")
            this.setState({ ProductData: this.state.ProductData.sort(this.sortBYCostDesc) })
        if (value === "rating")
            this.setState({ ProductData: this.state.ProductData.sort(this.sortBYRating) })
    }

    sortBYRating = (a, b) => {
        return b["rating"] - a["rating"]
    }
    sortBYCostAsc = (a, b) => {
        return a["cost"] - b["cost"]
    }
    sortBYCostDesc = (a, b) => {
        return b["cost"] - a["cost"]
    }

    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="row">
                        <div className="col-l-16 search-top-area">
                            <div className="search-header mb5">
                                <h1 className="search_title ptop pb5 fn mb0 mt10">Delivery Restaurants in Bengaluru</h1>
                            </div>
                        </div>
                        {this.state.cost != null &&
                            <Filter clicked={this.handleClick}
                                parentState={this.state} clearFilter={this.handleClearFilter.bind(this)}
                                filterCost={this.handleFilterCost.bind(this)} />}
                        <div className="col-s-16 search-start plr15 col-l-8 mt20" id="search-start">
                            {
                                this.state.ProductData.map(pro => {
                                    return <Product key={pro.name} product={pro} />
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
