import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import classes from "./Recipe.module.css";
import Table from "../Table/Table";

function Recipe(props) {
    const [recipe, setRecipe] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("Hi useEffect");
        setLoading(true);
        getRecipe();
        // eslint-disable-next-line
    }, []);

    const getRecipe = () => {
        axios
            .get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`
            )
            .then((res) => {
                setRecipe(...res.data.meals);
                setLoading(false);
            });
    };

    // const res = {
    //     idMeal: "52901",
    //     strMeal: "Rock Cakes",
    //     strDrinkAlternate: null,
    //     strCategory: "Dessert",
    //     strArea: "British",
    //     strInstructions:
    //         "Preheat oven to 180C/350F/Gas 4 and line a baking tray with baking parchment.\r\nMix the flour, sugar and baking powder in a bowl and rub in the cubed butter until the mixture looks like breadcrumbs, then mix in the dried fruit.\r\nIn a clean bowl, beat the egg and milk together with the vanilla extract.\r\nAdd the egg mixture to the dry ingredients and stir with a spoon until the mixture just comes together as a thick, lumpy dough. Add a teaspoon more milk if you really need it to make the mixture stick together.\r\nPlace golfball-sized spoons of the mixture onto the prepared baking tray. Leave space between them as they will flatten and spread out to double their size during baking.\r\nBake for 15-20 minutes, until golden-brown. Remove from the oven, allow to cool for a couple of minutes then turn them out onto a wire rack to cool.",
    //     strMealThumb:
    //         "https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg",
    //     strTags: "Baking,Cake",
    //     strYoutube: "https://www.youtube.com/watch?v=tY3taZO3Aro",
    //     strIngredient1: "Self-raising Flour",
    //     strIngredient2: "Caster Sugar",
    //     strIngredient3: "Baking Powder",
    //     strIngredient4: "Butter",
    //     strIngredient5: "Dried Fruit",
    //     strIngredient6: "Eggs",
    //     strIngredient7: "Milk",
    //     strIngredient8: "Vanilla Extract",
    //     strIngredient9: "",
    //     strIngredient10: "",
    //     strIngredient11: "",
    //     strIngredient12: "",
    //     strIngredient13: "",
    //     strIngredient14: "",
    //     strIngredient15: "",
    //     strIngredient16: "",
    //     strIngredient17: "",
    //     strIngredient18: "",
    //     strIngredient19: "",
    //     strIngredient20: "",
    //     strMeasure1: "225g",
    //     strMeasure2: "75g",
    //     strMeasure3: "1 tsp ",
    //     strMeasure4: "125g",
    //     strMeasure5: "150g",
    //     strMeasure6: "1",
    //     strMeasure7: "1 tbs",
    //     strMeasure8: "2 tsp",
    //     strMeasure9: "",
    //     strMeasure10: "",
    //     strMeasure11: "",
    //     strMeasure12: "",
    //     strMeasure13: "",
    //     strMeasure14: "",
    //     strMeasure15: "",
    //     strMeasure16: "",
    //     strMeasure17: "",
    //     strMeasure18: "",
    //     strMeasure19: "",
    //     strMeasure20: "",
    //     strSource: "https://www.bbc.co.uk/food/recipes/rock_cakes_03094",
    //     dateModified: null,
    // };

    let food;

    if (loading) {
        food = (
            <div className={props.expand}>
                <div
                    className={[
                        classes.LaSquareSpin,
                        classes.LaDark,
                        classes.La2x,
                        "mx-auto mt-24",
                    ].join(" ")}
                >
                    <div></div>
                </div>
            </div>
        );
    } else if (recipe !== undefined) {
        let rules = recipe.strInstructions
            .split("/d*\\r\\n/g")[0]
            .split(".")
            .filter((i) => i !== "");
        // console.log(rules);

        let items = [];
        for (let i = 1; i <= 20; i++) {
            items.push(recipe[`strIngredient${i}`]);
        }
        items = items.filter((item) => {
            return item !== "";
        });

        let amt = [];
        for (let i = 1; i <= 20; i++) {
            amt.push(recipe[`strMeasure${i}`]);
        }
        amt = amt.filter((item) => {
            return item !== "";
        });

        let ingredients = [];
        items.forEach((item, index) => {
            let amount = amt[index];
            if (amount === " ") {
                amount = "As per taste";
            } else if (!isNaN(amount)) {
                amount += " piece(s)";
            }
            ingredients.push([`${item}`, `${amount}`]);
        });

        let video;

        if (recipe.strYoutube !== "") {
            video =
                "https://www.youtube.com/embed/" +
                recipe.strYoutube.split("=")[1];
        }

        food = (
            <div className={props.expand}>
                <div className="container p-12">
                    <div className="flex hero flex-row lg:flex-col mt-4 mb-8">
                        <div className="p-6 my-auto">
                            <a
                                href={
                                    recipe.strSource
                                        ? recipe.strSource
                                        : `/food/${recipe.idMeal}`
                                }
                            >
                                <img
                                    src={recipe.strMealThumb}
                                    className={classes.Image}
                                    alt="foodies"
                                />
                            </a>
                        </div>
                        <div className="container">
                            <h1 className="text-6xl lg:text-center pl-6 py-2">
                                {recipe.strMeal}
                            </h1>
                            <div className="container lg:mx-auto pl-6 py-1 w-5/6">
                                <Table ingredients={ingredients} />
                            </div>
                        </div>
                    </div>
                    <div className="container px-6 mt-6 mb-12">
                        <h1 className="text-4xl text-center font-bold py-2">
                            How to Cook this?
                        </h1>
                        <p className="text-lg text-gray-800 text-justify sm:text-left px-12 md:px-4 sm:px-0 my-4 py-6">
                            {rules.join(".")}
                        </p>
                    </div>
                    {video ? (
                        <div
                            className={[classes.VideoContainer, "mx-auto"].join(
                                " "
                            )}
                        >
                            <iframe
                                title={recipe.idMeal}
                                width="315"
                                height="560"
                                src={video}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }

    return <Fragment>{food}</Fragment>;
}

export default Recipe;
