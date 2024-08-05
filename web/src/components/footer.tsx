import { Divider } from "@nextui-org/react"

export default function Footer() {
    return (
        <div className="container mx-auto">
            <Divider />
            <footer className=" text-center py-5">
                © Copyright {new Date().getFullYear()} <span>ITC Center.</span> All rights reserved.
            </footer>
        </div>
    )
}