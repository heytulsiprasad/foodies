import React, { Component } from "react";
import FoodContext from "./FoodContext";

// This context provider is passed to any component requiring the context
class FoodProvider extends Component {
    constructor(props) {
        super(props);
        this.updateMeals = this.updateMeals.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
        this.updateTheme = this.updateTheme.bind(this);

        this.state = {
            theme: "light",
            meals: null,
            isLoading: false,
            updateTheme: this.updateTheme,
            updateLoading: this.updateLoading,
            updateMeals: this.updateMeals,
        };
    }

    updateMeals(val) {
        this.setState(val);
    }

    updateTheme(val) {
        this.setState({ theme: val });
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
