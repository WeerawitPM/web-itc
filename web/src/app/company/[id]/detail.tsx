"use client"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react"
import { Button as NextBtn } from "@nextui-org/react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type Props = {
    title: string;
    content: string;
}

export default function Detail({ title, content }: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <NextBtn size="sm" radius="lg" className="bg-[#388da8] text-white" onClick={onOpen}>Detail</NextBtn>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Detail {title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
