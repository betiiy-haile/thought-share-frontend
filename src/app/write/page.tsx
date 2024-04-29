'use client'
import { categories } from "../../../data"
import  { useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import 'react-quill/dist/quill.bubble.css'
import { toast } from "react-toastify"
import {  useCreatePostMutation } from "../../lib/features/postApi"
import { CustomError } from "@/lib/services/baseApi"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const WritePage = () => {

    const [image, setImage] = useState<File | null>(null);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [preview, setPreview] = useState("");
    const [createPost, { data, isLoading, isError, error, isSuccess }] = useCreatePostMutation();


    // const authState = useSelector((state: RootState) => state.auth)
    // console.log("user form useSlector", authState)

    useEffect(() => {
            if (typeof document !== 'undefined') {
                document.title = 'Write New Post';
            }
        }, []);

    
    
    const slugify = (str: string) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");


    const previewSource = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreview(reader.result as any);
        }
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        previewSource(image as File)
        // const decodedToken = jwt.decode(authState.token as string);
        // console.log("decodedToken", decodedToken)
        
        console.log("post details", {
            title,
            content,
            image: preview,
            slug: slugify(title),
            Comment: [],
            category 
        })
        const data = await createPost({
            title,
            content,
            image: preview,
            slug: slugify(title),
            comment: [],
            category
        })

        // const res = await fetch("https://thought-share-api-1.onrender.com/api/posts", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         title,
        //         content,
        //         image: preview,
        //         slug: slugify(title),
        //         Comment: [],
        //         category                
        //     }),
        // })

        console.log("res", data)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
            previewSource(e.target.files[0])
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Post created successfully!");
        }
        if (isError && error) {
            const err = error as CustomError
            console.log(err.data.error)
            toast.error(err.data.error)
        }
    }, [isSuccess, data, isError, error]);


    return (
        <div >
            <form className="px-5 lg:px-16 xl:px-20 2xl:px-28 flex items-start flex-col" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" className=" py-4 text-slate-300 bg-transparent text-xl xl:text-5xl border-none outline-none" onChange={e => setTitle(e.target.value)} />
            <select className='mb-10 text-slate-300 rounded-lg px-4 py-4 w-full lg:w-[450px] bg-[#3C465E] outline-none' value={category} onChange={e => setCategory(e.target.value)}>
                          <option value="">Choose a category</option>
                       {categories.map((category, index) => <option key={index} value={category.name}>{category.name}</option>)}
                   </select>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 h-[500px] w-full relative">

                <div className="w-12 h-12 rounded-full bg-transparent border border-slate-300 flex items-center justify-center cursor-pointer">
                    <input type="file" id="image" onChange={handleChange} style={{ display: 'none' }} />
                    <button className='w-12 h-12 rounded-full bg-transparent border flex items-center justify-center cursor-pointer' disabled={!image}>
                        <label htmlFor="image">
                            <Image src="/image.png" alt="" width={16} height={16} />
                        </label>
                    </button>
                    
                </div>
                {preview && (
                    <Image src={preview} alt="" width={300} height={300} className="w-[300px] h-[200px] md:h-[300px] md:w-[450px]  object-cover" />
                )}            
                <ReactQuill className="w-full md:w-[80%] lg:w-[60%] text-3xl text-slate-300 placeholder:text-slate-300 " theme="bubble" value={content} onChange={setContent} placeholder="Tell Your story..." />
            </div>
            <button type="submit" className='bg-blue-600 text-white font-medium mt-8 px-6 lg:px-10 py-4 rounded lg:rounded-lg cursor-pointer hover:opacity-70'  >
                {isLoading ? "Loading..." : "Publish"}
            </button>
            </form>

        </div>
    )
}

export default WritePage

