import React, { createContext, ReactNode, useState, Dispatch } from "react";
import { IUser } from "../user-redux/userSlice";

export interface IUserContextData {
  user: IUser;
  setUser: Dispatch<React.SetStateAction<IUser>>;
}

export const UserContextData = createContext<IUserContextData | undefined>(undefined);

interface IUserContextDataProvider {
  children: ReactNode;
}

export const UserContextDataProvider: React.FC<IUserContextDataProvider> = ({ children }: IUserContextDataProvider) => {
  const [user, setUser] = useState<IUser>({
    name: '',
    surname: ''
  });

  const value = { user, setUser };

  return (
    <UserContextData.Provider value={value}>
      {children}
    </UserContextData.Provider>
  );
};
