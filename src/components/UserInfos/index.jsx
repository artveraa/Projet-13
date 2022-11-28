import React from 'react';
import {useSelector} from "react-redux";

import {getUserData} from "../../redux/actions/getUser.js";

function UserInfos() {
    const user = useSelector(state => state.getUser);




    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
        </div>
    )
}

export default UserInfos;