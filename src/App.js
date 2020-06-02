import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ThemeContext from "./context/ThemeContext/ThemeContext";
import FoodProvider from "./context/FoodContext/FoodProvider";
import Page from "./containers/Page/Page";
import Recipes from "./containers/Recipes/Recipes";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import "./tailwind.generated.css";

function App() {
    const context = useContext(ThemeContext);

    return (
        <div
            className={[
                `theme-${context.theme}`,
                "container main bg-background-secondary",
            ].join(" ")}
        >
            <Router>
                <FoodProvider>
                    <Switch>
                        <Route path="/" exact component={Page} />
                        <Route path="/food/:id" component={Recipes} />
                        <Route component={PageNotFound} />
                    </Switch>
                </FoodProvider>
            </Router>
        </div>
    );
}

export default App;
