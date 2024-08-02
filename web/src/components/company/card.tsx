import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";

type Props = {
    href: string;
    src: string;
    title: string;
    content: string;
detail: React.FC<{ title: string; content: string }>; // Adjusted type
};

export default function CardComponent({ href, src, title, content, detail: Detail }: Props) {
    return (
        <div className="d-flex text-center">
            <Card className="w-[270px]" isPressable isHoverable radius="sm">
                <CardBody >
                    <Image src={src} width={200} height={200} unoptimized alt='image' className="object-cover w-[100%] h-[100px]" />
                </CardBody>
                <CardFooter>
                    <div className="flex flex-col h-16">
                        <div className="text-start font-bold">{title}</div>
                        <div className="flex gap-2 justify-center align-middle mt-2">
                            <Link href={href} target="_blank"><Button size="sm" radius="lg" className="accent-color text-white">Visit</Button></Link>
                            <Detail title={title} content={content} />
                            <Button size="sm" radius="lg" disabled>Tutorial</Button>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}