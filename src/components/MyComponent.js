// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name:'Viet',
        address: 'Hanoi',
        age: 26
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and im from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;