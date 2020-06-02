import React, { useContext } from "react";

import FoodContext from "../../context/FoodContext";
import classes from "./Recipes.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Recipe from "./Recipe/Recipe";

const Recipes = (props) => {
    const context = useContext(FoodContext);

    return (
        <div className={[classes.Recipe, `theme-${context.theme}`].join(" ")}>
            <NavBar />
            <Recipe expand={classes.Expand} id={props.match.params.id} />
            <Footer />
        </div>
    );
};

export default Recipes;
