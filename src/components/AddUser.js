import React from "react";

class AddUser extends React.Component {

    state = {
        name: '',
        age: ''
    };

    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
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
                        onChange={(event) => this.handleOnchangeName(event)}
                    />
                    <br/>
                    <label>your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                    />
                    <br/>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddUser;