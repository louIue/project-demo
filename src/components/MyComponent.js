// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Viet',
        address: 'Hanoi',
        age: 18
    };

    handleClick = (event) => {
        console.log("click my button");

        this.setState({
            name: 'Louie',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and im {this.state.age}
                <button>Hover me</button>
                <button onClick={(event) => { this.handleClick({ event }) }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;