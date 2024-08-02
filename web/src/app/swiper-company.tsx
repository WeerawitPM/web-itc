'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperCompany() {
    return (
        <section id="clients" className="clients section bg-gray-100 py-5">
            <div className="container mx-auto text-5xl" data-aos="zoom-in">
                <Swiper
                    loop={true}
                    speed={600}
                    autoplay={{
                        delay: 5000,
                    }}
                    slidesPerView="auto"
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 80,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 120,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 120,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="init-swiper"
                >
                    <SwiperSlide className="flex items-center">
                        <Image
                            src="/assets/images/vcst.png"
                            alt="Client 1"
                            width={100}
                            height={100}
                            className="img-fluid"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center">
                        <Image
                            src="/assets/images/vcs.png"
                            alt="Client 2"
                            width={100}
                            height={100}
                            className="img-fluid"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center">
                        <Image
                            src="/assets/images/aaa.png"
                            alt="Client 3"
                            width={100}
                            height={100}
                            className="img-fluid"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center">
                        <Image
                            src="/assets/images/bvs.png"
                            alt="Client 4"
                            width={100}
                            height={100}
                            className="img-fluid"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center">
                        <Image
                            src="/assets/images/bvs.png"
                            alt="Client 4"
                            width={100}
                            height={100}
                            className="img-fluid"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center">
                        <Image
                            src="/assets/images/bvs.png"
                            alt="Client 4"
                            width={100}
                            height={100}
                            className="img-fluid"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center">
                        <Image
                            src="/assets/images/bvs.png"
                            alt="Client 4"
                            width={100}
                            height={100}
                            className="img-fluid"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center">
                        <Image
                            src="/assets/images/bvs.png"
                            alt="Client 4"
                            width={100}
                            height={100}
                            className="img-fluid"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section >
    );
}
