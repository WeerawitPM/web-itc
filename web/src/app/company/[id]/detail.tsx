"use client"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react"
import { Button as NextBtn, Divider } from "@nextui-org/react"

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
                        {content}
                        {/* <div>
                            <div className="font-medium">Database</div>
                            <Divider />
                            <div>SQL Server : Formula VCST</div>
                            <div>PostgreSQL : print_tag_ac</div>
                        </div>
                        <br></br>
                        <div>
                            <div className="font-medium">Framework & Library</div>
                            <Divider />
                            <div>Django</div>
                            <div>PostgreSQL : print_tag_ac</div>
                        </div> */}
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