export type loginCredentials = {
    email: string
    password: string
}

export type loginResponse = {
    _id: string
    name: string,
    email: string,
    token: string
}

export type signupCredentials = {
    name: string
    email: string
    password: string  
    image: {
        url: string
        public_id: string
    }  | null
}

export type signupResponse = {
    _id: string
    name: string,
    email: string,
    token: string
}

export type CreatePostRequest = {
    title: string,
    content: string,
    category: string,
    slug: string,
    comment:  string[],
    image: string
}


export type Post = {
    _id: string
    title: string
    content: string
    slug: string
    category: string
    image: {
        url: string
        public_id: string
    },
    user: User
    comments: string[]
    createdAt: string
    updatedAt: string
}

export type User = {
    _id: string
    name: string
    email: string
    image?: {
        url: string
        public_id: string
    }
    token: string
    posts: Post[]
}