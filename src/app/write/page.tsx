'use client'
import { categories } from "../../../data"

import React,  { useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import 'react-quill/dist/quill.bubble.css'

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const WritePage = () => {

    const [image, setImage] = useState<File | null>(null);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
            if (typeof document !== 'undefined') {
                document.title = 'Write New Post';
            }
        }, []);

    

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
                content,
                image,
                slug: slugify(title),
                category,
                comments: [],
                
            })
        })
        console.log(res)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    return (
        <div className="px-5 lg:px-16 xl:px-20 2xl:px-28 flex items-start flex-col">
            <input type="text" placeholder="Title" className=" py-4 text-slate-300 bg-transparent text-xl xl:text-5xl border-none outline-none" onChange={e => setTitle(e.target.value)} />
            <select className='mb-10 text-slate-300 rounded-lg px-4 py-4 w-full lg:w-[450px] bg-[#3C465E] outline-none' >
                          <option value="">Choose a category</option>
                       {categories.map((category, index) => <option key={index} value={category.name}>{category.name}</option>)}
                   </select>
            <div className="flex gap-4 lg:gap-8 h-[500px] w-full relative">

                <div className="w-12 h-12 rounded-full bg-transparent border border-slate-300 flex items-center justify-center cursor-pointer">
                    <input type="file" id="image" onChange={handleChange} style={{ display: 'none' }} />
                    <button className='w-12 h-12 rounded-full bg-transparent border flex items-center justify-center cursor-pointer' disabled={!image}>
                        <label htmlFor="image">
                            <Image src="/image.png" alt="" width={16} height={16} />
                        </label>
                    </button>
                    
                </div>
                {image && (
                    <Image src={URL.createObjectURL(image)} alt="" width={300} height={300} className="w-[300px] h-[200px] md:h-[300px] md:w-[450px]  object-cover" />
                )}            
                <ReactQuill className="w-full text-3xl text-slate-300 placeholder:text-slate-300  " theme="bubble" value={content} onChange={setContent} placeholder="Tell Your story..." />
            </div>
            <button className='bg-blue-600 text-white font-medium mt-8 px-6 lg:px-10 py-4 rounded lg:rounded-lg cursor-pointer hover:opacity-70' onClick={handleSubmit} >publish</button>
        </div>
    )
}

export default WritePage

