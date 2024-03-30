'use client'
import { categories } from "../../../data"

import { useState } from "react"
import Image from "next/image"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.bubble.css'

const WritePage = () => {

    const [file, setFile] = useState<File | null>(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");


    // transform Beti Haile => beti-haile
    const slugify = (str: string) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");


    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "style",
            })
        })
        console.log(res)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    return (
        <div className="px-5 lg:px-16 xl:px-20 2xl:px-28 flex items-start flex-col">
            <input type="text" placeholder="Title" className=" py-4 text-slate-300 bg-transparent text-5xl border-none outline-none" onChange={e => setTitle(e.target.value)} />
            <select className='mb-10 text-slate-300 rounded-lg px-4 py-4 w-full lg:w-[450px] bg-[#3C465E] outline-none' >
                          <option value="">Choose a category</option>
                       {categories.map((category, index) => <option key={index} value={category.name}>{category.name}</option>)}
                   </select>
            <div className="flex gap-4 lg:gap-8 h-[500px] w-full relative">

                <div className="w-12 h-12 rounded-full bg-transparent border border-slate-300 flex items-center justify-center cursor-pointer">
                    <input type="file" id="image" onChange={handleChange} style={{ display: 'none' }} />
                    <button className='w-12 h-12 rounded-full bg-transparent border flex items-center justify-center cursor-pointer'>
                        <label htmlFor="image">
                            <Image src="/image.png" alt="" width={16} height={16} />
                        </label>
                    </button>
                </div>
                {/* <ReactQuill className="w-full text-3xl text-slate-300 " theme="bubble" value={value} onChange={setValue} placeholder="Tell Your story..." /> */}
            </div>
            <button className='bg-blue-600 text-white font-medium mt-8 px-6 lg:px-10 py-4 rounded lg:rounded-lg cursor-pointer hover:opacity-70' onClick={handleSubmit} >publish</button>
        </div>
    )
}

export default WritePage


// 