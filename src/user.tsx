import React from "react"
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { changeName, IUser, IUserState, userInfo } from "./features/user-redux/userSlice";
import { IUserContextData, UserContextData } from "./features/user-context/userContext";


function UserView() {

    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector<RootState, IUser>(userInfo);

    //const { user, setUser } = useContext(UserContextData)!;

    console.log('User View rendered');

    return (<React.Fragment>
        <input type="text" onChange={(e) => {
            //setUser({ ...user, name: e.currentTarget.value });
            dispatch(changeName({ ...user, name: e.currentTarget.value }));
        }} ></input>
    </React.Fragment>
    );
}

export default React.memo(UserView);