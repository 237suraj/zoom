import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-m-10">
                            <h3 className="footer-top logo--footer" tabIndex="0">
                                <a className="logo--header" href="https://www.zomato.com/bangalore" title="Find the best restaurants, cafés, and bars in Bengaluru">
                                    <img className="br3" src="https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg" alt="Find the best restaurants, cafés, and bars in Bengaluru" width="60px" />
                                </a>

                            </h3>
                        </div>
                        <div className="col-m-6 ptop0">
                            <div className="ui dropdown lang-dropdown" tabIndex="0">
                                <div className="default text" data-icon="g">English</div>
                                <div className="ml10 right"><i data-icon="" className="ui white tiny icon"></i></div>
                                <div className="vertical menu langbox__dropdown" style={{ minWidth: "100%" }} tabIndex="-1">
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=cs&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Čeština</a>
                                    <a className="item active selected" href="https://www.zomato.com/bangalore/collections?lang=en&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>English</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=es&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Español</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=hi&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>हिंदी</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=id&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Indonesian</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=it&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Italian</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=pl&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Polish</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=por&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Português (BR)</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=pt&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Português (PT)</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=sk&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Slovenčina</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=tr&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Türkçe</a>
                                    <a className="item" href="https://www.zomato.com/bangalore/collections?lang=vi&amp;user_lang_change=1" style={{ paddingLeft: "28px !important" }}>Vietnamese</a>
                                </div>
                            </div>                                    </div>
                    </div>

                    <div className="footer_divider"></div>
                    <div className="row">
                        <div className="col-m-4">
                            <h3>About Zomato</h3>
                            <ul className="footer-links--big">
                                <li>
                                    <a href="https://www.zomato.com/about" target="_blank">
                                        About Us
                        </a>
                                </li>
                                <li>
                                    <a href="https://culture.zomato.com" target="_blank">
                                        Culture
                        </a>
                                </li>
                                <li>
                                    <a href="https://zomato.com/blog" target="_blank">
                                        Blog
                        </a>
                                </li>
                                <li>
                                    <a href="https://www.zomato.com/careers" target="_blank">
                                        Careers
                        </a>
                                </li>
                                <li className="contact-big-footer-link">
                                    <a href="https://www.zomato.com/contact" target="_blank">
                                        Contact
                        </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-m-5">
                            <h3>For Foodies</h3>
                            <ul className="footer-links--big">
                                <li>
                                    <a href="https://www.zomato.com/policies">
                                        Code of Conduct
                        </a>
                                </li>
                                <li>
                                    <a href="http://community.zomato.com">
                                        Community
                        </a>
                                </li>
                                <li>
                                    <a href="https://www.zomato.com/verified">
                                        Verified Users
                        </a>
                                </li>
                                <li>
                                    <a href="https://www.zomato.com/bloggers">
                                        Blogger Help
                        </a>
                                </li>
                                <li>
                                    <a href="https://developers.zomato.com">
                                        Developers
                        </a>
                                </li>
                                <li>
                                    <a href="https://www.zomato.com/mobile">
                                        Mobile Apps
                        </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-m-7">
                            <h3>For Restaurants</h3>
                            <div className="row">
                                <div className="col-m-8">
                                    <ul className="footer-links--big">
                                        <li>
                                            <a href="https://www.zomato.com/addrestaurant">
                                                Add a Restaurant
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://www.zomato.com/business">
                                                Claim your Listing
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://www.zomato.com/business/apps">
                                                Business App
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://www.zomato.com/guidelines/merchant">
                                                Business Owner Guidelines
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://business-blog.zomato.com/">
                                                Business Blog
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://www.zomato.com/business/widgets">
                                                Restaurant Widgets
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://www.zomato.com/business">
                                                Products for Businesses
                                </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-m-8">
                                    <ul className="footer-links--big">
                                        <li>
                                            <a href="https://www.zomato.com/business/advertise">
                                                Advertise
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://www.zomato.com/business/order">
                                                Order
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://www.zomato.com/book">
                                                Book
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://www.zomato.com/trace">
                                                Trace
                                </a>
                                        </li>
                                        <li>
                                            <a className="all_web_jumbo_click_track" data-total_jumbo_click_payload="[{&quot;table&quot;:&quot;jevent&quot;,&quot;payload&quot;:{&quot;ename&quot;:&quot;hyperpure_footer_link&quot;,&quot;var1&quot;:0}}]" href="https://hyperpure.com/">
                                                Hyperpure
                                </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_divider mt5"></div>
                    <div className="row">
                        <div className="col-m-16"><h3 tabIndex="0">Countries</h3></div>

                        <div className="col-m-1by5 col-m-4">
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Australia" href="https://www.zomato.com/australia">
                                        Australia
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Brasil" href="https://www.zomato.com/brasil">
                                        Brasil
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Canada" href="https://www.zomato.com/canada">
                                        Canada
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Chile" href="https://www.zomato.com/chile">
                                        Chile
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Czech Republic" href="https://www.zomato.com/czech-republic">
                                        Czech Republic
                            </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-m-1by5 col-m-4">
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in India" href="https://www.zomato.com/india">
                                        India
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Indonesia" href="https://www.zomato.com/indonesia">
                                        Indonesia
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Ireland" href="https://www.zomato.com/ireland">
                                        Ireland
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Italy" href="https://www.zomato.com/italy">
                                        Italy
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Lebanon" href="https://www.zomato.com/lebanon">
                                        Lebanon
                            </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-m-1by5 col-m-4">
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Malaysia" href="https://www.zomato.com/malaysia">
                                        Malaysia
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in New Zealand" href="https://www.zomato.com/newzealand">
                                        New Zealand
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Philippines" href="https://www.zomato.com/philippines">
                                        Philippines
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Poland" href="https://www.zomato.com/poland">
                                        Poland
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Portugal" href="https://www.zomato.com/portugal">
                                        Portugal
                            </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-m-1by5 col-m-4">
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Qatar" href="https://www.zomato.com/qatar">
                                        Qatar
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Singapore" href="https://www.zomato.com/singapore-country">
                                        Singapore
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Slovakia" href="https://www.zomato.com/slovakia">
                                        Slovakia
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in South Africa" href="https://www.zomato.com/southafrica">
                                        South Africa
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Sri Lanka" href="https://www.zomato.com/srilanka">
                                        Sri Lanka
                            </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-m-1by5 col-m-4">
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in Turkey" href="https://www.zomato.com/turkey">
                                        Turkey
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in UAE" href="https://www.zomato.com/uae">
                                        UAE
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in United Kingdom" href="https://www.zomato.com/uk">
                                        United Kingdom
                            </a>
                                </li>
                            </ul>
                            <ul className="footer-links--big">
                                <li>
                                    <a className="pl5" title="Restaurants in United States" href="https://www.zomato.com/united-states">
                                        United States
                            </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer_divider mt5"></div>
                    <div className="row footer_policy_links">
                        <div className="col-m-12">
                            <ul className="footer_horiz_list">
                                <li>
                                    <a href="https://www.zomato.com/privacy">
                                        Privacy
                        </a>
                                </li>
                                <li>
                                    <a href="https://www.zomato.com/conditions">
                                        Terms
                        </a>
                                </li>
                                <li>
                                    <a href="https://www.zomato.com/api_policy">
                                        API Policy
                        </a>
                                </li>
                                <li>
                                    <a href="https://www.zomato.com/corporate-social-responsibility">
                                        CSR
                        </a>
                                </li>
                                <li>
                                    <a href="https://www.zomato.com/security">
                                        Security
                        </a>
                                </li>
                                <li>
                                    <a href="https://www.zomato.com/directory">
                                        Sitemap
                        </a>
                                </li>
                            </ul>
                        </div>
                        <div className="social-container col-m-4">
                            <a target="_blank" href="https://twitter.com/zomato"><div className="social-icons twitter" data-icon="t"></div></a>
                            <a target="_blank" href="https://www.instagram.com/zomato/"><div className="social-icons instagrm" data-icon="4"></div></a>
                            <a target="_blank" href="https://www.facebook.com/zomato"><div className="social-icons facebook" data-icon="¶"></div></a>
                        </div>
                    </div>

                    <div className="footer_divider"></div>
                    <div className="footer-bottom row">
                        <div className="footer-msg">
                            By continuing past this page, you agree to our <a href="http://www.zomato.com/conditions" rel="nofollow">Terms of Service</a>, <a href="http://www.zomato.com/cookiepolicy" rel="nofollow">Cookie Policy</a>, <a href="http://www.zomato.com/privacy" rel="nofollow">Privacy Policy</a> and <a href="http://www.zomato.com/policies" rel="nofollow">Content Policies</a>. All trademarks are properties of their respective owners. © 2008-2020 - <a href="http://www.zomato.com">Zomato</a>™ Media Pvt Ltd. All rights reserved.
                            </div>
                    </div>
                    <a href="https://plus.google.com/104017429609258707097" rel="publisher" className="hidden">Find us on Google+</a>
                </div>
            </footer>
        )
    }
}
