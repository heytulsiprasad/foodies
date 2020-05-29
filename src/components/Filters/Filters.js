import React, { Component } from "react";
import "../../tailwind.generated.css";

import Filter from "./Filter/Filter";

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carb: 50,
            protein: 50,
            calorie: 50,
            fat: 50,
        };

        this.passAbove = () => {
            let { carb, protein, fat, calorie } = this.state;
            this.props.nutrients(carb, protein, fat, calorie);
        };

        this.updateCarb = (value) => {
            this.setState({ carb: value });
            this.passAbove();
        };

        this.updateProtein = (value) => {
            this.setState({ protein: value });
            this.passAbove();
        };

        this.updateCalorie = (value) => {
            this.setState({ calorie: value });
            this.passAbove();
        };

        this.updateFat = (value) => {
            this.setState({ fat: value });
            this.passAbove();
        };
    }

    render() {
        return (
            <div className="container mx-auto px-32 md:px-16 sm:px-8">
                <div className="mx-auto rounded-lg mb-8 p-8 bg-gray-200 h-auto w-full flex md:flex-row md:flex-col">
                    <div className="w-full px-4 sm:px-2 md:py-0">
                        <Filter
                            handler={this.updateCarb}
                            nutrient="Carbohydrates"
                        />
                        <Filter
                            handler={this.updateProtein}
                            nutrient="Proteins"
                        />
                    </div>
                    <div className="w-full px-4 sm:px-2 md:py-0">
                        <Filter
                            handler={this.updateCalorie}
                            nutrient="Calories"
                        />
                        <Filter handler={this.updateFat} nutrient="Fats" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;
