import React, { Component } from 'react'
import Navbar from '../../../Component/Navbar/Navbar'
import "./NewYearEvents.css"
export default class NewYearEvents extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div class="wrapper">
                    <div class="row mini-header__breadcrumb">
                        <div class="col-l-10 col-m-10">
                            <ol itemscope="" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="ui mini breadcrumb">
                                <span>
                                    <a href="https://www.zomato.com" itemprop="item" class="tduh section home">
                                        <span itemprop="name" class="grey-text">Home
                                </span>
                                    </a>
                                </span>
                                <meta itemprop="position" content="1" />
                            </li><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="ui mini breadcrumb ">
                                    <div class="left"> <i class="right angle tiny icon"></i>
                                    </div>
                                    <span>
                                        <a href="/">
                                            <span itemprop="name" class="tduh grey-text">Bengaluru</span>
                                        </a>
                                    </span>
                                    <meta itemprop="position" content="2" />
                                </li><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="ui mini breadcrumb ">
                                    <div class="left"> <i class="right angle tiny icon"></i>
                                    </div>
                                    <span>
                                        <a href="/collections#featured" itemprop="item" itemtype="https://schema.org/Thing">
                                            <span itemprop="name" class="tduh grey-text">Collections</span>
                                        </a>
                                    </span>
                                    <meta itemprop="position" content="3" />
                                </li><li class="ui mini breadcrumb">
                                    <div class="left"> <i class="right angle tiny icon"></i>
                                    </div>
                                    <span class="grey-text">New Year's Eve Specials
                                </span>
                                </li></ol>
                        </div>
                    </div>
                </div>
                {/* start copy code */}

                {/* end copy code */}

            </React.Fragment>
        )
    }
}

/*
open url https://www.zomato.com/bangalore/new-years-eve-events

*/
