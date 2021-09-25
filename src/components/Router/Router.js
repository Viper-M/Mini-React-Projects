import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home";
import Counter from "../Counter App/Counter";
import Visibility from "../Visibility Toggle/Visibility"

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={Home} exact={true}>
                </Route>
                <Route path="/Counter-App" component={Counter} exact={true}>
                </Route>
                <Route path="/Visibility-Toggle" component={Visibility} exact={true}>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default Router