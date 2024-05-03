    import { CreatePostRequest, Post } from "@/types";
    import { baseApi } from "./baseApi";
   import { getCookieValue } from "../slices/authSlice";

    export const postApi = baseApi.injectEndpoints({
        endpoints: (builder) => ( {
    
            getPosts: builder.query<any, void>({
                query: () => "/posts",
            }),
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

