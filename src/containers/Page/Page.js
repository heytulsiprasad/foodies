import React, { Component, Fragment } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../Cards/Cards";

class Page extends Component {
    render() {
        return (
            <Fragment>
                <SearchBar />
                <Cards />
            </Fragment>
        );
    }
}

export default Page;
