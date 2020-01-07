import React, { Component } from 'react'
import './Product.css'
export default class Product extends Component {

    render() {
        var { img, type, name, location, address, cuisines, cost, hours, featured, rating, votes } = this.props.product
        return (
            <div className="row">
                <div className="col-s-16 search_results mbot">
                    <section id="search-results-container" className="clearfix">
                        <div className="orig-search-list-container  ">
                            <div className="ui inverted dimmer">
                                <div className="ui red text loader" style={{ top: "70%", position: "fixed" }}></div>
                            </div>
                            <div className="clear"></div>
                            <div id="orig-search-list" className="ui cards">
                                <div className="card  search-snippet-card     search-card  ">
                                    <div className="content">
                                        <div className="js-search-result-li even  status 1" data-res_id="18706428" data-position="1-2" data-trprovider="MEDIO_ZOMATO">
                                            <article className="search-result">
                                                <div className="pos-relative clearfix">
                                                    <div className="row">
                                                        <div className="col-s-6 col-m-4">
                                                            <div className="search_left_featured clearfix">
                                                                <img src={img} alt="logo" className="feat-img" />
                                                            </div>
                                                        </div>
                                                        <div className="col-s-16  col-m-12  pl0  ">
                                                            <div className="row">
                                                                <div className="col-s-12">
                                                                    <div className="res-snippet-small-establishment mt5" style={{ marginBottom: "7px" }}>
                                                                        {type}
                                                                    </div>
                                                                    <a className="result-title hover_feedback zred bold ln24   fontsize0 " href="https://www.zomato.com/bangalore/byg-brewski-brewing-company-hennur-bangalore" title="byg brewski brewing company Restaurant, Hennur" data-result-type="ResCard_Name">{name}</a>
                                                                    <div className="clear"></div>
                                                                    <a className="ln24 search-page-text mr10 zblack search_result_subzone left" href="https://www.zomato.com/bangalore/hennur-restaurants" title="Restaurants in Hennur"><b>{location}</b></a>

                                                                </div>
                                                                <div className="ta-right floating search_result_rating col-s-4 clearfix" style={{ lineHeight: "14px" }}>
                                                                    <div data-res-id="18706428" data-variation="mini inverted" data-content="Excellent" className="rating-popup rating-for-18706428 res-rating-nf right level-8 bold">
                                                                        {rating}
                                                                    </div>
                                                                    <div className="clear mb5"></div>
                                                                    <span className="rating-votes-div-51040 grey-text fontsize5">{votes} votes</span>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div style={{ maxWidth: "370px" }} className="col-m-16 search-result-address grey-text nowrap ln22" title={address}> {address}</div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ui divider"></div>

                                                <div className="search-page-text clearfix">
                                                    <div className="clearfix"><span className="col-s-5 col-m-4 ttupper fontsize5 grey-text">Cuisines: </span>
                                                        <span className="col-s-11 col-m-12 nowrap  pl0">{cuisines}</span>
                                                    </div>

                                                    <div className="res-cost clearfix"><span className="col-s-5 col-m-4 ttupper fontsize5 grey-text">Cost for two:</span><span className="col-s-11 col-m-12 pl0">{cost}</span></div>

                                                    <div className="res-timing clearfix" title="12 Noon to 1 AM (Mon-Sat), 12:30 PM to 1 AM (Sun)">
                                                        <span className="col-s-5 col-m-4 ttupper   fontsize5  grey-text left">Hours:</span>
                                                        <div className="col-s-11 col-m-12 pl0 search-grid-right-text ">
                                                            {hours}
                                                        </div>
                                                        <div className="clear"></div>
                                                    </div>

                                                    <div className="res-collections clearfix">
                                                        <span className="col-s-5 col-m-4 ttupper   fontsize5  grey-text">Featured in: </span>
                                                        <div className="col-s-11 col-m-12 pl0 search-grid-right-text ">
                                                            {featured}
                                                        </div>
                                                    </div>

                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="ui four item menu search-result-action mt0">
                                        <a href="/bangalore" className="item res-snippet-ph-info">
                                            <span data-icon="" className="zdark fontsize4 bold action_btn_icon">Call</span>
                                        </a>
                                        <a className="item result-menu" href="/bangalore/byg-brewski-brewing-company-hennur-bangalore/menu#tabtop" title="byg brewski brewing company Menu" data-result-type="ResCard_Menu">
                                            <span data-icon="" className="zdark fontsize4 bold action_btn_icon">View Menu</span>
                                        </a>
                                        <a className="item book-test table-booking-search" href="/bangalore/byg-brewski-brewing-company-hennur-bangalore/book#tablebook-search" title="Book a table at byg brewski brewing company" style={{ textTransform: "none" }} data-result-type="ResCard_TableBooking" data-res_id="18706428" data-mezzoprovider="0" data-trprovider="MEDIO_ZOMATO">
                                            <span data-icon="" className="zdark fontsize4 bold action_btn_icon">Book a Table</span>
                                        </a>
                                        <a style={{ backgroundColor: "#099E44" }} className="item" data-res_id="18706428" data-class_name="o2_link" href="https://www.zomato.com/restaurant?tab=order&amp;res_id=18706428" data-app_link="" data-source="search">
                                            <div>
                                                <div className="fontsize4 bold white action_btn_icon" data-icon="">Order Now</div>
                                                <div className="clear ieclear"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div >
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-s-16 restaurant_search hidden">
                    <div id="orig-search-list" className="restaurant-result ui cards">
                    </div>
                </div>
            </div>
        )
    }
}
