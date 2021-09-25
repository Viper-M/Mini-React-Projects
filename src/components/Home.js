import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Mini React Projects</h2>
                <Link to="/Counter-App">Counter App</Link>
                <Link to="/Visibility-Toggle">Visibility Toggle</Link>
            </div>
        );
    }
}