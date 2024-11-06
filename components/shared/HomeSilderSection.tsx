"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const HomeSilderSection = () => {
  // Refs for navigation buttons
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Attach the navigation buttons to Swiper when it’s initialized
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className={`mx-14`}>
      <div className="flex items-center">
        <button
          ref={prevButtonRef}
          className=" text-black hover:text-gray-900 p-2 bg-white rounded-full shadow-md"
        >
          <IoIosArrowBack className="size-9" />
        </button>
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5].map((el, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-between container  pt-[120px] pb-20">
                <div className="w-[40%] text-white">
                  <div className="">
                    <div className="flex items-center py-4">
                      <ul className="flex items-center text-white text-center list-none text-[16px] md:text-[18px] gap-3 md:gap-4 font-light ml-0 pl-0">
                        <li className="">
                          <Link href="#" className="">
                            <p>USA</p>
                          </Link>
                        </li>
                        <div className="h-5 border-l-2 border-white "></div>
                        <li className="">
                          <Link
                            href="privacy-policy"
                            className="hover:underline"
                          >
                            <p>May 1 2024</p>
                          </Link>
                        </li>
                        <div className="h-5 border-l-2 border-white "></div>
                        <li className="">
                          <Link
                            href="/terms-of-use"
                            className="hover:underline"
                          >
                            <p>bboyswirv & kianadaigneault</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h1 className="text-6xl font-extrabold leading-tight pb-3">
                      Double Blade Lightsaber vs Blaster Fight
                    </h1>

                    <p className="text-lg font-normal leading-tight mt-5">
                      During Star Wars Week, we had a blast (literally) with an
                      epic showdown that put a double-bladed lightsaber up
                      against blasters! 🎬 Huge shoutout to Kiana Daigneault for
                      the incredible lightsaber work and David Hernandez behind
                      the camera capturing every thrilling moment. Special
                      thanks to Bboy Swirv for the slick editing that brought it
                      all together, and much love to Cosplay Powers for pulling
                      up and delivering top-notch VFX magic! You’ve got to check
                      them out if you're in need of some epic visual effects.
                      Also, thanks to This Guy's Audio for the enhanced audio
                      SFX that made every clash and blaster shot come to life.
                      🔊
                    </p>
                    <p className="text-lg font-normal leading-tight mt-5">
                      Looking for your own battle-ready lightsaber? Be sure to
                      check out @byolightsaber for the coolest lightsabers in
                      the galaxy, perfect for all your epic duels! 🚀 This video
                      reached over 73,000 viewers and counting, so join in on
                      the fun!
                    </p>
                    <div className="mt-14">
                      <div className="bg-primary p-10 rounded-full size-28 relative cursor-pointer">
                        <p className="absolute -right-24 text-[28px] font-medium">
                          Watch Video
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[58%] relative">
                  <Image
                    className=""
                    width={1200}
                    height={700}
                    src="/assets/home/video-thum.png"
                    alt="Slider Video"
                  />
                  <p className="text-xl font-semibold absolute top-[5%] right-0">
                    Starwars
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className=" text-black hover:text-gray-900 p-2 bg-white rounded-full shadow-large shadow-black border"
          ref={nextButtonRef}
        >
          <IoIosArrowForward className="size-9" />
        </button>
      </div>
    </div>
  );
};

export default HomeSilderSection;
