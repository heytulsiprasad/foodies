import React from "react";
import image from "../../../assets/Foody.jpg";
import classes from "./Card.module.css";

function Card() {
    return (
        <div className={classes.Card}>
            <div className="mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg">
                <img
                    className="w-full"
                    src={image}
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        The Coldest Sunset
                    </div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #travel
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;
