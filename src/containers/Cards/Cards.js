import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "./Card/Card";
import classes from "./Cards.module.css";
import FoodContext from "../../context/FoodContext";

class Cards extends Component {
    render() {
        let foods;

        if (this.context.meals === null || this.context.meals === undefined) {
            foods = "👀";
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
                    <Link key={food.idMeal} to={`/${food.idMeal}`}>
                        <Card
                            title={food.strMeal}
                            category={food.strCategory}
                            area={food.strArea}
                            thumb={food.strMealThumb}
                            tags={tags}
                        />
                    </Link>
                );
            });
        }

        if (this.context.isLoading === true) {
            foods = (
                <div
                    className={[
                        classes.LaSquareSpin,
                        classes.LaDark,
                        classes.La2x,
                        "mx-auto",
                    ].join(" ")}
                >
                    <div></div>
                </div>
            );
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
