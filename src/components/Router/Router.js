import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home";
import Counter from "../Counter App/Counter";
import Visibility from "../Visibility Toggle/Visibility"
import Indecision from "../Indecision App/Indecision";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={Home} exact={true}>
                </Route>
                <Route path="/Counter-App" component={Counter}>
                </Route>
                <Route path="/Visibility-Toggle" component={Visibility}>
                </Route>
                <Route path="/Indecision-App" component={Indecision}>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default Router