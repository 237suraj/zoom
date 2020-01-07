import React, { Component } from 'react'
import './SortedFilter.css'
export default class SortedFilter extends Component {
    state = {
        popular: "zgreen bold",
        rating: "link_hover",
        costDesc: "link_hover",
        costAsc: "link_hover"
    }
    handlePopularity = () => {
        this.props.clicked("popularity")
        this.resetClasses()
        this.setState({popular: "zgreen bold"})
    }
    handleRating = () => {
        this.props.clicked("rating")
        this.resetClasses()
        this.setState({rating: "zgreen bold"})
    }
    handleCostDesc = () => {
        this.props.clicked("costdesc")
        this.resetClasses()
        this.setState({costDesc: "zgreen bold"})
    }
    handleCostAsc = () => {
        this.props.clicked("costasc")
        this.resetClasses()
        this.setState({costAsc: "zgreen bold"})
    }
    resetClasses = () => {
        this.setState({
            popular: "link_hover",
            rating: "link_hover",
            costDesc: "link_hover",
            costAsc: "link_hover"
        })
    }
    render() {
        return (
            <div className="filter-padding search-filter-tab pt0 pb0">
                <div className=""></div>
                <div className="ui header small margin0">
                    <div className="search-filter-label pb5" tabIndex="0" title="Sort by">Sort by</div>
                </div>
                <button onClick={this.handlePopularity}>
                    <div className="search_filter sort cursor-pointer">
                        <span className={this.state.popular}>Popularity <span className="grey-text"> - high to low </span></span>
                    </div>
                </button>
                <button onClick={this.handleRating}>
                    <div className="search_filter sort cursor-pointer">
                        <span className={this.state.rating}>Rating <span className="grey-text"> - high to low </span></span>
                    </div>
                </button>
                <button onClick={this.handleCostDesc}>
                    <div className="search_filter sort cursor-pointer">
                        <span className={this.state.costDesc}>Cost <span className="grey-text"> - high to low </span></span>
                    </div>
                </button>
                <button onClick={this.handleCostAsc}>
                    <div className="search_filter sort cursor-pointer">
                        <span className={this.state.costAsc}>Cost <span className="grey-text"> - low to high </span></span>
                    </div>
                </button>
            </div>
        )
    }
}
