import React, { Component } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

class ContainedButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.clickHandler = this.clickHandler.bind(this);
    }

    // This is where we'll do all the API Calls
    clickHandler = () => {
        console.log(this.props.searchVal);
        console.table(this.props.filterVal);
    };

    render() {
        return (
            <div className="mt-5 ml-2 sm:mx-auto">
                <Button
                    onClick={() => this.clickHandler()}
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

export default ContainedButtons;
