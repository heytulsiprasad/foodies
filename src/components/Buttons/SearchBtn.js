import React, { Component } from "react";
import axios from "axios";

import FoodContext from "../../context/FoodContext/FoodContext";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

class ContainedButtons extends Component {
    constructor(props) {
        super(props);
        // this.state = { meals: null };

        this.clickHandler = this.clickHandler.bind(this);
    }

    // This is where we'll do all the API Calls
    clickHandler = () => {
        // Runs when big blue search button is pressed
        let query = this.props.searchVal;

        if (query !== null) {
            this.context.updateLoading(true);

            axios
                .get(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
                )
                .then((res) => {
                    let meals = res.data.meals; // array of objects
                    this.setState({ meals: meals });
                    this.context.updateMeals({ meals: meals });
                    this.context.updateLoading(false);
                });
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.filterVal !== this.props.filterVal ||
            prevProps.isPressed !== this.props.isPressed
        ) {
            // Runs if enter is pressed after search
            if (this.props.isPressed) {
                this.clickHandler();
            }
            // Runs each time an item in dropdown is selected
            let cQuery = this.props.filterVal.category;
            let aQuery = this.props.filterVal.area;

            if (cQuery !== null) {
                this.context.updateLoading(true);
                axios
                    .get(
                        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cQuery}`
                    )
                    .then((res) => {
                        this.setState({
                            meals: res.data.meals,
                        });
                        this.context.updateMeals({
                            meals: res.data.meals,
                        });
                        this.context.updateLoading(false);
                    });
            } else if (aQuery !== null) {
                this.context.updateLoading(true);
                axios
                    .get(
                        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${aQuery}`
                    )
                    .then((res) => {
                        this.setState({ meals: res.data.meals });
                        this.context.updateMeals({ meals: res.data.meals });
                        this.context.updateLoading(false);
                    });
            }
        }
    }

    render() {
        return (
            <div className="mt-5 ml-2 sm:mx-auto">
                <Button
                    onClick={this.clickHandler}
                    variant="contained"
                    className="w-32 h-12 sm:w-48"
                    color="primary"
                >
                    <SearchIcon /> Search
                </Button>
            </div>
        );
    }
}

ContainedButtons.contextType = FoodContext;

export default ContainedButtons;
