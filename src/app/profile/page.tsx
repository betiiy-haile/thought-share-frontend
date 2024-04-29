'use client'
import { useState, useEffect } from "react"
import Spinner from "@/components/Spinner";
import { RootState } from "@/lib/store";
import Image from "next/image"
import { FiArrowUpRight } from "react-icons/fi";
import { useSelector } from "react-redux";

const posts = [
    {
        image: '/technology.jpg',
        category: 'Technology',
        title: 'Lorem Ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2022-10-01'
    },
    {
        image: '/travel.jpg',
        category: 'Travel',
        title: 'Dolor Sit Amet',
        content: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2022-09-15'
    },
    {
        image: '/food.jpg',
        category: 'Food',
        title: 'Lorem Ipsum Dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2022-11-05'
    },
    {
        image: '/fashion.jpg',
        category: 'Fashion',
        title: 'Sit Amet',
        content: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2022-08-20'
    }
];

const ProfilePage = () => {

    const authState = useSelector((state: RootState) => state.auth);
    const [myPosts, setMyPosts] = useState<any[]>([]);

    useEffect(() => {
        // Simulating an asynchronous API call
        setTimeout(() => {
            setMyPosts(posts);
        }, 2000);
    }, []);


  return (
      <div className="px-5 -mt-4 lg:px-16 xl:px-40 min-h-[600px] flex  flex-row gap-y-12 items-start justify-center ">
      
          <div className='w-1/5 pr-6 flex flex-col gap-12 sticky top-32'>
              <div className="flex items-center justify-center ">
                  <div className="rounded-full overflow-hidden w-40 h-40">
                    {
                        authState.image ? (
                            <Image src={authState.image.url} alt="profile image" width={200} height={200} objectFit="cover" className="w-full h-full" />
                        ) : (
                            <Image src = "/avator.jpg" alt = "profile image" width = { 200 } height = { 200 } objectFit = "cover" className = "w-full h-full" />
                        )
                    }
                  </div>
              </div>
              <div className="text-slate-300 text-center ">
                <h2 className="font-medium text-2xl">{authState.name}</h2>
                <p>{authState.email}</p>
              </div>
              <div className="flex flex-col gap-3 ">
                  <div className="flex items-center rounded justify-between px-5 py-3 bg-[#3C465E] bg-opacity-50 backdrop-blur text-white ">
                    <h3>Followers</h3>
                    <p>43</p>
                </div>
                  <div className="flex items-center rounded justify-between px-5 py-3 bg-[#3C465E] bg-opacity-50 backdrop-blur text-white">
                      <h3>Posts</h3>
                      <p>5</p>
                  </div>
              </div>

            </div>

            <div className='md:border-l border-purple-500  flex-1 px-8'>
                <h2 className="text-3xl font-medium p-2 mb-4 text-slate-300">My Posts</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {
                      myPosts.length === 0 ? (
                        <div className="w-full flex items-center justify-center">
                          <Spinner />
                        </div>
                      ) : (
                          myPosts.map((post, index) => (
                              <div
                                  key={index}
                                  className="min-w-fit w-full group flex flex-col gap-4 p-3 rounded bg-[#3C465E] bg-opacity-50 backdrop-blur"
                              >
                                  <div className="w-full h-[210px] flex items-center justify-center overflow-hidden">
                                      <Image
                                          src={post.image}
                                          alt="design"
                                          className="group-hover:scale-110 transition-all duration-500"
                                          width={430}
                                          height={200}
                                      />
                                  </div>
                                  <div className="flex flex-col gap-2">
                                      <span className="text-base text-purple-500 font-medium">{post.category}</span>
                                      <div className="flex items-center text-white justify-between text-xl">
                                          <span className="font-medium hover:underline cursor-pointer">{post.title}</span>
                                          <FiArrowUpRight />
                                      </div>
                                      <p className="text-[#667085] lg:text-lg">{post.content}</p>
                                  </div>
                              </div>
                          ))
                      )
                  }
                    
                </div>
            </div>
          
    </div>
  )
}
export default ProfilePage
