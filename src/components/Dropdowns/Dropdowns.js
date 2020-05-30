import React, { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";

class Dropdowns extends Component {
    render() {
        return (
            <div className="flex flex-row pb-8 w-10/12 mx-auto justify-around">
                <Dropdown category="Categories" />
                <Dropdown category="Areas" />
            </div>
        );
    }
}

export default Dropdowns;
