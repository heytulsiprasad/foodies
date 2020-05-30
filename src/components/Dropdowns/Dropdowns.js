import React, { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";

class Dropdowns extends Component {
    render() {
        return (
            <div className="flex flex-row pb-8 w-10/12 sm:flex-col sm:text-center mx-auto justify-around sm:justify-between">
                <Dropdown category="Categories" />
                <Dropdown category="Areas" spacing="sm:mt-6" />
            </div>
        );
    }
}

export default Dropdowns;
