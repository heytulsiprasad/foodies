import React, { Component } from "react";
import FoodContext from "./FoodContext";

// This context provider is passed to any component requiring the context
class FoodProvider extends Component {
    constructor(props) {
        super(props);
        this.updateMeals = this.updateMeals.bind(this);
        this.updateLoading = this.updateLoading.bind(this);

        this.state = {
            meals: null,
            isLoading: false,
            updateLoading: this.updateLoading,
            updateMeals: this.updateMeals,
        };
    }

    updateMeals(val) {
        this.setState(val);
    }

    updateLoading(val) {
        this.setState({ isLoading: val });
    }

    render() {
        return (
            <FoodContext.Provider value={this.state}>
                {this.props.children}
            </FoodContext.Provider>
        );
    }
}

export default FoodProvider;
