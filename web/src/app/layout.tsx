import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s - ITC Center",
  },
  description: "This is my home page of ITC Center",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <ChakraProvider>
            <Navbar />
            {children}
          </ChakraProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
