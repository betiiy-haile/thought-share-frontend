import { CreatePostRequest, Post } from "@/types";
import { baseApi } from "./baseApi";



export const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ( {
        // getAllPosts: builder.query<Post[],  void>({
        //     query: () => ({
        //         url: "/posts",
        //         method: "GET",
        //     }),
        //     providesTags: ["Posts"],
        // }),
        // getPost: builder.query<Post, string>({
        //     query: (id) => ({
        //         url: `/posts/${id}`,
        //         method: "GET",
        //     }),
        //     providesTags: ["Post"],
        // }),
        createPost: builder.mutation<Post, CreatePostRequest>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            })
        })
    })
})


// export const postApi = baseApi.injectEndpoints({
//     endpoints: (builder) => ({
//         getAllPosts: builder.query<Post[], void>({
//             query: () => ({
//                 url: "/posts",
//                 method: "GET",
//             }),
//             providesTags: ["Posts"],
//         }),
//         getPost: builder.query<Post, string>({
//             query: (id) => ({
//                 url: `/posts/${id}`,
//                 method: "GET",
//             }),
//             providesTags: ["Post"],
//         }),
//         createPost: builder.mutation<any, CreatePostRequest>({
//             query: (post) => ({
//                 url: "/posts",
//                 method: "POST",
//                 body: post,
//             }),
//         }),
//     }),
// });

