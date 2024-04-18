import { loginCredentials, loginResponse, signupCredentials } from "@/types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<loginResponse, loginCredentials>({
            query: (credentials: loginCredentials) => ({
                url: "/users/login",
                method: "POST",
                body: credentials
            })
        }),
        signup: builder.mutation<loginResponse, signupCredentials>({
            query: (credentials: signupCredentials) => ({
                url: "/users/register",
                method: "POST",
                body: credentials
            })
        })
    })
})