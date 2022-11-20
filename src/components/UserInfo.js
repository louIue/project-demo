import React from "react";

class UserInfo extends React.Component {

    state = {
        name: 'Viet',
        address: 'Hanoi',
        age: 18
    };

    handleOnchangeInput = (event) => {
        this.setState({
            name:event.target.value 
        })
    }

    handleOnchangeAge = (event) => {
        this.setState({
            age:event.target.value 
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
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnchangeInput(event)}
                    />
                    <button>submit</button>

                    <label>your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;