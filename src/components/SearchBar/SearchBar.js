import React, { useState, Fragment } from "react";
import SearchBox from "../SearchBox/SearchBox";
import SearchBtn from "../Buttons/SearchBtn";
import Dropdowns from "../Dropdowns/Dropdowns";

function SearchBar(props) {
    const [search, setSearch] = useState(null);
    const [filters, setFilters] = useState({
        category: null,
        area: null,
    });

    const getSearchValue = (val) => {
        setSearch(val);
    };

    const getFilterValue = (cat, area) => {
        setFilters({
            category: cat,
            area: area,
        });
    };

    return (
        <Fragment>
            <div className="flex flex-row w-full md:px-16 sm:flex-col justify-center mt-16 mb-8">
                <SearchBox search={getSearchValue} />
                <SearchBtn searchVal={search} filters={filters} />
            </div>
            <div>
                <Dropdowns filters={getFilterValue} />
            </div>
        </Fragment>
    );
}

export default SearchBar;
