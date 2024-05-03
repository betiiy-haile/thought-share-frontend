import Image from "next/image"
import Link from "next/link";
interface Prop {
    name: string;
    color: string;
    image: string;
}

const CategoryCard = ({ name, color, image }: Prop) => {
    
    return (
        <Link href={`/blogs?category=${name}`} className={`w-[170px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] h-[50px] xl:h-[90px] py-8 px-4 xl:px-6  flex items-center ${color} bg-opacity-20 gap-4 justify-center rounded-lg`}>
            <div className="w-8 xl:w-16 h-8 xl:h-16 rounded-full overflow-hidden">
                <Image src={image} alt={name} className="w-full h-full object-cover" width={100} height={100} />
            </div>
            <span className="text-white w-[60%] text-sm lg:text-lg">
                {name}
            </span>
        </Link>
    );
};

export default CategoryCard;