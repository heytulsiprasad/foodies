import React, { Component } from "react";
import classes from "./Page.module.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import Dropdowns from "../../components/Dropdowns/Dropdowns";

class Page extends Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

export default Page;
