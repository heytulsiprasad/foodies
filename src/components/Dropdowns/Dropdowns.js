import React, { Component } from "react";
import axios from "axios";

import Dropdown from "./Dropdown/Dropdown";

class Dropdowns extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            areas: [],
            chosen: {
                categories: null,
                areas: null,
            },
        };

        this.chosenCategory = this.chosenCategory.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.active.category === null && props.active.area === null) {
            return {
                chosen: {
                    categories: null,
                    areas: null,
                },
            };
        } else {
            return {
                ...state,
            };
        }
    }

    componentDidMount() {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then((res) => {
                let cats = res.data.meals; // cats: array
                let foodCategories = cats.map((cat) => {
                    return cat["strCategory"];
                });

                this.setState({ categories: foodCategories });
            });

        axios
            .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then((res) => {
                let ars = res.data.meals; // ars: array
                let areasCategory = ars.map((a) => {
                    return a["strArea"];
                });

                this.setState({ areas: areasCategory });
            });
    }

    chosenCategory(filterName, filterValue) {
        if (filterName === "Categories") {
            this.props.filters(filterValue, null);
            this.setState({
                chosen: {
                    categories: filterValue,
                    areas: null,
                },
            });
        } else if (filterName === "Areas") {
            this.props.filters(null, filterValue);
            this.setState({
                chosen: {
                    categories: null,
                    areas: filterValue,
                },
            });
        }
    }

    render() {
        return (
            <div className="flex flex-row pb-12 w-10/12 sm:flex-col sm:text-center mx-auto justify-around sm:justify-between">
                <Dropdown
                    category="Categories"
                    chosenCategory={this.chosenCategory}
                    items={this.state.categories}
                    active={this.state.chosen.categories}
                />
                <Dropdown
                    category="Areas"
                    chosenCategory={this.chosenCategory}
                    items={this.state.areas}
                    active={this.state.chosen.areas}
                    spacing="sm:mt-6"
                />
            </div>
        );
    }
}

export default Dropdowns;
