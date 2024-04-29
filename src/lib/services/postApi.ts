    import { CreatePostRequest, Post } from "@/types";
    import { baseApi } from "./baseApi";
   import { getCookieValue } from "../slices/authSlice";

    // const authState = useSelector((state: any) => state.auth)

    export const postApi = baseApi.injectEndpoints({
        endpoints: (builder) => ( {
    
            createPost: builder.mutation<Post, CreatePostRequest>({
                query: (post) => {
                    const cookieObject = JSON.parse(getCookieValue('user') as string);

                    return {
                        url: "/posts",
                        method: "POST",
                        body: post,
                        headers: {
                            Authorization: `Bearer ${cookieObject.token}`
                        }
                    }
                }
                
                
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