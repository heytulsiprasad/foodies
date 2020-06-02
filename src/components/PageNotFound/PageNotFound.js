import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import NotFound from "../../assets/NotFound.svg";

function PageNotFound() {
    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
            }}
        >
            <NavBar />
            <div
                className="container flex flex-col justify-around"
                style={{ flexGrow: "1" }}
            >
                <img
                    className="mx-auto md:w-2/3 sm:w-3/4 w-1/2 h-3/4"
                    src={NotFound}
                    alt="Page-Not-Found"
                />
                <h1 className="mx-auto">Page Not Found </h1>
            </div>
            <Footer />
        </div>
    );
}

export default PageNotFound;
