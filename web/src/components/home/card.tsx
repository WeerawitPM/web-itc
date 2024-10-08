import Image from "next/image"
import Link from "next/link";

type Props = {
    src: string;
    href: string;
    name: string;
}
export default function Card({ src, href, name }: Props) {
    return (
        <div className="rounded-lg h-[130px] w-[180px] shadow-md p-2 bg-white">
            <Link href={{
                pathname: href,
                query: {
                    name: name
                }
            }}>
                <Image
                    src={src}
                    alt="image"
                    width={150}
                    height={150}
                    priority
                    className="mx-auto object-cover h-full w-full"
                    unoptimized
                />
            </Link>
        </div>
    );
}