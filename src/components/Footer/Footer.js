import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="bg-background-tertiary flex flex-row justify-between bg-gray-800 h-32">
            <div className="container flex flex-col justify-center ml-12">
                <p className="text-gray-100 text-sm mb-1">Powered by MealDB</p>
                <p className="text-gray-500 text-lg">Proudly built with ⚛</p>
            </div>
            <div className="container flex flex-col justify-center mr-12 text-right text-gray-500 text-lg">
                <p className="text-sm text-white mb-1">
                    <FontAwesomeIcon icon={faCode} size="1x" /> by Tulsi Prasad
                </p>
                <p>
                    Made possible by
                    <span className="text-gray-400 mx-2">
                        <FontAwesomeIcon icon={faCoffee} size="1x" />
                    </span>
                    and
                    <span className="text-gray-400 ml-2">
                        <FontAwesomeIcon icon={faHeart} size="1x" />
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
