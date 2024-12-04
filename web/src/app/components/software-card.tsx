import Image from "next/image"
import Link from "next/link"

type Props = {
    slug: string;
    software_id: string;
    image: string;
    title: string;
    company: string;
};

export default function SoftwareCard({ slug, software_id, image, title, company }: Props) {
    return (
        <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-200/50 dark:border-gray-800/50">
            <Image src={image} alt="illustration" width={1300} height={1400} className="w-full aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900" priority unoptimized />
            <div className="relative p-4 pt-10">
                <div className="absolute right-4 -top-6 bg-blue-600 px-4 py-0.5 flex flex-col">
                    <p className="font-bold text-2xl text-white">{company}</p>
                    <p className="text-sm text-gray-200"></p>
                </div>
                {/* <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <span>{category}</span>
                    <span className="relative px-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:h-3 before:w-px before:bg-gray-400" />
                    <span>{author}</span>
                </div> */}
                <div className="text-xl mb-6 font-semibold text-gray-900 dark:text-white">
                    {title}
                </div>
                <Link href={
                    {
                        pathname: `/company/${slug}/detail/${software_id}`,
                        // query: { software_id }
                    }
                } className="text-blue-600 dark:text-blue-500 transition hover:text-opacity-90 flex items-center gap-x-3 group">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 transition-all ease-linear group-hover:ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </div>
        </div>)
}
