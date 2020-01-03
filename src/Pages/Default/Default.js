import React, { Component } from 'react'
import './Default.css'
import Collection from '../../Component/Collection/Collection'
import Footer from '../../Shared/Footer/Footer'
import QuickSearch from '../../Component/QuickSearch/QuickSearch'
import Popular from '../../Component/Popular/Popular'
import Header from '../../Shared/Header/Header'

export default class Default extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="zimagery">
                    <div className="zimagery-overlay" style={{ background: "rgba(0,0,0,0.4)" }}>
                        <Header />
                        <div className="h-city-main p-relative" id="zimagery-container">
                            <div className="logo--home">
                                <a className="logo--header" href="/" title="Find the best restaurants, cafés, and bars in Bengaluru">
                                    <img className="br3" src="./img/zomato_flat_bg_logo.svg" alt="Find the best restaurants, cafés, and bars in Bengaluru" />
                                </a>
                            </div>

                            <h1 className="h-city-home-title">Find the best restaurants, cafés, and bars in Bengaluru</h1>
                            <div className="wrapper">
                                <div id="search_main_container" className="full_search">
                                    <div id="search_bar_wrapper" className="search_bar search-zindex" role="form">
                                        <div className="search_type flex-shrink-0">
                                            <div id="location_contianer" className="">
                                                <div id="location_pretext">
                                                    <div className="l-pre-1" role="link" aria-label="Please type a location..." aria-describedby="location_input_sp" tabIndex="0" aria-flowto="explore-location-suggest" data-homepage_ui_tracking_active="" data-homepage_ui_tracking_element_group="main_search_container" data-homepage_ui_tracking_element_id="location_input" style={{ display: "block" }}>
                                                        <span className="location_placeholder ml5">
                                                            <i className="location arrow icon tiny pr2"></i>
                                                        </span>
                                                        <span id="location_input_sp" className="location_input_sp mr5">Bengaluru</span>
                                                        <span className="right location-dropdown"><i className="ui icon tiny caret down left"></i></span>
                                                    </div>
                                                    <div className="l-pre-2 hidden" style={{ display: "none" }}>
                                                        <span className="location_placeholder ml5">
                                                            <i className="location arrow icon tiny pr2"></i>
                                                            <label className="hdn" id="label_search_location">Please type a location...</label>
                                                            <input id="location_input" role="combobox" aria-labelledby="label_search_location" aria-expanded="true" aria-autocomplete="list" aria-owns="explore-location-suggest" placeholder="Please type a location..." autoComplete="off" className="dark" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div role="listbox" id="explore-location-suggest" className="homepage suggest-box start-steps clearfix" style={{ display: "none" }}>
                                                    <div id="location-all" className="item" data-entity_type="city" data-entity_id="4">All of Bengaluru</div>
                                                    <ul id="location-recent" role="presentation" style={{ display: "none" }}>
                                                        <li className="label ttupper">Recent Locations</li>
                                                    </ul>
                                                    <ul id="location-popular" role="presentation">
                                                        <li className="label ttupper">Popular Locations</li>
                                                        <li className="item grey-text" role="option" data-entity_type="subzone" data-entity_id="5401">Whitefield, Bangalore</li><li className="item grey-text" role="option" data-entity_type="subzone" data-entity_id="5009">BTM, Bangalore</li><li className="item grey-text" role="option" data-entity_type="subzone" data-entity_id="5404">Marathahalli, Bangalore</li>                    </ul>
                                                    <ul id="location-suggestion-container" role="presentation"></ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-1 search-box plr0i ml5 mr5" style={{ borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px" }}>
                                            <div id="keywords_container" className="col-s-16 pr0" data-homepage_ui_tracking_active="" data-homepage_ui_tracking_element_group="main_search_container" data-homepage_ui_tracking_element_id="keywords_input">
                                                <div id="keywords_pretext">
                                                    <div className="k-pre-1 hidden" style={{ overflow: "hidden" }}>
                                                        <span className="search-bar-icon mr5">
                                                            <i className="search icon tiny"></i>
                                                        </span>

                                                        <div className="keyword_placeholder nowrap">
                                                            <div className="keyword_div">Search for restaurants or cuisines...</div>
                                                        </div>
                                                    </div>
                                                    <div className="k-pre-2  w100">
                                                        <span className="search-bar-icon mr5"><i className="search icon tiny"></i></span>
                                                        <label id="label_search_res" className="hdn">Search for restaurants or cuisines...</label>
                                                        <input role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="keywords-by" aria-labelledby="label_search_res" id="keywords_input" className="discover-search" placeholder="Search for restaurants or cuisines..." autoComplete="off" />
                                                    </div>
                                                </div>
                                                <div id="explore-keywords-dropdown" className="homepage ">
                                                    <div id="keywords-dd" style={{ overflow: "hidden" }}>
                                                        <ul id="keywords-by" role="listbox">
                                                        </ul>
                                                    </div>
                                                    <div className="keyword-search-start start-steps clearfix" style={{
                                                        overflow: "hidden"
                                                    }}>
                                                        <div className="search-screen-block hidden">
                                                            <div className="ui inverted dimmer screen-block-loader">
                                                                <div className="ui text loader">Coming right up...</div>
                                                            </div>
                                                        </div>

                                                        <ul id="no-results" className="hidden">
                                                            <li className="item no-result-found">
                                                                <a className="item">
                                                                    <div className="keywords-dd-l">No results found</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div className="popular-searches show">
                                                            <ul id="popular-results" data-entity-id="4" data-entity-type="city">
                                                                <li className="label">Trending Searches</li>
                                                                <li className="item-row"><span className="item" data-item_type="dish_v2" data-item_id="87291" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;dishv2_id=87291">	                                                <div>	                                                    <span className="start-step-label">	                                                        <span className="trending-icon"><img className="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Cake" /></span>	                                                        <span className="nowrap">Cake</span>	                                                    </span>	                                                </div>	                                            </span><span className="item" data-item_type="cuisine" data-item_id="1015" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;cuisine=1015">	                                                <div>	                                                    <span className="start-step-label">	                                                        <span className="trending-icon"><img className="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Mithai" /></span>	                                                        <span className="nowrap">Mithai</span>	                                                    </span>	                                                </div>	                                            </span></li><li className="item-row"><span className="item" data-item_type="chain" data-item_id="50574" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;chain=50574">	                                                <div>	                                                    <span className="start-step-label">	                                                        <span className="trending-icon"><img className="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="KFC" /></span>	                                                        <span className="nowrap">KFC</span>	                                                    </span>	                                                </div>	                                            </span><span className="item" data-item_type="restaurant" data-item_id="18422898" data-item_redirect="https://www.zomato.com/bangalore/hoot-sarjapur-road">	                                                <div>	                                                    <span className="start-step-label">	                                                        <span className="trending-icon"><img className="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Hoot" /></span>	                                                        <span className="nowrap">Hoot</span>	                                                    </span>	                                                </div>	                                            </span></li><li className="item-row"><span className="item" data-item_type="dish_v2" data-item_id="105689" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;dishv2_id=105689">	                                                <div>	                                                    <span className="start-step-label">	                                                        <span className="trending-icon"><img className="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Pasta" /></span>	                                                        <span className="nowrap">Pasta</span>	                                                    </span>	                                                </div>	                                            </span><span className="item" data-item_type="chain" data-item_id="50382" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;chain=50382">	                                                <div>	                                                    <span className="start-step-label">	                                                        <span className="trending-icon"><img className="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Dominos" /></span>	                                                        <span className="nowrap">Dominos</span>	                                                    </span>	                                                </div>	                                            </span></li></ul>
                                                        </div>
                                                        <ul id="explore-by">
                                                            <li className="label">Suggested Searches</li>

                                                            <li className="item" data-item_type="cat" data-item_id="1">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Delivery" />
                                                                    <span>Delivery</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="cat" data-item_id="13">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_13.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Pocket-Friendly Delivery" />
                                                                    <span>Pocket-Friendly Delivery</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="cat" data-item_id="8">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Breakfast" />
                                                                    <span>Breakfast</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="cat" data-item_id="9">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Lunch" />
                                                                    <span>Lunch</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="cat" data-item_id="10">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Dinner" />
                                                                    <span>Dinner</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="cat" data-item_id="3">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Drinks &amp; Nightlife" />
                                                                    <span>Drinks &amp; Nightlife</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="cat" data-item_id="6">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Cafés" />
                                                                    <span>Cafés</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="specials" data-item_id="14">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_14.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Buffet Places" />
                                                                    <span>Buffet Places</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="specials" data-item_id="13">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_13.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="North Indian" />
                                                                    <span>North Indian</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="specials" data-item_id="31">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_31.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Chinese" />
                                                                    <span>Chinese</span>
                                                                </div>
                                                            </li>

                                                            <li className="item" data-item_type="specials" data-item_id="10">
                                                                <div className="start-step-label">
                                                                    <img className="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_10.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Desserts &amp; Bakes" />
                                                                    <span>Desserts &amp; Bakes</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 plr0i">
                                            <div role="button" tabIndex="0" id="search_button" className="left ui button red " data-homepage_ui_tracking_active="" data-homepage_ui_tracking_element_group="main_search_container" data-homepage_ui_tracking_element_id="search_button">
                                                Search</div>
                                        </div>
                                    </div>

                                    <div className="clear"></div>
                                </div>
                                <form id="search-keyword" method="GET" action="https://www.zomato.com/index.php" className="hidden" style={{ borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px" }}>
                                    <input type="hidden" name="category" id="category" value="0" />
                                    <input type="hidden" name="tokens" id="selected-tokens" value="" />
                                    <input type="hidden" name="special" id="special" value="0" />
                                    <input type="hidden" name="cuisine" id="cuisine" value="0" />
                                    <input type="hidden" name="city" id="city" value="4" />
                                    <input type="hidden" name="subzone" id="subzone" value="" />
                                    <input type="hidden" name="zone" id="zone" value="" />
                                    <input type="hidden" name="landmark" id="landmark" value="" />
                                    <input type="hidden" name="near-me" id="near_me" value="" />
                                    <input type="hidden" name="zipcode" id="zipcode" value="" />
                                    <input type="hidden" name="zipcode_area" id="zipcode_area" value="" />
                                    <input type="hidden" name="group" id="group" value="" />
                                    <input type="hidden" name="street" id="street" value="" />
                                    <input type="hidden" name="entity_type" id="form_entity_type" value="city" />
                                    <input type="hidden" name="entity_id" id="form_entity_id" value="4" />
                                    <input type="hidden" name="order-online" id="online-ordering" value="" />
                                    <input type="hidden" name="q" id="keywords_query" value="" />
                                    <input type="hidden" name="place_id" id="place_id" value="" />
                                    <input type="hidden" name="table_booking" id="tr-header-input" value="" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Collection />
                <QuickSearch />
                <Popular />
                {/* <ZomatoApp /> */}
                <Footer />
            </React.Fragment >
        )
    }
}
