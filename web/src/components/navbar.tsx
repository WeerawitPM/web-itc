"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 50; // ระยะเลื่อนที่ต้องการเปลี่ยนสีพื้นหลัง

            if (scrollPosition > threshold) {
                setScrolled(true); // เปลี่ยนสถานะเป็นเลื่อน
            } else {
                setScrolled(false); // คืนค่าสถานะเป็นยังไม่เลื่อน
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            id="header"
            className={`fixed top-0 w-full z-50 py-4 transition-colors duration-300 ${scrolled ? "scroll" : "heading-color"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-white my-auto">ITC CENTER</h1>
                </Link>

                <button className="md:hidden text-gray-700 focus:outline-none">
                    <i className="bi bi-list"></i>
                </button>
            </div>
        </header>
    );
}
