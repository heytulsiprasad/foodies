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
                carb: 50,
                protein: 50,
                fat: 50,
                calorie: 50,
            },
        };

        this.searchValue = (val) => {
            this.setState({ typed: val });
        };

        this.filterValue = (carb, protein, fat, calorie) => {
            this.setState({
                nutrients: {
                    carb,
                    protein,
                    fat,
                    calorie,
                },
            });
        };
    }

    render() {
        return (
            <div className={classes.Page}>
                <SearchBox search={(val) => this.searchValue(val)} />
                <Filters
                    nutrients={(carb, protein, fat, calorie) =>
                        this.filterValue(carb, protein, fat, calorie)
                    }
                />
                <FoodItems
                    queryVal={this.state.typed}
                    nutriVal={this.state.nutrients}
                />
            </div>
        );
    }
}

export default Page;
