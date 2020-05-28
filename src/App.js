import React, { Fragment } from "react";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Page from "./containers/Page/Page";

import "./tailwind.generated.css";
import classes from "./App.module.css";

function App() {
    return (
        <Fragment>
            <div className={classes.Home}>
                <NavBar />
                <Hero />
            </div>
            <Page />
        </Fragment>
    );
}
export default App;