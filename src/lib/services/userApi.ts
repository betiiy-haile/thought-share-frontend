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
        }),
        getUser: builder.query<any, string >({
            query: (id) => `/users/${id}`
        }),
        updateProfile: builder.mutation<any, any>({
            query: (data) => {
                console.log("data", data)
                return {
                    url: `/users/${data.id}`,
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${data.token}`
                    },
                    body: JSON.stringify(data)
                }
            }
        })
    })
})