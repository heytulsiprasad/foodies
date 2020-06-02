import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import { Link } from "react-router-dom";

import "../../tailwind.generated.css";

function NavBar() {
    return (
        <nav className="bg-background-tertiary text-copy-primary px-12 flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center  hover:text-copy-secondary flex-shrink-0 text-white mr-6">
                <Link to="/">
                    <span
                        className="inline-block relative"
                        style={{ top: "-4px" }}
                    >
                        <FastfoodIcon />
                    </span>
                    <span className="font-semibold ml-2 text-xl tracking-tight">
                        Foodies
                    </span>
                </Link>
            </div>
            <div className="sm:block flex-grow flex items-center w-auto">
                <div className="text-md flex-grow text-right">
                    <Link
                        to="/"
                        className="block hover:text-copy-secondary inline-block xl:mt-0 text-teal-200 hover:text-white"
                    >
                        <span className="mr-1">
                            <Brightness5Icon />
                        </span>
                        Dark Mode
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
