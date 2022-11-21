import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUser from "./AddUser";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Viet", age: "18" },
            { id: 2, name: "Louie", age: "19" },
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUser
        listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUser: listUserClone
        })
    }

    render() {
        return (
            <>
                <div>
                    <AddUser
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /><br />
                    <DisplayInfo
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div>

                </div>
            </>
        );
    }
}

export default MyComponent;