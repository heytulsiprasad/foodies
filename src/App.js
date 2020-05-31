import React from "react";

import FoodProvider from "./context/FoodProvider";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Page from "./containers/Page/Page";
import Footer from "./components/Footer/Footer";

import "./tailwind.generated.css";
import classes from "./App.module.css";

function App() {
    return (
        <FoodProvider>
            <div className={classes.Home}>
                <NavBar />
                <Hero />
            </div>
            <Page />
            <Footer />
        </FoodProvider>
    );
}
export default App;
