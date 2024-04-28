'use client'

import Image from "next/image"
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginSchema } from "../../utils/schema";  
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginMutation } from "../../lib/features/userApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/slices/authSlice";
import { CustomError } from "@/lib/services/baseApi";

const LoginPage = () => {
  
  const [login, {data, isSuccess, isError, isLoading, error}] = useLoginMutation()

  const router = useRouter()
  const dispatch = useDispatch()

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,  
    onSubmit: async (values, actions) => {
      console.log(values);
      if (values.email && values.password) {
        const res = await login({ email: values.email, password: values.password });
        actions.resetForm(); 
      }else{
        toast.error("All fields are required")
      }
          }
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("User Logged in successfully");
      setTimeout(() => {
        router.push("/");
      }, 4000);

      dispatch(setUser(data as any));      
    }
    if(isError && error) {
      const err = error as CustomError
      console.log(err)
      // console.log(err.data.error)
      toast.error(err.status)
    } 
  }, [isSuccess, data, isError, error, dispatch, router]);
  const [showPassword, setShowPassword] = useState(false)

  

  return (
    <div className=" px-5 lg:px-16 xl:px-40  flex flex-row gap-y-12 items-center justify-center">     
      <div className="flex-1 ">
        <h2 className="text-3xl font-bold text-slate-300 w-[90%] lg:w-[80%] mx-auto mb-4">Login</h2>
        <form className="flex flex-col gap-4 lg:gap-8 w-[90%] lg:w-[80%] mx-auto bg- red-400" onSubmit={handleSubmit}>
         
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-slate-300 ">
              Email
            </label>
            <input
              type="email"
              placeholder="email@gmail.com"
              className="w-full border-b outline-none font-light bg-transparent border-slate-500/30 focus:border-purple-600 text-slate-400 py-2 placeholder:font-light text-sm"
              value={values.email}
              onChange={handleChange("email")}
            />

            {errors.email && touched.email && <p className="text-red-400 font-lgiht text-sm">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-slate-300 ">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=""
                className="w-full font-light border-b outline-none bg-transparent border-slate-500/30 focus:border-purple-600 text-slate-400 py-2 text-sm"
                value={values.password} 
                onChange={handleChange("password")}
              />
              {showPassword && <AiFillEyeInvisible className="text-slate-300/50 cursor-pointer hover:text-slate-300 absolute right-4 bottom-4 " onClick={() => setShowPassword(!showPassword)} />}
              {!showPassword && <FaEye className="text-slate-300/50 cursor-pointer hover:text-slate-300 absolute right-4 bottom-4 " onClick={() => setShowPassword(!showPassword)} />}
            </div>
            {errors.password && touched.password && <p className="text-red-400 font-lgiht text-sm">{errors.password}</p>}
          </div>
          
          <button type="submit" className="button-gradient px-6 lg:px-10 py-2 lg:py-3  rounded lg:rounded-lg cursor-pointer hover:opacity-70">
            {isLoading ? "Loading..." : "Login"}
          </button>
          
          <div className="text-slate-300 text-center -mt-2 lg:-mt-6 font-light text-sm ">Dont you have an account? <Link href={"/signup"} className="text-blue-600 hover:underline cursor-pointer">Sign Up</Link></div>
        </form>
      </div>
      <div className="hidden flex-1 lg:flex items-center justify-center">
        <Image src="/sign-in.png" alt="sign in image" width={500} height={550} />
      </div>
      <ToastContainer />
    </div>
  )
}

export default LoginPage
  