import React, { Component } from "react";

import Card from "./Card/Card";
import classes from "./Cards.module.css";
import FoodContext from "../../context/FoodContext";

class Cards extends Component {
    render() {
        let foods;

        if (this.context.meals === null || this.context.meals === undefined) {
            console.log("Context is empty!");
            foods = "Nothing to display! 👀";
        } else {
            foods = this.context.meals.map((food) => {
                let tags = ["Yummy"];
                if (food.strTags !== undefined && food.strTags !== null) {
                    if (food.strTags.includes(",")) {
                        tags = food.strTags.split(",");
                    } else {
                        tags = [food.strTags];
                    }
                }

                return (
                    <Card
                        key={food.idMeal}
                        id={food.idMeal}
                        title={food.strMeal}
                        category={food.strCategory}
                        area={food.strArea}
                        thumb={food.strMealThumb}
                        tags={tags}
                    />
                );
            });
        }
        return (
            <div className={[classes.Cards, "sm:gap-10"].join(" ")}>
                {foods}
            </div>
        );
    }
}

Cards.contextType = FoodContext;

export default Cards;
