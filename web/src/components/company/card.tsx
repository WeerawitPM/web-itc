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
    tutorial: string; //
};

export default function CardComponent({ href, src, title, content, detail: Detail, tutorial }: Props) {
    return (
        <div className="d-flex justify-center">
            <Card className="w-[270px] h-[350px]" isPressable isHoverable radius="sm">
                <CardBody className="flex flex-col items-center justify-center">
                    <Image src={src} width={150} height={150} unoptimized alt='image' className="object-cover w-[150px] h-[150px]" />
                </CardBody>
                <CardFooter className="flex flex-col items-center justify-between">
                    <div className="text-start font-bold">{title}</div>
                    <div className="flex gap-2 justify-center mt-2">
                        <Link href={href} target="_blank"><Button size="sm" radius="lg" className="accent-color text-white">Visit</Button></Link>
                        <Detail title={title} content={content} />
                        <Link href={tutorial} target="_blank"><Button size="sm" radius="lg"  className="accent-color text-white">Tutorial</Button></Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
