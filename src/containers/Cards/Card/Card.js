import React from "react";
import classes from "./Card.module.css";

function Card(props) {
    return (
        <div className={classes.Card}>
            <div className="mx-auto bg-background-primary max-w-sm rounded-lg overflow-hidden shadow-lg">
                <img className="w-full" src={props.thumb} alt={props.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-copy-primary">
                        {props.title}
                    </div>
                    <p className="text-copy-secondary text-base">
                        Hi! I belong to {props.category} Category and I am from{" "}
                        {props.area} Region!
                    </p>
                </div>
                <div className="px-6 py-4">
                    {props.tags.map((tag, index) => {
                        return (
                            <span
                                key={index}
                                className="inline-block text-copy-primary mt-1 bg-background-tertiary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                            >
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Card;
