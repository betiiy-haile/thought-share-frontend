'use client'

import { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";


const Pagination = () => {

    const [active, setActive] = useState<number>(1)

  return (
    <div className="flex flex-row gap-4 text-purple-600">
          <span onClick={() => setActive(active - 1)} className="border border-slate-300  rounded hover:bg-purple-600 transition duration-300 text-slate-300 px-2 md:px-3 flex items-center justify-center cursor-pointer">
              <GoChevronLeft  className="" />

        </span>
          <span onClick={() => setActive(1)} className={`text-sm md:text-base font-semibold rounded hover:bg-purple-600 transition duration-300 border hover:text-slate-300 border-purple-600 px-2 md:px-4 py-1 md:py-2 cursor-pointer ${active == 1 ? "bg-purple-600 text-slate-300" : ""} `}>1</span>
          <span onClick={() => setActive(2)} className={`text-sm md:text-base font-semibold rounded hover:bg-purple-600 transition duration-300 border hover:text-slate-300 border-purple-600 px-2 md:px-4 py-1 md:py-2 cursor-pointer ${active == 2 ? "bg-purple-600 text-slate-300" : ""} `}>2</span>
          <span onClick={() => setActive(3)} className={`text-sm md:text-base font-semibold rounded hover:bg-purple-600 transition duration-300 border hover:text-slate-300 border-purple-600 px-2 md:px-4 py-1 md:py-2 cursor-pointer ${active == 3 ? "bg-purple-600 text-slate-300" : ""} `}>3</span>
          <span className="font-semibold">...</span>
          <span onClick={() => setActive(9)} className={`text-sm md:text-base font-semibold rounded hover:bg-purple-600 transition duration-300 border hover:text-slate-300 border-purple-600 px-2 md:px-4 py-1 md:py-2 cursor-pointer ${active == 9 ? "bg-purple-600 text-slate-300" : ""} `}>9</span>
          <span onClick={() => setActive(10)} className={`text-sm md:text-base font-semibold rounded hover:bg-purple-600 transition duration-300 border hover:text-slate-300 border-purple-600 px-2 md:px-4 py-1 md:py-2 cursor-pointer ${active == 10 ? "bg-purple-600 text-slate-300" : ""} `}>10</span>
          <span onClick={() => setActive(active + 1)} className="border border-slate-300 rounded hover:bg-purple-600 transition duration-300 text-slate-300 px-3 flex items-center justify-center cursor-pointer">
              <GoChevronRight className=" " />

        </span>
    </div>
  )
}

export default Pagination
