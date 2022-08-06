import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { IUserDetail } from "../user-redux/userSlice";

export interface IUserDetailContext {
    userDetail: IUserDetail;
    setUserDetail: Dispatch<SetStateAction<IUserDetail>>;
}


export const UserDetailContext = createContext<IUserDetailContext | undefined>(undefined);

interface IUserDetailContextProvider {
    children: ReactNode;
}

export const UserDetailContextProvider: React.FC<IUserDetailContextProvider> = ({ children }: IUserDetailContextProvider) => {

    const [userDetail, setUserDetail] = useState<IUserDetail>({
        age: 0,
        country: ''
    });

    const value = { userDetail, setUserDetail };

    return (
        <UserDetailContext.Provider value={value}>
            {children}
        </UserDetailContext.Provider>
    );
};