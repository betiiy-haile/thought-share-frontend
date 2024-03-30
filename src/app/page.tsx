import CategoryCard from '@/components/CategoryCard'
import Image from 'next/image'
import React from 'react'
import { categories, posts } from '../../data'
import PostCard from '@/components/PostCard'

const HomePage = () => {
  return (
    <div className='px-5 lg:px-16 xl:px-20 2xl:px-28 flex flex-col gap-20 lg:gap-28 '>

      {/* hero section */}
      <section className=' flex items-center justify-between'>
        <div className='flex-1 flex flex-col items-start gap-4'>
          <h1 className='text-[38px] md:text-[48px] lg:text-[72px] 2xl:text-[92px] w-full text-gradient font-bold' >Share Your Amazing Thoughts with the World</h1>
          <p className=' text-slate-200 text-lg xl:text-[24px] leading-10 xl:w-[555px] '>Connect with Others and Share Your Incredible Ideas to Inspire, Empower, and Leave a Lasting Impact on the World.</p>
          <button className='button-gradient mt-8 px-6 lg:px-10 py-3 lg:py-5 rounded lg:rounded-lg cursor-pointer hover:opacity-70'>Get Started</button>
        </div>
        <div className='hidden flex-1 lg:flex items-center justify-end'>
          <Image src='/heroImage.svg' alt='hero section Image' width={650} height={750} />
        </div>
      </section>


      {/* categories */}
      <section className='flex flex-col items-center'>
        <h2 className='text-[24px] lg:text-[48px] text-gradient font-bold mb-10 w-full'>Popular Categories</h2>
        <div className="flex flex-wrap gap-4 xl:gap-x-20 gap-y-8 justify-center ">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>

      </section>

      {/* Recent Posts */}
      <section className='flex flex-col items-center'>
        <h2 className='text-[24px] lg:text-[48px] text-gradient font-bold mb-10 w-full'>Recent Posts</h2>
        <div className='w-full flex flex-wrap gap-4 lg:gap-12 justify-center '>
          {
            posts.map((post, index) => <PostCard key={index} {...post} />)
          }
        </div>
      </section>

      {/* newsletter subscription */}
      <section className='flex items-center gap-6 justify-between mb-20'>
        <div className='hidden lg:block w-2/5'>
          <Image src="/newsletter.svg" alt="newsletter image" width={500} height={500} />
        </div>
        <div className='w-full lg:w-3/5 flex flex-col gap-6 text-white'>
          <h2 className='text-[24px] lg:text-[48px] font-bold'>
            Get Our weekly<br /> <span className='text-gradient text-[48px] lg:text-[92px] '>Newsletter</span>
          </h2>
          <p className=' text-lg font-light xl:text-[24px] leading-10 w-full xl:w-[600px]'>Get weekly updates on the newest design stories, case studies and tips right in your mailbox.
            <span className='font-bold'> Subscribe now!</span></p>
          <div className='flex items-center'>
            <input type="email" name="email" id="email" placeholder='Email Address' className='w-[720px] px-4 py-3 rounded-l-lg outline-none bg-[#3C465E] placeholder:text-white placeholder:text-sm' />
            <button type="submit" className='button-gradient px-4 py-3 rounded-r-lg'>Subscribe</button>
          </div>
        </div>
      </section>


    </div>
  )
}

export default HomePage