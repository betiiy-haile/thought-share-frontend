'use client'
import { useState, useEffect } from "react"
import Spinner from "@/components/Spinner";
import { RootState } from "@/lib/store";
import Image from "next/image"
import { FiArrowUpRight } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { useUpdateProfileMutation } from "@/lib/features/userApi";

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

    const [base64Image, setBase64Image] = useState("")
    const [myPosts, setMyPosts] = useState<any[]>([]);
    const [updateProfile, { isSuccess, isError, isLoading, error }] = useUpdateProfileMutation() 
    

    useEffect(() => {
        // Simulating an asynchronous API call
        setTimeout(() => {
            setMyPosts(posts);
        }, 2000);
    }, []);

    const handleProfileChange = async (e: any) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();

        reader.onloadend = async () => {
            setBase64Image(reader.result as any);  
            console.log("before fetching")
            const response = await updateProfile({ id: authState._id, image: reader.result, token: authState.token })
            console.log("response from update profile", response)          
        }
        

        reader.readAsDataURL(file);
    };

    console.log("authstate", authState)


  return (                                                                  
      <div className="px-5 -mt-4 lg:px-16 xl:px-40 min-h-[600px] flex flex-col  md:flex-row gap-y-12 items-start justify-center ">
      
          <div className='w-full px-4 md:w-1/3 lg:w-1/4 lg:px-1 xl:w-1/5 lg:pr-4 flex flex-col gap-6 md:gap-12 md:sticky top-32 '>
              <div className="flex items-center justify-center">
                  
                  {base64Image && (
                  <div className="flex items-center justify-center">
                      <div className="rounded-full overflow-hidden w-32 h-32">
                          <Image
                              src={base64Image}
                              alt="profile image"
                              width={200}
                              height={200}
                              objectFit="cover"
                              className="w-full h-full"
                          />
                          </div>
                      </div>
                  )}
                  {!base64Image && (
                      <div className="w-32 h-32 relative">
                        {
                              authState.image ? (
                                  <div className="flex items-center justify-center">
                                      <div className="rounded-full overflow-hidden relative w-32 h-32">
                                          <Image
                                              src={authState.image.url}
                                              alt="profile image"
                                              width={200}
                                              height={200}
                                              objectFit="cover"
                                              className="w-full h-full"
                                          />
                                      </div>
                                  </div>
                              ) :  <FaUserCircle className="w-full h-full text-gray-500" />
                        }
                          <input
                              type="file"
                              className="hidden"
                              onChange={handleProfileChange}
                              id="profileImage"
                          />
                          <label
                              htmlFor="profileImage"
                              className="w-6 h-6 rounded-full bg-blue-500 absolute right-3 bottom-3 flex items-center justify-center z-10 cursor-pointer"
                          >
                              <IoAdd className="text-slate-300 text-xl font-medium" />
                          </label>
                      </div>
                  )}
              </div>
              <div className="text-slate-300 text-center ">
                <h2 className="font-medium text-2xl">{authState.name}</h2>
                <p>{authState.email}</p>
              </div>
              <div className="flex flex-col gap-3 ">
                  <div className="flex items-center rounded justify-between px-5 py-3 bg-[#3C465E] bg-opacity-50 hover:bg-opacity-80 backdrop-blur text-white ">
                    <h3>Followers</h3>
                    <p>43</p>
                </div>
                  <div className="flex items-center rounded justify-between px-5 py-3 bg-[#3C465E] bg-opacity-50 hover:bg-opacity-80 backdrop-blur text-white">
                      <h3>Posts</h3>
                      <p>5</p>
                  </div>
              </div>

            </div>

          <div className='md:border-l min-h-[600px] border-purple-500 flex-1 px-4 md:px-8'>
              <h2 className="text-3xl font-medium p-2 mb-4 text-slate-300">Posts</h2>
              {myPosts.length === 0 ? (
                  <div className="w-full h-44 flex items-center justify-center">
                      <Spinner />
                  </div>
              ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                      {myPosts.map((post, index) => (
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
                      ))}
                  </div>
              )}
          </div>
          
    </div>
  )
}
export default ProfilePage
