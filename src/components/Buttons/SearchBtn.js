import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

class ContainedButtons extends Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (e) => {
        console.dir(e.target);
    };

    render() {
        return (
            <div className="mt-5 ml-2 sm:mx-auto">
                <Button
                    onClick={(e) => this.clickHandler(e)}
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
