import React from "react";

export default class Counter extends React.Component {
    constructor(props){
        super(props),
        this.visibilityToggle = this.visibilityToggle.bind(this),
        this.state = {
            visibility: false
        }
    }
    visibilityToggle(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility: {this.state.visibility}</h1>
                {!this.state.visibility ? <button onClick={this.visibilityToggle}>Show Details</button> : <button onClick={this.visibilityToggle}>Hide Details</button>}
                {this.state.visibility && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque magnam laborum id est animi, atque doloribus voluptate eos magni modi sint, voluptates sit eum at. Sunt suscipit distinctio quaerat nobis? Porro neque cupiditate, quia dicta non iste sit sapiente nam quasi debitis, in recusandae inventore. Similique porro explicabo beatae?</p>}
            </div>
        );
    }
}