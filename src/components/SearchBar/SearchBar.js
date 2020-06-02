import React, { useState, Fragment } from "react";
import SearchBox from "../SearchBox/SearchBox";
import SearchBtn from "../Buttons/SearchBtn";
import Dropdowns from "../Dropdowns/Dropdowns";

//////////////////// This includes the search box and its button

function SearchBar(props) {
    const [search, setSearch] = useState(null);
    const [searchActive, setSearchActive] = useState(null);
    const [filters, setFilters] = useState({
        category: null,
        area: null,
    });
    const [isPressed, setIsPressed] = useState(false);

    const getSearchValue = (val) => {
        setSearch(val);
        setSearchActive(val);

        setFilters({
            category: null,
            area: null,
        });
        setIsPressed(false);
    };

    const getFilterValue = (cat, area) => {
        setFilters({
            category: cat,
            area: area,
        });
        setSearch(null);
        setSearchActive(null);
        setIsPressed(false);
    };

    const formPressedSubmit = () => {
        setIsPressed(true);
    };

    return (
        <Fragment>
            <div className="flex flex-row w-full md:px-16 sm:flex-col justify-center mt-16 mb-8">
                <SearchBox
                    search={getSearchValue}
                    isPressed={formPressedSubmit}
                    active={searchActive}
                />
                <SearchBtn
                    isPressed={isPressed}
                    searchVal={search}
                    filterVal={filters}
                />
            </div>
            <div>
                <Dropdowns filters={getFilterValue} active={filters} />
            </div>
        </Fragment>
    );
}

export default SearchBar;
