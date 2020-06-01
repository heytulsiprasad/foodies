import React, { Component, Fragment } from "react";

import classes from "./Page.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

class Page extends Component {
    render() {
        return (
            <Fragment>
                <div className={classes.Home}>
                    <NavBar />
                    <Hero />
                </div>
                <SearchBar />
                <Cards />
                <Footer />
            </Fragment>
        );
    }
}

export default Page;
