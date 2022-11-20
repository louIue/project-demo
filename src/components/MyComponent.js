import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo name="viet" age="18"/>
            </div>
        );
    }
}

export default MyComponent;