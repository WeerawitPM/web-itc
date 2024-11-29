"use client";
import { Card, CardBody, CardFooter, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

type Props = {
    href: string;
    src: string;
    title: string;
    content: string;
    detail: React.FC<{ title: string; content: string }>;
    tutorial: string;
};

export default function CardComponent({ href, src, title, content, detail: Detail, tutorial }: Props) {
    const { isOpen: isHrefModalOpen, onOpen: onHrefOpen, onOpenChange: onHrefOpenChange } = useDisclosure();
    const { isOpen: isTutorialModalOpen, onOpen: onTutorialOpen, onOpenChange: onTutorialOpenChange } = useDisclosure();

    const handleLinkClick = () => {
        if (!href.startsWith("http")) {
            onHrefOpen();
        }
    };

    const handleTutorialClick = () => {
        if (!tutorial.startsWith("http")) {
            onTutorialOpen();
        }
    };

    return (
        <Card className="w-[250px] h-[280px]" isPressable isHoverable radius="sm">
            <CardBody className="p-0">
                <Image
                    src={src}
                    alt={title}
                    width={250}
                    height={160}
                    className="w-full h-[150px] object-cover"
                    unoptimized
                />
                <div className="text-center font-bold mt-2">{title}</div>
            </CardBody>
            <CardFooter className="flex flex-col items-center justify-between">
                <div className="flex gap-2 justify-center pb-2">
                    {href.startsWith("http") ? (
                        <Link href={href} target="_blank">
                            <Button size="sm" radius="lg" className="accent-color text-white">Visit</Button>
                        </Link>
                    ) : (
                        <>
                            <Button size="sm" radius="lg" className="accent-color text-white" onClick={handleLinkClick}>
                                Visit
                            </Button>
                            <Modal isOpen={isHrefModalOpen} onOpenChange={onHrefOpenChange}>
                                <ModalContent>
                                    {(onClose) => (
                                        <>
                                            <ModalHeader className="flex flex-col gap-1">Path Information</ModalHeader>
                                            <ModalBody>
                                                <p>PATH: {href}</p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </>
                                    )}
                                </ModalContent>
                            </Modal>
                        </>
                    )}

                    <Detail title={title} content={content} />

                    {tutorial.startsWith("http") ? (
                        <Link href={tutorial} target="_blank">
                            <Button size="sm" radius="lg" className="accent-color text-white">Tutorial</Button>
                        </Link>
                    ) : (
                        <>
                            <Button size="sm" radius="lg" className="accent-color text-white" onClick={handleTutorialClick}>
                                Tutorial
                            </Button>
                            <Modal isOpen={isTutorialModalOpen} onOpenChange={onTutorialOpenChange}>
                                <ModalContent>
                                    {(onClose) => (
                                        <>
                                            <ModalHeader className="flex flex-col gap-1">Tutorial Information</ModalHeader>
                                            <ModalBody>
                                                <p>No content available</p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </>
                                    )}
                                </ModalContent>
                            </Modal>
                        </>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
