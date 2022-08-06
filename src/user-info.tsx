import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { IUser, IUserState, userInfo } from './features/user-redux/userSlice';
import { UserContextData } from "./features/user-context/userContext";

function UserInfoView() {

    const user = useSelector<RootState, IUser>(userInfo);
    //const { user } = useContext(UserContextData)!;

    console.log('User Info  view rendered');

    return (<React.Fragment>
        <label>{user.name}</label>
    </React.Fragment>);
}

export default React.memo(UserInfoView);