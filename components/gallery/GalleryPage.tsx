"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { sliderPortfolioData } from "@/config/data";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { useAppContext } from "@/app/AppContext";

const GalleryPage = () => {
  const { silderIndexValue, setSilderIndexValue } = useAppContext();
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  // Attach Swiper navigation on initialization
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  // Sync Swiper with `silderIndexValue` from context smoothly
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.activeIndex !== silderIndexValue
    ) {
      swiperRef.current.slideTo(silderIndexValue);
    }
  }, [silderIndexValue]);

  const onShowPopUp = (video: any, image: any) => {
    setVideoUrl(video);
    setImageUrl(image);
  };

  const handleSlideChange = (swiper: any) => {
    setSilderIndexValue(swiper.activeIndex);
  };

  const heroInfoData = sliderPortfolioData?.find(
    (el, index) => index === silderIndexValue
  );

  return (
    <div className="relative bg-white pt-28 lg:pt-36 pb-8 lg:pb-24">
      <ScrollMotionEffect>
        <h2 className=" text-[30px] md:text-[55px] font-semibold text-black text-center leading-tight mb-6  lg:mb-12">
          Gallery
        </h2>

        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-[0%] relative z-50 left-1 lg:-left-7">
              <div>
                <button
                  ref={prevButtonRef}
                  onClick={() => setSilderIndexValue((prev: any) => prev - 1)} // absolute left-[1%] lg:left-[8%] xl:left-[14%] 2xl:left-[17%] top-[60%]
                  className=" text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full shadow-md group z-50"
                >
                  <IoIosArrowBack className="size-5 lg:size-9 text-black group-hover:text-white" />
                </button>
              </div>
            </div>
            <div className="w-[90%] lg:w-[100%]">
              <Swiper
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                }}
                initialSlide={silderIndexValue}
                modules={[
                  Autoplay,
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Keyboard,
                ]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={handleSlideChange}
                className="mySwiper"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {sliderPortfolioData?.map((el, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="cursor-pointer">
                      <Image
                        className="w-full h-auto"
                        width={500}
                        height={500}
                        src={el?.videoThum}
                        alt="Slider Video"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-[0%] relative z-50 right-10 lg:right-7">
              <button
                ref={nextButtonRef}
                onClick={() => setSilderIndexValue((prev: any) => prev + 1)} //absolute right-[1%] lg:right-[8%]  xl:right-[12%]  2xl:right-[17%] top-[60%]
                className=" text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full  shadow-black border group z-50"
              >
                <IoIosArrowForward className="size-5 lg:size-9 text-black group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </ScrollMotionEffect>
    </div>
  );
};

export default GalleryPage;
