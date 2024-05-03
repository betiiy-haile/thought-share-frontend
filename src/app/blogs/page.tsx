'use client'

import Pagination from '@/components/Pagination'
import PostCard from '@/components/PostCard'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Post } from '@/types'

const BlogsPage = () => {
  const [value, setValue] = useState<string>("")
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://thought-share-api-1.onrender.com/api/posts");
        console.log("betty calm down")
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
        }

        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log("posts", posts)

  return (
    <div className='px-5 lg:px-16 xl:px-20 2xl:px-28 flex items-center flex-col gap-12 lg:gap-24'>

      {/* heading */}
      <section className='flex gap-4 lg:gap-8 flex-col items-center justify-center'>
        <h1 className='text-[36px] xl:text-[64px] text-gradient text-center font-bold '>Recent thoughts of peoples</h1>
        <p className='text-slate-300 font-light text-lg  xl:text-[24px] text-center'>The latest industry news, interviews, technologies, and resources.</p>
        <input type="text" placeholder='Search' value={value} onChange={(e) => setValue(e.target.value)} className='bg-[#3C465E]  px-4 py-3 lg:py-4 w-full rounded-lg outline-none focus:border-2 text-slate-300 border border-slate-300' />
      </section>

      <section className='flex flex-col items-center gap-10'>
        <div className='w-[90%]  grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-12 mx-auto'>
          {posts
            .filter((post) => post.title.toLowerCase().includes(value.toLowerCase()))
            .map((post) => <PostCard key={post._id} {...post} />)}

          {value !== "" &&
            posts
              .filter((post) => post.title.toLowerCase().includes(value.toLowerCase()))
              .length === 0 && (
              <div className="w-full flex flex-col gap-2 items-center justify-center">
                <Image src="/search.svg" alt="empty search results" width={250} height={250}></Image>
                <p className='text-slate-300 text-xl lg:text-3xl font-light'>No results found</p>
              </div>
            )}
        </div>

        {/* pagination */}
        <Pagination />
      </section>


    </div>
  )
}

export default BlogsPage