// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Viet',
        address: 'Hanoi',
        age: 26
    };

    handleClick(event) {
        console.log(event)
    }

    handleOnMouseOver(event){
        console.log(event)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and im from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;