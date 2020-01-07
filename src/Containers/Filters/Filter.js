import React, { Component } from 'react'
import './Filter.css'
import SortedFilter from '../../Component/Filters/SortedFilter/SortedFilter'
import CostFilter from '../../Component/Filters/CostFilter/CostFilter'
export default class Filter extends Component {

    handleClick = (value) => {
        this.props.clicked(value)
    }

    handleFilterCost = (value) => {
        this.props.filterCost(value)
    }

    handleClearFilter = () => {
        this.props.clearFilter()
    }

    render() {
        return (
            <div role="group" className="col-s-16 col-l-3 search-filter-container pr0 mt20">
                <div className="additional-options mt0 ui segment">
                    <div className="ui header medium mt0 mb10">Filters</div>

                    <div className="search_filter checkboxes pb5">
                        <a data-input-name="table_booking" title="Resturants accepting online reservations " href="/bangalore/delivery?table_booking=1" className="filter bboth sf option  ui checkbox" data-table_booking="0" id="table_booking-filter">
                            <span className="link_hover">Book a Table</span>
                        </a>
                    </div>         <div className="ui divider"></div>

                    <div className="search_filter checkboxes pb5">
                        <a data-input-name="" title="Zomato Gold partner " href="/bangalore/delivery?gold_partner=1" className="filter bboth sf option  ui checkbox" data-="id=&quot;-filter&quot;">
                            <span className="link_hover">Zomato Gold partner</span>
                        </a>
                    </div>         <div className="ui divider"></div>


                    <div className="search_filter checkboxes pb5">
                        <a data-input-name="order-online" title="Restaurants having online ordering " href="/bangalore/restaurants?category=1&amp;order-online=1" className="filter bboth sf option  ui checkbox" data-order-online="0" id="order-online-filter">
                            <span className="link_hover">Order Food Online</span>
                        </a>
                    </div>
                    <SortedFilter clicked={this.handleClick} />
                    <CostFilter
                        parentState={this.props.parentState}
                        clearFilter={this.handleClearFilter.bind(this)}
                        filterCost={this.handleFilterCost.bind(this)} />
                </div>
                <div className="mb-20"></div>
            </div>

        )
    }
}
