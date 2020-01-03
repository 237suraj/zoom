import React, { Component } from 'react'
import './Collection.css'

export default class Collection extends Component {
    handleOnChange = () => {

    }
    render() {
        return (
            <section className="wrapper mtop2">
                <div className="row">
                    <div className="col-l-2by3">
                        <a href="/zomaland">
                            <img className="wrapper zomaland-banner" src="./img/zomaland.jpeg" width="100%" />
                        </a>
                        <h2 className="ui header">
                            <span className="segment_heading">Collections</span>
                            <span className="sub header">
                                <span className="segment_sub_heading">
                                    Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends                                </span>
                            </span>
                        </h2>
                        <div className="collections-grid row">
                            <div className="col-l-8 col-s-16 mbot">
                                <div className="ui fluid card">
                                    <a href="/new-years-eve-events">
                                        <div className="row">
                                            <div className="col-s-7">
                                                <img src="./img/newyear.jpg" alt="rated" className="collection-box-bg" />
                                                {/* <div title="New Year's Eve Events in Bengaluru" data-original="https://b.zmtcdn.com/data/collections/e8b4b69fc7705c28aa3d113bacb10916_1448978814.jpg?fit=around%7C300%3A250&amp;crop=300%3A250%3B%2A%2C%2A" style={{ backgroundImage: "url(&quot;https://b.zmtcdn.com/data/collections/e8b4b69fc7705c28aa3d113bacb10916_1448978814.jpg?fit=around%7C300%3A250&amp;crop=300%3A250%3B%2A%2C%2A&quot;)", backgroundPosition: "center", display: "block" }}>
                                                </div> */}
                                            </div>
                                            <div className="col-s-9">
                                                <div className="row">
                                                    <div className="ptop0 mr20 ml5 coll_detail">
                                                        <div className="heading bold ln20">
                                                            New Year's Eve Specials
                    </div>



                                                        <div className="zblack fontsize4 description mt5  hp ">Secure yourself a spot at these buzzing venues and ring in the new year in spectacular fashion</div>



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-l-8 col-s-16 mbot">
                                <div className="ui fluid card">
                                    <a href="/great-food-no-bull">
                                        <div className="row">
                                            <div className="col-s-7">
                                                <img src="./img/rated.jpg" alt="rated" className="collection-box-bg" />

                                                {/* <div title="Best Food in Bengaluru" className="collection-box-bg" data-original="https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg?fit=around%7C300%3A250&amp;crop=300%3A250%3B%2A%2C%2A" style={{ backgroundImage: "url(https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg?fit=around%7C300%3A250&amp;crop=300%3A250%3B%2A%2C%2A)", backgroundPosition: "center", display: "block" }}>
                                                </div> */}
                                            </div>
                                            <div className="col-s-9">
                                                <div className="row">
                                                    <div className="ptop0 mr20 ml5 coll_detail">
                                                        <div className="heading bold ln20">
                                                            Bengaluru's Finest
                    </div>



                                                        <div className="zblack fontsize4 description mt5  hp ">The hunt for the highest-rated restaurants in your city ends here</div>



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-l-8 col-s-16 mbot">
                                <div className="ui fluid card">
                                    <a href="/newly-opened">
                                        <div className="row">
                                            <div className="col-s-7">
                                                <img src="./img/open.jpg" alt="rated" className="collection-box-bg" />

                                                {/* <div title="Best New Places in Bengaluru" className="collection-box-bg" data-original="https://b.zmtcdn.com/data/collections/7bef8e84e64ccf5b728c77510b7d52ad_1535355701.jpg?fit=around%7C300%3A250&amp;crop=300%3A250%3B%2A%2C%2A" style={{ backgroundImage: "url(&quot;https://b.zmtcdn.com/data/collections/7bef8e84e64ccf5b728c77510b7d52ad_1535355701.jpg?fit=around%7C300%3A250&amp;crop=300%3A250%3B%2A%2C%2A&quot;", backgroundPosition: "center", display: "block" }}>
                                                </div> */}
                                            </div>
                                            <div className="col-s-9">
                                                <div className="row">
                                                    <div className="ptop0 mr20 ml5 coll_detail">
                                                        <div className="heading bold ln20">
                                                            Newly Opened
                    </div>



                                                        <div className="zblack fontsize4 description mt5  hp ">The best new places in town</div>



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-l-8 col-s-16 mbot">
                                <div className="ui fluid card">
                                    <a href="/dessert-places">
                                        <div className="row">
                                            <div className="col-s-7">
                                                <img src="./img/sweet.jpg" alt="rated" className="collection-box-bg" />

                                                {/* <div title="Top  places for Best Dessert in Bengaluru" className="collection-box-bg" data-original="https://b.zmtcdn.com/data/collections/445a7cf97fb6a7ac1977024fe8553fba_1575981572.jpg?fit=around%7C300%3A250&amp;crop=300%3A250%3B%2A%2C%2A" style={{ backgroundImage: "url(&quot;https://b.zmtcdn.com/data/collections/445a7cf97fb6a7ac1977024fe8553fba_1575981572.jpg?fit=around%7C300%3A250&amp;crop=300%3A250%3B%2A%2C%2A&quot;)", backgroundPosition: "center", display: "block" }}>
                                                </div> */}
                                            </div>
                                            <div className="col-s-9">
                                                <div className="row">
                                                    <div className="ptop0 mr20 ml5 coll_detail">
                                                        <div className="heading bold ln20">
                                                            Sweet Tooth
                    </div>



                                                        <div className="zblack fontsize4 description mt5  hp ">From cookies and doughnuts to ice cream and cakes, knock yourself out with these classNameic and creative desserts </div>



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-l-16 col-s-16">
                                <a href="/collections">
                                    <div className="ui segment zred tac">
                                        All collections in Bengaluru                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-l-1by3 homepage_order_widget">
                        <h2 className="ui header">
                            <span className="segment_heading">Order Food Online</span>
                            <span className="sub header">
                                <span className="segment_sub_heading">
                                    Best restaurants delivering to your doorstep                                </span>
                            </span>
                        </h2>
                        <div className="ui segment" style={{ minHeight: "333px" }}>
                            <div className="content">
                                <h4 className="header">Enter your delivery location</h4>
                                <div className="ui fluid order search mb15">
                                    <div className="ui left icon large input w100" style={
                                        { float: "none" }}>
                                        <i className="location arrow small icon"></i>
                                        <input className="location prompt" placeholder="Type delivery location here..." autoComplete="off" value="" onChange={this.handleOnChange} />
                                        <div className="input-separator"></div>
                                        <button type="button" className="ui icon button auto-detect">
                                            <span className="hide-on-mobile">Detect</span>
                                            <i className="icon" data-icon="8"></i>
                                        </button>
                                    </div>
                                    <div className="results"></div>
                                </div>
                                <div className="ui fluid green fluid button go-location homepage">Order Food Online!</div>
                                <div className="ui divider"></div>
                                <div className="not-available-errors hidden clearfix">
                                    <div className="col-s-16">
                                        <div className="ui warning message">We are not yet at your location</div>
                                    </div>
                                </div>
                                <div className="location-errors hidden clearfix">
                                    <div className="col-s-16">
                                        <div className="ui warning message">Sorry, we could not detect your delivery location. Please select a delivery area by typing in the search box above.</div>
                                    </div>
                                </div>
                                <div className="fontsize4 zgreen pt5 tac mtop2">
                                    Use code <b>ZOMATO</b> to get up to 50% OFF. T&amp;Cs apply.
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
