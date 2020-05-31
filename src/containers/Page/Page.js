import React, { Component } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../Cards/Cards";

class Page extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Cards />
            </div>
        );
    }
}

export default Page;
