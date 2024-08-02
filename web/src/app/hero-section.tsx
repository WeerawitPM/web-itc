"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="hero" className="hero section hero-color text-white flex">
      <div className="container mx-auto py-7">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0">
          <div
            className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center"
            data-aos="zoom-out"
          >
            <h1 className="text-5xl font-bold mb-4">
              Better Solutions For Your Business
            </h1>
            <p className="mb-8 font-bold text-xl text-gray-300">
              We are a team of talented designers making websites with Bootstrap
            </p>
            <div className="flex space-x-4">
              <Link href="#about">
                <div className="btn-get-started accent-color text-white px-4 py-2 rounded-full transition">
                  Get Started
                </div>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox btn-watch-video flex items-center text-white hover:text-[#47b2e4] transition"
              >
                <i className="bi bi-play-circle text-2xl"></i>
                <span className="ml-2">Watch Video</span>
              </a>
            </div>
          </div>
          <div
            className="lg:w-1/2 order-1 lg:order-2"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <motion.div
              className="img-fluid"
              animate={{
                y: ["0px", "-20px", "0px"], // เคลื่อนที่ขึ้นและลง
              }}
              transition={{
                duration: 5, // ระยะเวลาในการเคลื่อนที่
                repeat: Infinity, // ทำการเคลื่อนที่ซ้ำไปเรื่อยๆ
                repeatType: "loop", // การทำซ้ำแบบลูป
                ease: "easeInOut", // ความเร็วของการเคลื่อนที่
              }}
            >
              <Image
                src="/assets/images/hero-services-img.webp"
                alt="Hero Image"
                width={500}
                height={500}
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
