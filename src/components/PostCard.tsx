import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { Post } from "@/types";
import { FaUserCircle } from "react-icons/fa";


// user needs to add each post                                                                                                                                                                                                                  
const PostCard = ({ image, category, title, content, user, createdAt }: Post) => {

    // console.log("post owner ", user)
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    const date = new Date(createdAt)
     
    return (   // [#3C465E]
        <div className="w-full group flex flex-col gap-4 p-4 rounded-lg bg-[#3C465E] bg-opacity-50 backdrop-blur ">
            <div className='w-full h-[210px] flex items-center justify-center overflow-hidden'>
                <Image src={image.url} alt="design" className="group-hover:scale-110 transition-all duration-500" width={430} height={200} />
            </div>
            <div className="flex flex-col gap-2">
                <span className='text-base text-purple-500 font-medium'>{category}</span>
                <div className="flex items-center text-white justify-between text-xl  ">
                    <span className=" font-medium hover:underline cursor-pointer ">{title}</span>
                    <FiArrowUpRight />
                </div>

                <p className="text-[#667085] lg:text-lg h-28 overflow-hidden" dangerouslySetInnerHTML={{ __html: content }}></p>
                

                <div className="flex items-center gap-4 mt-6 lg:mt-12">
                    {
                        user.image ? (<Image src={user.image?.url as string} alt="avatar image" className="w-10 md:w-16 h-10 md:h-16 rounded-full" width={60} height={60} />) : (<FaUserCircle className="w-12 h-12 text-gray-500" />)
                    }                    
                    <div className="flex flex-col justify-start  lg:text-base">
                        <span className="text-white font-medium hover:underline cursor-pointer">{user.name}</span>
                        <span className="text-[#667085]">{date.toLocaleDateString('en-US', options)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
