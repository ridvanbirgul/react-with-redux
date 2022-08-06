import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IUserDetail {
  age: number;
  country: string;
}
export interface IUser {
  name: string;
  surname: string;
}

export interface IUserState {
  user: IUser;
  userDetail: IUserDetail;
}

const initialState: IUserState = {
  user: {
    name: "",
    surname: "",
  },
  userDetail: {
    age: 0,
    country: "",
  },
};

export const userSlice = createSlice({
  name: "userInformation",
  initialState,
  reducers: {
    changeName: (state: IUserState, action: PayloadAction<IUser>) => {
      state.user = { ...action.payload };
    },
    changeDetailInfo: (state: IUserState, action: PayloadAction<IUserDetail>) => {
      state.userDetail = { ...action.payload };
    },
  },
});

export const { changeName, changeDetailInfo } = userSlice.actions;

export const userInfo = (state: RootState) => state.userInformation.user; //store da verilen isim ile açılmalı

export const detailInformation = (state: RootState) => state.userInformation.userDetail;

export default userSlice.reducer;
