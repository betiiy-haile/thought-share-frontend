import Image from "next/image"
interface Prop {
    name: string;
    color: string;
    image: string;
}

const CategoryCard = ({ name, color, image }: Prop) => {
    
    return (
        <div className={`w-[170px] xl:w-[300px] h-[50px] xl:h-[90px] px-3 xl:px-6  flex items-center ${color} bg-opacity-50 gap-4 justify-center rounded-lg`}>
            <div className="w-8 xl:w-16 h-8 xl:h-16 rounded-full overflow-hidden">
                <Image src={image} alt={name} className="w-full h-full object-cover" width={100} height={100} />
            </div>
            <span className="text-white w-[70%] text-lg">
                {name}
            </span>
        </div>
    );
};

export default CategoryCard;