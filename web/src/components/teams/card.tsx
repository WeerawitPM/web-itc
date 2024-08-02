import { Card } from "@nextui-org/react";
import Image from "next/image";

type Props = {
    name: string;
    position: string;
    src: string;
    description: string;
};

export default function CardComponent({ name, position, src, description }: Props) {
    return (
        <Card>
            <div className="flex items-center space-x-4 p-4">
                <div className='h-36 w-36'>
                    <Image
                        src={src}
                        alt={name}
                        width={120}
                        height={120}
                        objectFit="cover"
                        className='rounded-full w-full h-full object-cover'
                        unoptimized
                    />
                </div>
                <div>
                    <h4 className="text-xl font-bold">{name}</h4>
                    <span className="text-gray-500">{position}</span>
                    <p className="text-gray-600 mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </Card>
    )
}