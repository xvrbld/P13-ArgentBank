import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface UserState {
  firstname: string;
  lastname: string;
  token: string | null;
}

const initialState: UserState = {
  firstname: "",
  lastname: "",
  token: localStorage.getItem('token') ? localStorage.getItem('token') : "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setFirstname: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    removeFirstname: (state) => {
      state.firstname = "";
    },
    setLastname: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload;
    },
    removeLastname: (state) => {
      state.lastname = "";
    },
    setToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
      action.payload.rememberMe
        ? localStorage.setItem("token", action.payload.token)
        : localStorage.removeItem("token");
    },
    removeToken: (state) => {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const {
  setFirstname,
  removeFirstname,
  setLastname,
  removeLastname,
  setToken,
  removeToken,
} = UserSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getFirstname = (state: RootState) => state.user.firstname;
export const getLastname = (state: RootState) => state.user.lastname;
export const getToken = (state: RootState) => state.user.token;

export default UserSlice.reducer;
