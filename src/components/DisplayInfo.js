import React from "react";

class DisplayInfo extends React.Component {
    render() {
        const { listUser } = this.props;
        return (
            <div>
                { listUser.map((user)=>{
                    return(
                        <div key={user.id}>
                            My name {user.name} 
                            My age {user.age}
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfo;