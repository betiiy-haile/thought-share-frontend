'use client'

import Image from "next/image"
import Link from "next/link"; 
import { FaEye } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { SignUpSchema } from "@/utils/schema";
import { useSignupMutation } from "@/lib/features/userApi";
import { CustomError } from "@/lib/services/baseApi";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [signup, {data, isSuccess, isError, isLoading, error}] = useSignupMutation()

  const {values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
      email: '',  
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {      
      console.log(values)
      const res = await signup({name: values.name, email: values.email, password: values.password, image: null})
      console.log(res)
    }
  })

  useEffect(() => {
    if (isSuccess) {
      toast.success("User registered successfully. please Login to continue");
      setTimeout(() => {
        router.push("/login");
      }, 4000);
    }

    if (isError && error) {
      const err = error as CustomError
      console.log(err.data.error);
      toast.error(err.data.error);
    }
  }, [isSuccess, isError, error, router]);


  return (
    <div className=" px-5 lg:px-16 xl:px-40  flex flex-row  items-center justify-center">
      <div className="hidden flex-1 lg:flex items-center justify-center">
        <Image src="/sign-up.png" alt="sign up image" width={500} height={550}  />
      </div>
      <div className="w-full  lg:flex-1">
        <h2 className="text-3xl font-bold text-slate-300 w-[80%] mx-auto mb-4">Sign Up</h2>
        <form className="flex flex-col  gap-4 lg:gap-8 w-[80%] mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-300 ">
                Name
              </label>
              <input type="text" placeholder="John Doe" className="w-full border-b outline-none font-light bg-transparent border-slate-500/30 focus:border-purple-600 text-slate-400 py-2 placeholder:font-light text-sm" value={values.name}  onChange={handleChange("name")}/>
            {errors.name && touched.name && <p className="text-red-400 font-lgiht text-sm">{errors.name}</p>}
            </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-300 ">
              Email
            </label>
            <input type="email" placeholder="email@gmail.com" className="w-full border-b outline-none font-light bg-transparent border-slate-500/30 focus:border-purple-600 text-slate-400 py-2 placeholder:font-light text-sm" value={values.email} onChange={handleChange("email")} />
            {errors.email && touched.email && <p className="text-red-400 font-lgiht text-sm">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-slate-300 ">
              Password
            </label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="" className="w-full font-light  border-b outline-none  bg-transparent border-slate-500/30 focus:border-purple-600 text-slate-400 py-2  text-sm" onChange={handleChange("password")} value={values.password} />
              {errors.password && touched.password && <p className="text-red-400 font-lgiht text-sm">{errors.password}</p>}
              {showPassword && <AiFillEyeInvisible className="text-slate-300/50 cursor-pointer hover:text-slate-300 absolute right-4 bottom-4 " onClick={() => setShowPassword(!showPassword)} />}
              {!showPassword && <FaEye className="text-slate-300/50 cursor-pointer hover:text-slate-300 absolute right-4 bottom-4 " onClick={() => setShowPassword(!showPassword)} />}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-password" className="text-slate-300 ">
              Confirm Password
            </label>
            <div className="relative">
              <input type={showConfirmPassword ? "text" : "password"} placeholder="" className="w-full font-light  border-b outline-none  bg-transparent border-slate-500/30 focus:border-purple-600 text-slate-400 py-2  text-sm" onChange={handleChange("confirmPassword")} value={values.confirmPassword}  />
              {errors.confirmPassword && touched.confirmPassword && <p className="text-red-400 font-lgiht text-sm">{errors.confirmPassword}</p>}
              {showConfirmPassword && <AiFillEyeInvisible className="text-slate-300/50 cursor-pointer hover:text-slate-300 absolute right-4 bottom-4 " onClick={() => setShowConfirmPassword(!showConfirmPassword)} />}
              {!showConfirmPassword && <FaEye className="text-slate-300/50 cursor-pointer hover:text-slate-300 absolute right-4 bottom-4 "  onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>}
            </div>
          </div>

          <button type="submit" className="button-gradient px-6 lg:px-10 py-2 lg:py-3  rounded lg:rounded-lg cursor-pointer hover:opacity-70">
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
          <div className="text-slate-300 text-center -mt-2 lg:-mt-6 font-light text-sm ">Already have an account? <Link href={"/login"} className="text-blue-600 hover:underline cursor-pointer">Login</Link></div>
          </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignUpPage
