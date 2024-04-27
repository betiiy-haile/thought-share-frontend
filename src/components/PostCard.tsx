import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { Post } from "@/types";


// user needs to add each post                                                                                                                                                                                                                  
const PostCard = ({ image, category, title, content,createdAt }: Post) => {
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
                <p className="text-[#667085] lg:text-lg ">{content}</p>
                {/* <div className="flex items-center gap-4 mt-6 lg:mt-12">
                    <Image src={user.image} alt="avato image" className="w-10 md:w-16 h-10 md:h-16 rounded-full" width={60} height={60} />
                    <div className="flex flex-col justify-start  lg:text-base">
                        <span className="text-white font-medium">{user.name}</span>
                        <span className="text-[#667085]">{createdAt}</span>
                    </div>
                </div> */}
            </div>
        </div>
        // <div className='bg-[#3C465E] backdrop-blur group rounded-md md:rounded-lg bg-opacity-30 flex flex-col gap-4  xl:gap-8 p-3 md:p-4 w-full md:w-[350px] lg:w-[420px] xl:w-[480px] '>
        //     <div className='w-full h-[210px] flex items-center justify-center overflow-hidden'>
        //         <Image src={image.url} alt="design" className="group-hover:scale-110 transition-all duration-500"  width={430} height={200}/>
        //     </div>
        //     <div className="flex flex-col gap-4">
        //         <span className='text-base text-purple-500 font-medium'>{category}</span>
        //         <div className="flex items-center text-white justify-between text-xl lg:text-2xl ">
        //             <span className=" font-medium hover:underline cursor-pointer ">{title}</span>
        //             <FiArrowUpRight />
        //         </div>
        //         <p className="text-[#667085]  lg:text-lg ">{content}</p>               

        //     </div>
        // </div>
    )
}

export default PostCard
