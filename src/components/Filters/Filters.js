import React, { Component } from "react";
import "../../tailwind.generated.css";

import Filter from "./Filter/Filter";

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carb: {
                isOn: false,
                value: null,
            },
            protein: {
                isOn: false,
                value: null,
            },
            calorie: {
                isOn: false,
                value: null,
            },
            fat: {
                isOn: false,
                value: null,
            },
        };

        this.updateCarb = this.updateCarb.bind(this);
        this.updateProtein = this.updateProtein.bind(this);
        this.updateCalorie = this.updateCalorie.bind(this);
        this.updateFat = this.updateFat.bind(this);
    }

    updateCarb(value, isOn) {
        this.setState(
            {
                carb: { isOn, value },
            },
            () => {
                this.props.passNutrients(this.state);
            }
        );
    }

    updateProtein(value, isOn) {
        this.setState(
            {
                protein: { isOn, value },
            },
            () => {
                this.props.passNutrients(this.state);
            }
        );
    }

    updateCalorie(value, isOn) {
        this.setState(
            {
                calorie: { isOn, value },
            },
            () => {
                this.props.passNutrients(this.state);
            }
        );
    }

    updateFat(value, isOn) {
        this.setState(
            {
                fat: { isOn, value },
            },
            () => {
                this.props.passNutrients(this.state);
            }
        );
    }

    render() {
        return (
            <div className="container mx-auto px-32 md:px-16 sm:px-8">
                <div className="mx-auto rounded-lg mb-8 p-8 bg-gray-200 h-auto w-full flex md:flex-row md:flex-col">
                    <div className="w-full px-4 sm:px-2 md:py-0">
                        <Filter
                            updateHandler={this.updateCarb}
                            nutrient="Carbohydrates"
                        />
                        <Filter
                            updateHandler={this.updateProtein}
                            nutrient="Proteins"
                        />
                    </div>
                    <div className="w-full px-4 sm:px-2 md:py-0">
                        <Filter
                            updateHandler={this.updateCalorie}
                            nutrient="Calories"
                        />
                        <Filter
                            updateHandler={this.updateFat}
                            nutrient="Fats"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;
