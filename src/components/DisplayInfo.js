import React from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg'
class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        const { listUser } = this.props;
        return (
            <div className='display-info-container'>
                <img src={logo} />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        My name {user.name}
                                        <br />
                                        My age {user.age}
                                        <hr />
                                    </div>
                                    <div>
                                        <button onClick={()=>{this.props.handleDeleteUser(user.id)}}>Delete</button>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfo;