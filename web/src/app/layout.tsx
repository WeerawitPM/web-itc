import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'
import "aos/dist/aos.css";
import Footer from "@/components/footer";

const prompt = Prompt({ subsets: ["thai"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s - ITC Center",
  },
  description: "This is my home page of ITC Center",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={prompt.className}>
        <NextUIProvider>
          <ChakraProvider>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
