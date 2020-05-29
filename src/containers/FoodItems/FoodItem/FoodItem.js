import React from "react";

function FoodItem(props) {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
            <img
                className="w-full"
                src={props.image}
                alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <div className="text-left">
                    <p className="">Carbohydrates: 12g</p>
                    <p className="">Proteins: 23g</p>
                    <p className="">Calories: 46g</p>
                    <p className="">Fat: 72g</p>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;
