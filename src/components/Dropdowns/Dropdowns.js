import React, { Component } from "react";
import axios from "axios";

import Dropdown from "./Dropdown/Dropdown";

class Dropdowns extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            areas: [],
        };
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

    render() {
        return (
            <div className="flex flex-row pb-12 w-10/12 sm:flex-col sm:text-center mx-auto justify-around sm:justify-between">
                <Dropdown category="Categories" items={this.state.categories} />
                <Dropdown
                    category="Areas"
                    items={this.state.areas}
                    spacing="sm:mt-6"
                />
            </div>
        );
    }
}

export default Dropdowns;
