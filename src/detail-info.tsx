import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { detailInformation, IUserDetail } from "./features/user-redux/userSlice";
import { UserContextData } from "./features/user-context/userContext";
import { UserDetailContext } from "./features/user-context/userDetailContext";

function UserDetailInfoView() {

    const userDetail = useSelector<RootState, IUserDetail>(detailInformation);

    //const { userDetail } = useContext(UserDetailContext)!;

    console.log(`Detail information rendered`);

    return <React.Fragment>
        {`Bu bir deneme işlemidir`} <br />
        <label>{userDetail.age}</label><br />
        <label>{userDetail.country}</label>
    </React.Fragment>
}

export default React.memo(UserDetailInfoView);
