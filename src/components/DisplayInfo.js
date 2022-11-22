import React, { useState } from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg'

// class DisplayInfo extends React.Component {

//     render() {
//         const { listUser } = this.props;
//         return (
//             <div className='display-info-container'>
//                 {true &&
//                     <>
//                         {listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         My name {user.name}
//                                         <br />
//                                         My age {user.age}
//                                         <hr />
//                                     </div>
//                                     <div>
//                                         <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    return (
        <div className='display-info-container'>
            <div>
                <span onClick={()=>handleShowHideListUser()}>
                    {isShowHideListUser===true?"hide list user":"show list user"}
                </span>
            </div>
            {isShowHideListUser &&
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
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfo;