'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function SwiperText() {
    const messages = ["Welcome to ITC Center"];
    // const messages = ["Welcome to ITC Center", "VALUING PEOPLE", "CONTINUOUS IMPROVEMENT", "SYNERGY FOR CORPORATE SUCCESS"];
    // const messages = ["Welcome to ITC Center", "Your One-Stop Solution", "Innovative Solutions for You"];

    return (
        <section id="clients" className="clients section bg-gray-100 py-5">
            <div className="container mx-auto text-4xl font-bold text-red-400 text-center">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3000, // ระยะเวลาหยุดในแต่ละสไลด์ในมิลลิวินาที
                        disableOnInteraction: false, // ไม่หยุดการเล่นอัตโนมัติเมื่อผู้ใช้คลิก
                    }}
                    modules={[Autoplay]}
                    className="init-swiper"
                >
                    {messages.map((message, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <span>{message}</span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
