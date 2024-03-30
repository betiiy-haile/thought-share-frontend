import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

interface Prop {
    image: string;
    tag: string;
    title: string;
    desc: string;
    user: {
        name: string;
        image: string;
    };
    createdAt: string;
}

const PostCard = ({ image, tag, title, desc, user, createdAt }: Prop) => {
    return (
        <div className='bg-[#3C465E] group rounded-lg md:rounded-2xl bg-opacity-30 flex flex-col gap-4 xl:gap-10 p-4 md:p-6 w-full md:w-[350px] lg:w-[400px] xl:w-[480px] '>
            <div className='w-full h-[250px] flex items-center justify-center overflow-hidden'>
                <Image src={image} alt="design" className="group-hover:scale-110 transition-all duration-500"  width={430} height={200}/>
            </div>
            <div className="flex flex-col gap-4">
                <span className='text-base text-purple-500 font-medium'>{tag}</span>
                <div className="flex items-center text-white justify-between text-2xl md:text-3xl ">
                    <span className=" font-medium hover:underline cursor-pointer ">{title}</span>
                    <FiArrowUpRight />
                </div>
                <p className="text-[#667085]  md:text-xl ">{desc}</p>
                <div className="flex items-center gap-4 mt-8 md:mt-12">
                    <Image src={user.image} alt="avato image" className="w-10 md:w-16 h-10 md:h-16 rounded-full" width={60} height={60} />
                    <div className="flex flex-col justify-start  md:text-xl">
                        <span className="text-white font-medium">{user.name}</span>
                        <span className="text-[#667085]">{createdAt}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostCard
