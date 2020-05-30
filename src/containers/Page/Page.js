import React, { Component } from "react";
import classes from "./Page.module.css";

import SearchBox from "../../components/SearchBox/SearchBox";
import Dropdowns from "../../components/Dropdowns/Dropdowns";


class Page extends Component {
    render() {
        return (
            <div>
                <SearchBox search={(val) => this.searchValue(val)} />
                <Dropdowns />
            </div>
        );
    }
}

export default Page;
