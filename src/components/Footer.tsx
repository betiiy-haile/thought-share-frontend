import Link from "next/link"
import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
      <footer className='bg-[#3C465E] bg-opacity-30 py-20 mt-20 text-white'>
          <div className="flex flex-col  lg:flex-row gap-y-16 items-center justify-evenly">

              <div >
                  <Image src="/logo.svg" alt="Share it Logo" width={200} height={200} />
              </div>

              <div className="flex flex-col gap-6">
                  <span className="text-center text-2xl font-semibold hover:text-blue-500">Quick Links</span>
                  <ul className="flex flex-col gap-4 items-center font-light">
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/'>Homepage</Link>
                      </li>
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/blogs'>Blogs</Link>
                      </li>
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/about'>About</Link>
                      </li>
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/contact'>Contact</Link>
                      </li>
                  </ul>
              </div>

              <div className="flex flex-col gap-6">
                  <span className="text-center text-2xl font-semibold hover:text-blue-500">Common Tags</span>
                  <ul className="flex flex-col gap-4 items-center font-light">
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/'>Music</Link>
                      </li>
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/blogs'>Travel</Link>
                      </li>
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/about'>Design </Link>
                      </li>
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/contact'>Fashion</Link>
                      </li>
                  </ul>
              </div>


              <div className="flex flex-col gap-6">
                  <span className="text-center text-2xl font-semibold hover:text-blue-500">Socials</span>
                  <ul className="flex flex-col gap-4 items-center font-light">
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/'>Facebook</Link>
                      </li>
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/blogs'>Instagram</Link>
                      </li>
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/about'>Tiktok</Link>
                      </li>
                      <li className="hover:text-blue-500 hover:text-lg transition-all">
                          <Link href='/contact'>Youtube</Link>
                      </li>
                  </ul>
              </div>

        </div>
        <hr className="my-8 mx-5 xl:mx-40 opacity-50" />
          <span className="font-light text-base flex items-center justify-center gap-x-3">
              <FaRegCopyright className="inline" /> {currentYear} Share It - All rights reserved!
          </span>
      
    </footer>
  )
}

export default Footer
