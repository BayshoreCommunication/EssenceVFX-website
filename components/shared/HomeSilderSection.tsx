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

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { sliderPortfolioData } from "@/config/data";
import InstagramEmbedVideo from "./InstagramEmbedVideo";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { useAppContext } from "@/app/AppContext";

const HomeSilderSection = () => {
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

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 35,
      },
    },
  };

  return (
    <div className="relative">
      <div className="absolute -z-10 right-0] xl:right-[1%]  2xl:right-[15%] top-[26%] opacity-80">
        <Image
          className="w-[200px] h-auto"
          width={300}
          height={300}
          src={"/assets/home/white-bg-dot.png"}
          alt="Slider Video"
        />
      </div>

      {silderIndexValue !== 0 && (
        <div>
          <button
            ref={prevButtonRef}
            onClick={() => setSilderIndexValue((prev: any) => prev - 1)} // Decrement index
            className="absolute left-[2%] 2xl:left-[5%] top-[60%] text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full shadow-md group z-50"
          >
            <IoIosArrowBack className="size-9 text-black group-hover:text-white" />
          </button>
        </div>
      )}

      {silderIndexValue !== sliderPortfolioData.length - 1 && (
        <button
          ref={nextButtonRef}
          onClick={() => setSilderIndexValue((prev: any) => prev + 1)} // Increment index
          className="absolute right-[2%] 2xl:right-[5%] top-[60%] text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full shadow-2xl shadow-black border group z-50"
        >
          <IoIosArrowForward className="size-9 text-black group-hover:text-white" />
        </button>
      )}

      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center gap-x-0  pt-24 mb-40 h-[600px] ">
          <div className="max-w-[510px]">
            <motion.div
              key={silderIndexValue}
              className=""
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.7 } }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <div className="flex items-center py-6">
                <motion.ul
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`flex items-center text-white text-center list-none text-[12px] lg:text-[14px] xl:text-[15px] gap-2 xl:gap-4 font-normal ml-0 pl-0`}
                >
                  <li>
                    <p className="uppercase">
                      {heroInfoData?.topInfo?.location}
                    </p>
                  </li>
                  <div className="h-4 border-l-2 border-white"></div>
                  <li>
                    <p className="uppercase">{heroInfoData?.topInfo?.date}</p>
                  </li>
                  <div className="h-4 border-l-2 border-white"></div>
                  <li className="hover:underline">
                    <Link
                      href={`${heroInfoData?.topInfo?.igUrl}`}
                      target="_blank"
                    >
                      <p className="uppercase">
                        {heroInfoData?.topInfo?.createBy}
                      </p>
                    </Link>
                  </li>
                </motion.ul>
              </div>

              <motion.h1
                variants={variants}
                className="text-xl lg:text-5xl xl:text-7xl font-bold leading-tight pb-2 text-white"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {heroInfoData?.title}
              </motion.h1>

              <motion.h1
                variants={variants}
                className="text-lg lg:text-xl xl:text-3xl font-medium leading-tight pb-3 text-white"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {heroInfoData?.subTitle}
              </motion.h1>

              <motion.p
                variants={variants}
                className={`text-[12px] lg:text-[14px] xl:text-[15px] font-normal leading-relaxed mt-5 text-white`}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              >
                {heroInfoData?.descriptionOne}
              </motion.p>

              <motion.div
                variants={variants}
                className="flex items-center justify-center"
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.15 }}
              >
                <button
                  className="mt-11 mb-10 flex items-center cursor-pointer w-[350px] group text-white"
                  onClick={() => {
                    onOpen();
                    onShowPopUp(
                      heroInfoData?.videoUrl,
                      heroInfoData?.videoThum
                    );
                  }}
                >
                  <div className="bg-primary w-[70px] group-hover:w-[175px] h-[70px] rounded-full transition-all duration-200 relative z-10 group-hover:bg-hoverColor" />
                  <div className="absolute pl-5 z-20 transition-all duration-200 group-hover:text-hoverColor flex items-center">
                    <IoMdArrowDropright className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white size-6 uppercase" />
                    <p className="text-sm font-[501]">WATCH NOW</p>
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full">
            <Swiper
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              initialSlide={silderIndexValue}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={handleSlideChange}
              className="mySwiper"
            >
              {sliderPortfolioData?.map((el, index) => (
                <SwiperSlide key={index} className="">
                  <div className="flex items-center justify-center">
                    <div
                      className="relative w-[400px] h-[562px] cursor-pointer  group mt-8"
                      onClick={() => {
                        onOpen();
                        onShowPopUp(el?.videoUrl, el?.videoThum);
                      }}
                    >
                      <Image
                        className="w-full h-auto shadow-5xl z-40 relative drop-shadow-2xl"
                        width={500}
                        height={500}
                        src={el?.videoThum}
                        alt="Slider Video"
                      />
                      <p
                        className={`text-sm font-bold absolute top-[3.5%] left-[100%] text-left bg-primary w-[35px] h-[70px] group-hover:w-[72px] transition-all duration-300 flex items-center rounded-r-md z-50`}
                      >
                        <span className="pl-0.5 text-secondary font-semibold text-[11px] uppercase text-center ">
                          {el?.categories}
                        </span>
                      </p>

                      <Image
                        className=" z-10  absolute top-[7%] left-[-6%] group-hover:top-[-5%] group-hover:left-[5%] transition-all duration-300"
                        width={500}
                        height={300}
                        src={"/assets/home/image-hover-border-new.png"}
                        alt="Slider Video"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent className="w-[600px]  h-auto">
          {(onClose) => (
            <ModalBody>
              <div className="pt-4 pb-2">
                <video
                  autoPlay
                  src={videoUrl}
                  muted
                  preload="metadata"
                  className="mx-auto"
                  width={200}
                  height={600}
                  playsInline
                  controls
                  poster={imageUrl}
                />
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HomeSilderSection;
