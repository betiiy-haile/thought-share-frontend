import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type AuthState = {
    _id: string | null,
    name: string | null,
    email: string | null,
    token: string | null,
    image: {
        public_id: string,
        url: string
    } | null
}

let initialState: AuthState = {
    _id: null,
    name: null,
    email: null,
    token: null,
    image: null
}
    
export const getCookieValue = (name: string) => {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=');
      if (cookie[0] === name) {
        return decodeURIComponent(cookie[1]);
      }
    }
  }
  return null;
};

const cookieData = getCookieValue('user');
const deserializedUser = cookieData ? JSON.parse(cookieData) : null;

if (deserializedUser) {
    initialState = deserializedUser
} else {
    console.log('User data not found in the cookie.');
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState>) => {
            console.log("action.payload", action.payload)
            
            document.cookie = `user=${JSON.stringify({ id: action.payload._id, name: action.payload.name, email: action.payload.email, token:  action.payload.token })}`
            
            console.log("cookies setted ")
            state._id = action.payload._id
            state.name = action.payload.name
            state.email = action.payload.email
            state.token = action.payload.token
            state.image = action.payload.image
        },
        logoutUser: (state) => {
            state._id = null;
            state.name = null;
            state.email = null;
            state.token = null;
            state.image = null;
            document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        },
    }
})

export const selectAuth = (state: RootState) => state.auth
export const { setUser, logoutUser } = authSlice.actions
export default authSlice.reducer