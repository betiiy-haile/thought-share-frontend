"use client"
import { usePathname } from 'next/navigation';

const Page = () => {
    const pathname = usePathname();

    const name = pathname?.split('/')[2];

    return (
        <div>
            individual profile page
            <h2>{name}</h2>
        </div>
    );
};

export default Page;
