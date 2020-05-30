import React, { Component } from 'react'
import SearchBox from "../SearchBox/SearchBox";
import SearchBtn from "../Buttons/SearchBtn";

class SearchBar extends Component {
    render() {
        return (
            <div className="flex flex-row w-full md:px-16 sm:flex-col justify-center my-16">
                <SearchBox />
                <SearchBtn />
            </div>
        )
    }
}

export default SearchBar;
