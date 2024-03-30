'use client'

import Image from "next/image"
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false)


  return (
    <div className=" px-5 lg:px-16 xl:px-28  flex flex-row gap-12 items-center justify-center">     
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-slate-300 w-[80%] mx-auto mb-4">Login</h2>
        <form className="flex flex-col gap-4 lg:gap-8 w-[80%] mx-auto bg- red-400">
         
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-300 ">
              Email
            </label>
            <input type="email" placeholder="email@gmail.com" className="w-full border-b outline-none font-light bg-transparent border-slate-500/30 focus:border-purple-600 text-slate-400 py-2 placeholder:font-light text-sm" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-slate-300 ">
              Password
            </label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="" className="w-full font-light  border-b outline-none  bg-transparent border-slate-500/30 focus:border-purple-600 text-slate-400 py-2  text-sm" />
              {showPassword && <AiFillEyeInvisible className="text-slate-300/50 cursor-pointer hover:text-slate-300 absolute right-4 bottom-4 " onClick={() => setShowPassword(!showPassword)} />}
              {!showPassword && <FaEye className="text-slate-300/50 cursor-pointer hover:text-slate-300 absolute right-4 bottom-4 " onClick={() => setShowPassword(!showPassword)} />}
            </div>
          </div>

          
          <button type="submit" className="button-gradient px-6 lg:px-10 py-2 lg:py-3  rounded lg:rounded-lg cursor-pointer hover:opacity-70">Login</button>
          <div className="text-slate-300 text-center -mt-2 lg:-mt-6 font-light text-sm ">Dont you have an account? <Link href={"/signup"} className="text-blue-600 hover:underline cursor-pointer">Sign Up</Link></div>
        </form>
      </div>
      <div className="hidden lg:flex">
        <Image src="/sign-in.png" alt="sign in image" width={750} height={600} />
      </div>
    </div>
  )
}

export default LoginPage
  