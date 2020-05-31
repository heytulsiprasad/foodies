import React, { useState, Fragment } from "react";
import SearchBox from "../SearchBox/SearchBox";
import SearchBtn from "../Buttons/SearchBtn";
import Dropdowns from "../Dropdowns/Dropdowns";

function SearchBar(props) {
    const [search, setSearch] = useState(null);
    const [searchActive, setSearchActive] = useState(null);
    const [filters, setFilters] = useState({
        category: null,
        area: null,
    });

    const getSearchValue = (val) => {
        setSearch(val);
        setSearchActive(val);

        setFilters({
            category: null,
            area: null,
        });
    };

    const getFilterValue = (cat, area) => {
        setFilters({
            category: cat,
            area: area,
        });
        setSearch(null);
        setSearchActive(null);
    };

    return (
        <Fragment>
            <div className="flex flex-row w-full md:px-16 sm:flex-col justify-center mt-16 mb-8">
                <SearchBox search={getSearchValue} active={searchActive} />
                <SearchBtn searchVal={search} filterVal={filters} />
            </div>
            <div>
                <Dropdowns filters={getFilterValue} active={filters} />
            </div>
        </Fragment>
    );
}

export default SearchBar;
