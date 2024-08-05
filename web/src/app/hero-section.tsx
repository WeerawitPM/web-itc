"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

type Props = {
  data: {
    attributes: {
      title: string;
      description: string;
      link: string;
      image: {
        data: {
          attributes: {
            url: string;
          };
        }
      }
    };
  };
}

export default function Hero({ data }: Props) {
  const title = data?.attributes?.title || "Not available";
  const description = data?.attributes?.description || "Not available";
  const link = data?.attributes?.link || "Not available";
  const imageUrl = data?.attributes?.image?.data?.attributes?.url ? `${process.env.STRAPI_BASE_IMAGE}${data?.attributes?.image?.data?.attributes?.url}` : "/assets/images/not-found.png";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="home" className="hero section hero-color text-white flex">
      <div className="container mx-auto py-7">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0">
          <div
            className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center"
            data-aos="zoom-out"
          >
            <h1 className="text-5xl font-bold mb-4">
              {title}
            </h1>
            <p className="mb-8 font-bold text-xl text-gray-300">
              {description}
            </p>
            <div className="flex space-x-4">
              <Link href="#company">
                <div className="btn-get-started accent-color text-white px-4 py-2 rounded-full transition">
                  Get Started
                </div>
              </Link>
              <Link
                href={link}
                className="glightbox btn-watch-video flex items-center text-white hover:text-[#47b2e4] transition"
                target="_blank"
              >
                <i className="bi bi-play-circle text-2xl"></i>
                <span className="ml-2">Watch Video</span>
              </Link>
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
                src={imageUrl}
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
