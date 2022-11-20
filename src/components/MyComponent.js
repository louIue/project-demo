// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Viet',
        address: 'Hanoi',
        age: 18
    };

    handleOnchange = (event) => {
        this.setState({
            name:event.target.value 
        })
    }

    handleOnSubmit =(event)=>{
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and im {this.state.age}
                <form onSubmit={()=>handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnchange(event)}
                    />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;