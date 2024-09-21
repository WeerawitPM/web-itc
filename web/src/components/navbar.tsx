"use client";
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import Image from "next/image";

export default function CustomNavbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    const menuItems = [
        { name: "Home", href: pathname === "/" ? "#home" : "/" },
        { name: "Company", href: "#company" },
        { name: "Service", href: "#service" },
        { name: "Team", href: "#team" },
    ];

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <Navbar
            id="header"
            maxWidth="xl" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBlurred={false}
            className={`fixed top-0 py-4 transition-colors duration-300 ${scrolled ? "heading-color" : "heading-color"}`}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden text-white"
                />
                <NavbarBrand className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/assets/images/vcs-group-light.png"
                            alt="Logo"
                            width={52}
                            height={35}
                            quality={100}
                            priority
                            unoptimized
                        />
                        <h1 className="text-xl font-bold text-white my-auto ms-2">ITC CENTER</h1>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex md:items-center md:space-x-6" justify="end">
                {pathname === "/" ? (
                    <>
                        <NavbarItem>
                            <Link href="#home" className="text-white hover:text-[#47b2e4]">Home</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href="#company" className="text-white hover:text-[#47b2e4]">Company</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href="#service" className="text-white hover:text-[#47b2e4]">Service</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href="#team" className="text-white hover:text-[#47b2e4]">Team</Link>
                        </NavbarItem>
                    </>
                ) : (
                    <NavbarItem>
                        <Link href="/" className="text-white hover:text-[#47b2e4]">Home</Link>
                    </NavbarItem>
                )}
            </NavbarContent>

            <NavbarMenu className="pt-10">
                {pathname !== "/"
                    ? (
                        <NavbarMenuItem key="Home">
                            <Link href="/" className="w-full text-foreground" size="lg">
                                Home
                            </Link>
                        </NavbarMenuItem>
                    )
                    : menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.name}-${index}`}>
                            <Link
                                href={item.href}
                                className="w-full text-foreground"
                                size="lg"
                                onClick={handleMenuItemClick}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
            </NavbarMenu>
        </Navbar>
    );
}
