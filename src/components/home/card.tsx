import Image from "next/image"
import Link from "next/link";
export default function Card({ src, href }: { src: string, href: string }) {
    return (
        <div className="rounded-lg w-fit shadow-sm p-2 bg-white">
            <Link href={href}>
                <Image
                    src={src}
                    alt="image"
                    width={150}
                    height={150}
                    priority
                    className="m-auto"
                />
            </Link>
        </div>
    );
}