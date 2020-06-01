import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FoodProvider from "./context/FoodProvider";
import Page from "./containers/Page/Page";
import Recipes from "./containers/Recipes/Recipes";

import "./tailwind.generated.css";

function App() {
    return (
        <Router>
            <FoodProvider>
                <Switch>
                    <Route path="/new" component={Recipes} />
                    <Route path="/" component={Page} />
                </Switch>
            </FoodProvider>
        </Router>
    );
}
export default App;
