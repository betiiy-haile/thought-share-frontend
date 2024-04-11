
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://thought-share-api-1.onrender.com/api",
        // prepareHeaders: (headers, { getState }) => {
        //     const token = (getState() as any).auth.token
        //     if (token) {
        //         headers.set("authorization", `Bearer ${token}`)
        //     }
        //     return headers
        // } 
    }), 
    endpoints: builder => ({})
})


export const {  } = baseApi;