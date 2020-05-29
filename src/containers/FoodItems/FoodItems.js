import React, { Component } from "react";
import api from "../../api";

import FoodItem from "./FoodItem/FoodItem";
import classes from "./FoodItems.module.css";

class FoodItems extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        // Fetch data from API and load it in state
        async function callAPI(foodName, carb, protein, fat, calorie) {
            const apiKey = "6b42ea9d2aa945d4890323978a300b93";

            let foods = await (
                await api.get(
                    `/complexSearch?apiKey=${apiKey}&query=${foodName}`
                )
            ).data;

            let imgBase = await foods.baseUri;
            let foodItems = await foods.results;

            console.log(foods);
        }

        let {
            carb = 100,
            protein = 100,
            fat = 100,
            calorie = 100,
        } = this.props.nutriVal;

        // callAPI("burger", carb, protein, fat, calorie);
        // callAPI("Rava Idli");
    }

    render() {
        return (
            <div className={classes.FoodItems}>
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </div>
        );
    }
}

export default FoodItems;
