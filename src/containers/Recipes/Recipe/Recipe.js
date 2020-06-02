import React, { useState, useEffect, Fragment, useContext } from "react";
import axios from "axios";

import classes from "./Recipe.module.css";
import Table from "../Table/Table";
import ThemeContext from "../../../context/ThemeContext/ThemeContext";

function Recipe(props) {
    const context = useContext(ThemeContext);

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

    let theme;

    if (context.theme === "light") {
        theme = "#212832";
    } else {
        theme = "#FFF";
    }

    let food;

    if (loading) {
        food = (
            <div className={props.expand}>
                <div
                    style={{ color: theme }}
                    className={[
                        classes.LaSquareSpin,
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
            return item !== "" && item !== null;
        });

        let amt = [];
        for (let i = 1; i <= 20; i++) {
            amt.push(recipe[`strMeasure${i}`]);
        }
        amt = amt.filter((item) => {
            return item !== "" && item !== null;
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
                                    className={[
                                        classes.Image,
                                        "shadow-xl",
                                    ].join(" ")}
                                    alt="foodies"
                                />
                            </a>
                        </div>
                        <div className="container">
                            <h1 className="text-6xl text-copy-primary lg:text-center leading-tight mb-2 pl-6 py-2">
                                {recipe.strMeal}
                            </h1>
                            <div className="container lg:mx-auto pl-6 py-1 w-5/6">
                                <Table ingredients={ingredients} />
                            </div>
                        </div>
                    </div>
                    <div className="container px-6 mt-6 mb-12">
                        <h1 className="text-4xl text-copy-primary text-center font-bold py-2">
                            How to Cook this?{" "}
                            <span role="img" aria-label="icon">
                                😋
                            </span>
                        </h1>
                        <p className="text-lg text-copy-white text-gray-800 text-justify sm:text-left px-12 md:px-4 sm:px-0 my-4 py-6">
                            {rules.join(".")}
                        </p>
                    </div>
                    {video ? (
                        <div
                            className={[
                                classes.VideoContainer,
                                "mx-auto shadow-2xl",
                            ].join(" ")}
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
