import React from "react";

import Card from "./Card/Card";
import classes from "./Cards.module.css";

function Cards(props) {
    return (
        <div className={classes.Cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Cards;
