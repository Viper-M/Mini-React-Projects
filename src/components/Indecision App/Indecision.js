import React from "react";
import Header from "./Header";
import Decision from "./Decision";
import Options from "./Options";

export default class Indecision extends React.Component {
    render() {
        const title = "Indecision App";
        const subtitle = "Put your decisions in hands of a Computer"
        const options = ['React','Node', 'Docker'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Decision />
                <Options options={options} />
            </div>
        );
    }
}