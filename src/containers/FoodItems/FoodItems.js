import React, { Component } from "react";
import api from "../../api";

import FoodItem from "./FoodItem/FoodItem";
import classes from "./FoodItems.module.css";

class FoodItems extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
            foodItems: [],
        };
    }

    // componentDidUpdate() {
    //     async function callAPI() {
    //         // Fetch data from API and load it in state
    //         const apiKey = "6b42ea9d2aa945d4890323978a300b93";
    //         const o = {
    //             typed: "Pizza",
    //             nutrients: {
    //                 carb: 20,
    //                 protein: 40,
    //                 fat: 60,
    //                 calorie: 80,
    //             },
    //         };

    //         let foods = await (
    //             await api.get(
    //                 `/complexSearch?apiKey=${apiKey}&query=${o.typed}&maxCarbs=${o.nutrients.carb}&maxFats=${o.nutrients.fat}`
    //             )
    //         ).data;

    //         console.log(foods);

    //         return foods.results;
    //     }

    //     const foodData = callAPI();
    //     this.setState({ foodItems: foodData });
    // }

    render() {
        let items = null;
        let results = this.state.foodItems;

        if (results.length > 0) {
            items = results.map((item) => {
                let nuts = null;

                if (item.nutrients.length > 0) {
                    nuts = item.nutrients.map((i) => {
                        return {
                            name: i.name,
                            amount: i.amount + i.unit,
                        };
                    });
                }

                return (
                    <FoodItem
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        nutriVal={nuts}
                    />
                );
            });
        }

        return <div className={classes.FoodItems}>{items}</div>;
    }
}

export default FoodItems;
