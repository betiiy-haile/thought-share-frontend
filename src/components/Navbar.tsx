'use client'
import { useState, useEffect, useRef } from 'react'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '@/lib/slices/authSlice';


const Navbar = () => {

    const [isActive, setIsActive] = useState("home")
    const [isOpen, setIsOpen] = useState(false)
    const [isSettingOpen, setIsSettingOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const dispatch = useDispatch();


    const authState = useSelector((state: any) => state.auth)
    console.log("authState token", authState.token)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsSettingOpen(false);
            }

            if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isSettingOpen, isOpen])

    

    const handleLogout = () => {
        dispatch(logoutUser())
        router.push('/login');
    };


    const mobileNav = <div ref={mobileRef} className={`absolute lg:hidden top-0 ${isOpen ? "left-0" : "left-[-100%]"} w-2/3 md:w-1/2 h-screen bg-[#3C465E] py-20 bg-opacity-60 backdrop-blur-lg`}>
        <div className='flex flex-col justify-center items-center'>
            <Image src="/logo.svg" alt="Share it Logo" width={100} height={100} />
        </div>
        <ul className='text-center text-xl text-white flex flex-col py-4 '>
            <Link href="/" onClick={() => setIsOpen(false)} >
                <li className={`py-4 hover:text-blue-500 transition cursor-pointer ${isActive == "home" ? "text-blue-500" : ""}`} onClick={() => setIsActive("home")}>Home</li>
            </Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)} >
                <li className={`py-4 hover:text-blue-500 transition cursor-pointer ${isActive == "blogs" ? "text-blue-500" : ""}`} onClick={() => setIsActive("blogs")}>Blogs</li>
            </Link>
            <Link href="/write" onClick={() => setIsOpen(false)} >
                <li className={`py-4 hover:text-blue-500 transition cursor-pointer ${isActive == "write" ? "text-blue-500" : ""}`} onClick={() => setIsActive("write")}>Write</li>
            </Link>
            {
                authState.token ? (
                    null
                ) : (
                    <>
                        <Link href="/login" onClick={() => setIsOpen(false)} >
                            <button className='bg-blue-500 px-5 py-2 my-2 rounded-md text-white border-2 border-blue-500 hover:bg-transparent  hover:text-blue-500 hover:border-blue-500'>Login</button>
                        </Link>
                        <Link href="/signup" onClick={() => setIsOpen(false)} >
                            <button className='bg-transparent px-5 py-1 my-2 rounded-lg text-blue-500 border-2 border-blue-500 hover:bg-blue-500   hover:text-white'>Signup</button>
                        </Link>
                    </>
                )
            }

        </ul>
    </div>
    return (
        <nav className='mb-8 sticky top-0 bg-[#0F172A] z-20 lg:mb-8'>
            <div className='h-24 flex justify-between  text-gray-200 lg:py-5 px-5 lg:px-16 xl:px-28 py-4'>

                <div className='flex items-center flex-1'>
                    <Link href="/" className='text-3xl font-bold'>
                        <Image src="/Nav-Logo.svg" alt="logo" width={50} height={50} />
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
                        {authState.token ? (<>
                            <div className='flex gap-4 items-center cursor-pointer' onClick={() => setIsSettingOpen(!isSettingOpen)}>
                                <Image src="/avator.jpg" alt="avator image" className="w-10  h-10 rounded-full" width={60} height={60} />
                                <span className='text-white font-medium'>{authState.name}</span>

                            </div>
                            {isSettingOpen && <div ref={menuRef} className='absolute rounded-lg z-20 backdrop-blur-md px-4 w-40 top-20 lg:right-20 xl:right-32 bg-[#3C465E] bg-opacity-30 flex flex-col item-center justify-center'>
                                <Link href="/profile"><li className='pt-4 hover:text-blue-500 transition cursor-pointer'>Profile</li></Link>
                                <button onClick={handleLogout}><li className='py-4 text-left hover:text-blue-500 transition cursor-pointer'>Logout</li></button>

                            </div>}
                        </>
                        ) : (
                            <div className='flex gap-4'>
                                <Link href="/login">
                                    <button className='bg-blue-500 px-5 py-1 my-2 rounded-lg text-white border-2 border-blue-500 hover:bg-transparent  hover:text-blue-500 hover:border-blue-500'>Login</button>
                                </Link>
                                <Link href="/signup">
                                    <button className='bg-transparent px-5 py-1 my-2 rounded-lg text-blue-500 border-2 border-blue-500 hover:bg-blue-500   hover:text-white'>Signup</button>
                                </Link>
                            </div>
                        )
                        }

                    </ul>
                </div>

                <div>
                    {isOpen && mobileNav}
                </div>

                <button className='flex flex-row gap-4 lg:hidden transition '>
                   {authState.token && <Image src="/avator.jpg" alt="avator image" className="w-10  h-10 rounded-full" width={60} height={60} onClick={() => setIsSettingOpen(!isSettingOpen)} />}
                    {isSettingOpen && <div ref={menuRef} className='absolute rounded-lg z-20 backdrop-blur-md px-6 w-40 top-16 right-10 bg-[#3C465E] bg-opacity-30 flex flex-col item-center justify-center'>
                        <Link href="/profile"><li className=' list-none pt-4 text-left hover:text-blue-500 transition cursor-pointer'>Profile</li></Link>
                        <button onClick={handleLogout} ><li className='list-none py-4 text-left hover:text-blue-500 transition cursor-pointer'>Logout</li></button>
                    </div>}
                    {isOpen ? <AiOutlineClose size={30} onClick={() => setIsOpen(false)} /> : <FiMenu size={30} onClick={() => setIsOpen(true)} />}
                </button>

            </div>

        </nav>
    )
}

export default Navbar