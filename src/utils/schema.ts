import * as Yup from "yup";

export const LoginSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
})

export const SignUpSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm password is required"),
})