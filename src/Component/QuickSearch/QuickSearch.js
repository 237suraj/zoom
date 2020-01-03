import React, { Component } from 'react'
import './QuickSearch.css'

export default class QuickSearch extends Component {
    render() {
        return (
            <section className="wrapper mtop2 ptop">
                <h2 className="ui header">
                    <span className="segment_heading">Quick Searches</span>
                    <span className="sub header">
                        <span className="segment_sub_heading">
                            Discover restaurants by type of meal                    </span>
                    </span>
                </h2>
                <div className="ui segment eight column doubling padded grid">
                    <a href="/delivery" className="column ta-center start-categories-item">
                        <img alt="img" className="ui middle aligned mini image mb5" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?output-format=webp" style={{ height: "48px", width: "48px", display: "inline-block" }} />
                        <div>Delivery</div>
                    </a>
                    <a href="/pocket-friendly-delivery" className="column ta-center start-categories-item">
                        <img alt="img" className="ui middle aligned mini image mb5" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_13.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_13.png?output-format=webp" style={{ height: "48px", width: "48px", display: "inline-block" }} />
                        <div>Pocket-Friendly Delivery</div>
                    </a>
                    <a href="/breakfast" className="column ta-center start-categories-item">
                        <img alt="img" className="ui middle aligned mini image mb5" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp" style={{ height: "48px", width: "48px", display: "inline-block" }} />
                        <div>Breakfast</div>
                    </a>
                    <a href="/lunch" className="column ta-center start-categories-item">
                        <img alt="img" className="ui middle aligned mini image mb5" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp" style={{ height: "48px", width: "48px", display: "inline-block" }} />
                        <div>Lunch</div>
                    </a>
                    <a href="/dinner" className="column ta-center start-categories-item">
                        <img alt="img" className="ui middle aligned mini image mb5" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp" style={{ height: "48px", width: "48px", display: "inline-block" }} />
                        <div>Dinner</div>
                    </a>
                    <a href="/drinks-and-nightlife" className="column ta-center start-categories-item">
                        <img alt="img" className="ui middle aligned mini image mb5" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp" style={{ height: "48px", width: "48px", display: "inline-block" }} />
                        <div>Drinks &amp; Nightlife</div>
                    </a>
                    <a href="/cafes" className="column ta-center start-categories-item">
                        <img alt="img" className="ui middle aligned mini image mb5" src="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp" style={{ height: "48px", width: "48px", display: "inline-block" }} />
                        <div>Cafés</div>
                    </a>
                    <a href="/restaurants" className="column ta-center start-categories-item">
                        <img alt="img" className="ui middle aligned mini image mb5" src="https://b.zmtcdn.com/images/search_tokens/app_icons/special_14.png?output-format=webp" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_14.png?output-format=webp" style={{ height: "48px", width: "48px", display: "inline-block" }} />
                        <div>Buffet Places</div>
                    </a>
                </div>
            </section>
        )
    }
}
