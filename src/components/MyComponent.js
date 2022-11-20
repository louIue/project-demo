import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUser from "./AddUser";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Viet", age: "18" },
            { id: 2, name: "Louie", age: "19" },
            { id: 3, name: "Quoc Viet", age: "17" },
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    render() {
        return (
            <div>
                <AddUser
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /><br />
                <DisplayInfo
                    listUser={this.state.listUser}
                />
            </div>
        );
    }
}

export default MyComponent;