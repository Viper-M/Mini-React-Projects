import React from "react";
import Option from "./Option";

export default class Options extends React.Component {
    render() {
        return(
            <div>
            <h3>Your Options</h3>
            <button>Remove All</button>
        {this.props.options.map((option)=>{
            return <Option option={option}/>
        })}
            </div>
        );
    }
}