import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookies from "js-cookie"

export type AuthState = {
    name: string | null,
    token: string | null
}

const initialState: AuthState = {
    name: null,
    token: null
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ name: string, token: string }>) => {
            // console.log(action.payload)
            // localStorage.setItem("user", JSON.stringify({ name: action.payload.name, token: action.payload.token }))
            Cookies.set("user", JSON.stringify({ name: action.payload.name, token:  action.payload.token }), { expires: 10 })
            state.name = action.payload.name
            state.token = action.payload.token
        }
    }
})

export const selectAuth = (state: RootState) => state.auth

export const { setUser } = authSlice.actions

export default authSlice.reducer