
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
        baseUrl: "https://thought-share-api-1.onrender.com/api",
    }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
    endpoints: builder => ({})
})


export const {  } = baseApi;