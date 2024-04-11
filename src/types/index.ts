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
}

export type signupResponse = {
    _id: string
    name: string,
    email: string,
    token: string
}