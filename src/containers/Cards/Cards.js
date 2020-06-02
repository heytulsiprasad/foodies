import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Card from "./Card/Card";
import classes from "./Cards.module.css";
import FoodContext from "../../context/FoodContext/FoodContext";
import ThemeContext from "../../context/ThemeContext/ThemeContext";

function Cards() {
    const context = useContext(FoodContext);
    const theme = useContext(ThemeContext);

    let loader;
    if (theme.theme === "light") {
        loader = "#212832";
    } else {
        loader = "#FFF";
    }

    let foods;

    if (context.meals === null || context.meals === undefined) {
        foods = (
            <p className="text-copy-primary sm:mx-auto">
                Nothing to display{" "}
                <span role="img" aria-label="emoji">
                    👀
                </span>
            </p>
        );
    } else {
        foods = context.meals.map((food) => {
            let tags = ["Yummy"];
            if (food.strTags !== undefined && food.strTags !== null) {
                if (food.strTags.includes(",")) {
                    tags = food.strTags.split(",");
                } else {
                    tags = [food.strTags];
                }
            }

            return (
                <Link key={food.idMeal} to={`/food/${food.idMeal}`}>
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

    if (context.isLoading === true) {
        foods = (
            <div
                style={{ color: loader }}
                className={[classes.LaSquareSpin, classes.La2x, "mx-auto"].join(
                    " "
                )}
            >
                <div></div>
            </div>
        );
    }

    return (
        <div className={[classes.Cards, "sm:gap-10"].join(" ")}>{foods}</div>
    );
}

export default Cards;
