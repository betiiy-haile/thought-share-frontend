'use client'
import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {

    const [isActive, setIsActive] = useState("home")
    const [isOpen, setIsOpen] = useState(false)

    const content = <div className='lg:hidden absolute top-20 w-full left-0 right-0 bg-[#0F172A] flex flex-col item-center justify-center'>
        <ul className='text-center text-xl text-white flex flex-col py-4 px-32'>
            <Link href="/" onClick={() => setIsOpen(false)} >
                <li className={`py-4 hover:text-blue-500 transition cursor-pointer ${isActive == "home" ? "text-blue-500" : ""}`} onClick={() => setIsActive("home")}>Home</li>
            </Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)} >
                <li className={`py-4 hover:text-blue-500 transition cursor-pointer ${isActive == "blogs" ? "text-blue-500" : ""}`} onClick={() => setIsActive("blogs")}>Blogs</li>
            </Link>
            <Link href="/write" onClick={() => setIsOpen(false)} >
                <li className={`py-4 hover:text-blue-500 transition cursor-pointer ${isActive == "write" ? "text-blue-500" : ""}`} onClick={() => setIsActive("write")}>Write</li>
            </Link>
            <Link href="/login" onClick={() => setIsOpen(false)} >
                <button className='bg-blue-500 px-5 py-2 my-2 rounded-md text-white border-2 border-blue-500 hover:bg-transparent  hover:text-blue-500 hover:border-blue-500'>Login</button>
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} >
                <button className='bg-transparent px-5 py-1 my-2 rounded-lg text-blue-500 border-2 border-blue-500 hover:bg-blue-500   hover:text-white'>Signup</button>
            </Link>
        </ul>
    </div>

    return (
        <nav className='mb-8 lg:mb-12'>
            <div className='h-24 flex justify-between bg-[#0F172A] z-50 text-gray-200 lg:py-5 px-5 lg:px-16 xl:px-28 py-4'>

                <div className='flex items-center flex-1'>
                    <Link href="/" className='text-3xl font-bold'>
                        <Image src="/Nav-Logo.svg" alt="logo" width={50} height={50}/>
                    </Link>
                </div>
                <div className='lg:flex flex-1 items-center justify-end font-normal hidden '>

                    <ul className='flex gap-8  text-[18px]'>
                        <Link href="/">
                            <li className={`py-4 hover:text-blue-500 transition cursor-pointer ${isActive == "home" ? "text-blue-500" : ""}`} onClick={() => setIsActive("home")}>Home</li>
                        </Link>
                        <Link href="/blogs">
                            <li className={`py-4 hover:text-blue-500 transition cursor-pointer ${isActive == "blogs" ? "text-blue-500" : ""}`} onClick={() => setIsActive("blogs")}>Blogs</li>
                        </Link>
                        <Link href="/write">
                            <li className={`py-4 hover:text-blue-500 transition cursor-pointer ${isActive == "write" ? "text-blue-500" : ""}`} onClick={() => setIsActive("write")}>Write</li>
                        </Link>
                        <div className='flex gap-4'>
                            <Link href="/login">
                                <button className='bg-blue-500 px-5 py-1 my-2 rounded-lg text-white border-2 border-blue-500 hover:bg-transparent  hover:text-blue-500 hover:border-blue-500'>Login</button>
                            </Link>
                            <Link href="/signup">
                                <button className='bg-transparent px-5 py-1 my-2 rounded-lg text-blue-500 border-2 border-blue-500 hover:bg-blue-500   hover:text-white'>Signup</button>
                            </Link>
                        </div>
                        
                    </ul>
                </div>

                <div>
                    {isOpen && content}
                </div>

                <button className='block lg:hidden transition'>
                    {isOpen ? <AiOutlineClose size={30} onClick={() => setIsOpen(false)} /> : <FiMenu size={30} onClick={() => setIsOpen(true)} />}
                </button>

            </div>

        </nav>
    )
}

export default Navbar