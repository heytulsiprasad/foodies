import React, { Component } from "react";
import classes from "./Page.module.css";

import SearchBox from "../../components/SearchBox/SearchBox";
import Filters from "../../components/Filters/Filters";
import FoodItems from "../FoodItems/FoodItems";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typed: null,
            nutrients: {
                carb: {
                    isOn: false,
                    value: null,
                },
                protein: {
                    isOn: false,
                    value: null,
                },
                fat: {
                    isOn: false,
                    value: null,
                },
                calorie: {
                    isOn: false,
                    value: null,
                },
            },
        };

        this.searchValue = this.searchValue.bind(this);
        this.filterValue = this.filterValue.bind(this);
    }

    searchValue = (val) => {
        this.setState({ typed: val });
    };

    filterValue = ({ carb, protein, fat, calorie }) => {
        this.setState({
            nutrients: {
                carb,
                protein,
                fat,
                calorie,
            },
        });
    };

    render() {
        return (
            <div className={classes.Page}>
                <SearchBox search={(val) => this.searchValue(val)} />
                <Filters passNutrients={this.filterValue} />
                <FoodItems
                    queryVal={this.state.typed}
                    nutriVal={this.state.nutrients}
                />
            </div>
        );
    }
}

export default Page;
