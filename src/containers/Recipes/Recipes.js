import React from "react";

import classes from "./Recipes.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Recipe from "./Recipe/Recipe";

const Recipes = (props) => {
    return (
        <div className={classes.Recipe}>
            <NavBar />
            <Recipe expand={classes.Expand} id={props.match.params.id} />
            <Footer />
        </div>
    );
};

export default Recipes;
