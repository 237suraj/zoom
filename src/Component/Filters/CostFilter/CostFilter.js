import React, { Component } from 'react'
import './CostFilter.css'
export default class CostFilter extends Component {
    state = {
        removeFilter: false,
        classA: "link_hover",
        classB: "link_hover",
        classC: "link_hover",
        classD: "link_hover",
        classE: "link_hover",
        classF: "link_hover"
    }
    componentDidMount() {
        console.log(this.props);
    }

    clearFilter = () => {
        this.setState({ removeFilter: false })
        this.props.clearFilter()
    }

    handleClick = (value) => {
        this.setState({ classA: "link_hover" })
        this.setState({ classB: "link_hover" })
        this.setState({ classC: "link_hover" })
        this.setState({ classD: "link_hover" })
        this.setState({ classE: "link_hover" })
        this.setState({ classF: "link_hover" })
        this.setState({ removeFilter: true })
        if (value === "costA")
            this.setState({ classA: "zgreen bold" })
        if (value === "costB")
            this.setState({ classB: "zgreen bold" })
        if (value === "costC")
            this.setState({ classC: "zgreen bold" })
        if (value === "costD")
            this.setState({ classD: "zgreen bold" })
        if (value === "costE")
            this.setState({ classE: "zgreen bold" })
        if (value === "costF")
            this.setState({ classF: "zgreen bold" })
        this.props.filterCost(value);

    }
    render() {
        var { costA, costB, costC, costD, costE, costF, } = this.props.parentState.cost
        return (
            <div className="search-filter-tab pt0 pb0 mtop" id="filter-cost-html-area-close">
                <div className="ui header small mb0">
                    <div className="search-filter-label pb5" tabIndex="0" title="Cost for two">Cost for two
                        {this.state.removeFilter && <span className="right grey-text link_hover" onClick={this.clearFilter.bind(this)}
                            style={{ fontSize: "12px" }} title="Clear filter">Remove filter</span>}
                    </div>
                </div>
                <div id="filter-cost-html-area" className="facet-list-dialog">
                    {
                        costA ?
                            <div className={this.state.classA} onClick={this.handleClick.bind(this, "costA")}>
                                <div className="link_hover w100 cft cursor-pointer">Less than ₹250
                                    <span className="right grey-text">{costA}</span>
                                </div>
                            </div> : ''
                    }
                    {
                        costB ?
                            <div className={this.state.classB} onClick={this.handleClick.bind(this, "costB")}>
                                <div className="link_hover w100 cft cursor-pointer"> ₹250 to  ₹500
                                    <span className="right grey-text">{costB}</span>
                                </div>
                            </div> : ''
                    }
                    {
                        costC ?
                            <div className={this.state.classC} onClick={this.handleClick.bind(this, "costC")}>
                                <div className="link_hover w100 cft cursor-pointer"> ₹500 to  ₹1,000
                                    <span className="right grey-text">{costC}</span>
                                </div>
                            </div> : ''
                    }
                    {
                        costD ?
                            <div className={this.state.classD} onClick={this.handleClick.bind(this, "costD")}>
                                <div className="link_hover w100 cft cursor-pointer"> ₹1,000 to  ₹1,500
                                    <span className="right grey-text">{costD}</span>
                                </div>
                            </div> : ''
                    }
                    {
                        costE ?
                            <div className={this.state.classE} onClick={this.handleClick.bind(this, "costE")}>
                                <div className="link_hover w100 cft cursor-pointer"> ₹1,500 to  ₹2,500
                                    <span className="right grey-text">{costE}</span>
                                </div>
                            </div> : ''
                    }
                    {
                        costF ?
                            <div className={this.state.classF} onClick={this.handleClick.bind(this, "costF")}>
                                <div className="link_hover w100 cft cursor-pointer">₹2,500 +
                                    <span className="right grey-text">{costF}</span>
                                </div>
                            </div> : ''
                    }

                </div>
            </div>
        )
    }
}
