import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { changeDetailInfo, detailInformation, IUserDetail } from "./features/user-redux/userSlice";
import { UserContextData } from "./features/user-context/userContext";
import { UserDetailContext } from "./features/user-context/userDetailContext";

function UpdateDetailInfoView() {

    const dispatch = useDispatch<AppDispatch>();
    const detailInfo = useSelector<RootState, IUserDetail>(detailInformation);

    //const { userDetail, setUserDetail } = useContext(UserDetailContext)!;

    console.log(`Update detail rendered`);

    return <React.Fragment>
        <select name="age" id="age-select" onChange={(e) => {
            dispatch(changeDetailInfo({ age: Number(e.currentTarget.value), country: detailInfo.country }));
            //      setUserDetail({ ...userDetail, age: Number(e.currentTarget.value) });
        }} >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
        </select>
        <select name="country" id="country-select" onChange={(e) => {
            //setUserDetail({ ...userDetail, country: e.currentTarget.value });
            dispatch(changeDetailInfo({ age: detailInfo.age, country: e.currentTarget.value }));
        }} >
            <option value='Türkiye'>Türkiye</option>
            <option value='Almanya'>Almanya</option>
            <option value='İngiltere'>İngiltere</option>
        </select>
    </React.Fragment>

}

export default React.memo(UpdateDetailInfoView);