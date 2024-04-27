
import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface CustomError {
   data: {
    error: string,
    status: number
   },
   status: number
} 

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api",
        // prepareHeaders: (headers, { getState }) => {
        //     const token = (getState() as any).auth.token
        //     if (token) {
        //         headers.set("authorization", `Bearer ${token}`)
        //     }
        //     return headers
        // } 
    }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
    endpoints: builder => ({})
})


export const {  } = baseApi;