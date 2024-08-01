import Image from "next/image";
export default function Hero() {
    return(
        <section id="hero" className="hero section relative bg-gray-100 py-20">
        <div className="absolute inset-0 w-full h-full z-0 hero-bg">
          <Image src="/assets/images/hero-bg-light.webp" alt="" width={100} height={100} quality={100} unoptimized />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 data-aos="fade-up" className="text-5xl font-bold text-gray-700">
              Welcome to <span className="text-[#388da8]">ITC Center</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-600">
              Quickly start your project now and set the stage for success
              <br />
            </p>
            <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started accent-color text-white py-2 px-4 rounded-full">
                Get Started
              </a>
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox btn-watch-video flex items-center text-gray-700 hover:text-[#388da8]"
              >
                <i className="bi bi-play-circle text-2xl mr-2"></i>
                <span>Watch Video</span>
              </a>
            </div>
            <Image
              src="/assets/images/hero-services-img.webp"
              className="img-fluid hero-img mt-10"
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
              width={600}
              height={400}
              quality={100}
              unoptimized
            />
          </div>
        </div>
      </section>
    );
}