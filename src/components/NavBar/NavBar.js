import React from "react";
import "../../tailwind.generated.css";

function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg
                    className="fill-current h-8 w-8 mr-2"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                </svg>
                <span className="font-semibold text-xl tracking-tight">
                    Foodies
                </span>
            </div>
            <div className="sm:block flex-grow flex items-center w-auto">
                <div className="text-md flex-grow text-right">
                    <a
                        href="#responsive-header"
                        className="block inline-block xl:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Eat
                    </a>
                    <a
                        href="#responsive-header"
                        className="block inline-block xl:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Sleep
                    </a>
                    <a
                        href="#responsive-header"
                        className="block inline-block xl:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Repeat
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
