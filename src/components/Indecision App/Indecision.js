import React from "react";


export default class Counter extends React.Component {
    constructor(props){
        super(props),
        this.plusone = this.plusone.bind(this),
        this.minusone = this.minusone.bind(this),
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0
        }
    }
    plusone(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    minusone(){
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        })
    }
    reset(){
        this.setState((prevState)=>{
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusone}>+1</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.minusone}>-1</button>
            </div>
        );
    }
}