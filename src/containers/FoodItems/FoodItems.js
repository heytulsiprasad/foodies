import React, { Component } from "react";
import api from "../../api";

import FoodItem from "./FoodItem/FoodItem";
import classes from "./FoodItems.module.css";

class FoodItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    static getDerivedStateFromProps(props, state) {
        // Getting values as props returned from Page
        let { carb, protein, fat, calorie } = props.nutriVal;
        let query = props.queryVal;

        // Setting values to our state
        return {
            typed: query,
            nutrients: {
                carb,
                protein,
                fat,
                calorie,
            },
        };
    }

    render() {
        return <h1>Loaded</h1>;
    }
}

export default FoodItems;
