import React, { Component } from "react";
import classes from "./Page.module.css";

import SearchBox from "../../components/SearchBox/SearchBox";
import Filters from "../../components/Filters/Filters";

class Page extends Component {
    render() {
        return (
            <div className={classes.Page}>
                <SearchBox />
                <Filters />
            </div>
        );
    }
}

export default Page;
