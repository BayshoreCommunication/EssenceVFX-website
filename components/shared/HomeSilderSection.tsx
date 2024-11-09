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

const HomeSilderSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [sliderIndex, setSliderIndex] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const heroInfoData = sliderPortfolioData?.find(
    (el, index) => index === sliderIndex // Compare directly with sliderIndex
  );

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

  const onShowPopUp = (video: any, image: any) => {
    setVideoUrl(video);
    setImageUrl(image);
  };

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
    <div className="">
      <div className={`mt-14 px-8 xl:px-10 mb-20`}>
        <div className="lg:flex items-center">
          <button
            ref={prevButtonRef}
            className=" text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500  rounded-full shadow-md group"
          >
            <IoIosArrowBack className="size-9 text-black group-hover:text-white" />
          </button>

          <div className="flex items-start justify-between container pt-14 -mb-24 gap-x-14">
            <div className="w-[42%] text-white">
              <motion.div
                key={sliderIndex}
                className=""
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              >
                <div className="flex items-center py-6 mt-10">
                  <motion.ul
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="flex items-center text-white text-center list-none text-[10px] lg:text-[12px] xl:text-[18px] gap-2 xl:gap-1 font-light ml-0 pl-0"
                  >
                    <li className="">
                      <p>{heroInfoData?.topInfo?.location}</p>
                    </li>
                    <div className="h-5 border-l-2 border-white "></div>
                    <li className="">
                      <p>{heroInfoData?.topInfo?.date}</p>
                    </li>
                    <div className="h-5 border-l-2 border-white "></div>
                    <li className="hover:underline">
                      <Link
                        href={`${heroInfoData?.topInfo?.igUrl}`}
                        target="_blank"
                      >
                        <p>{heroInfoData?.topInfo?.createBy}</p>
                      </Link>
                    </li>
                  </motion.ul>
                </div>

                <motion.h1
                  variants={variants}
                  className="text-xl lg:text-3xl xl:text-4xl font-extrabold leading-tight pb-3"
                >
                  {heroInfoData?.title}
                </motion.h1>

                <motion.p
                  variants={variants}
                  className="text-sm lg:text-base xl:text-lg font-light leading-tight mt-5"
                >
                  {heroInfoData?.descriptionOne}
                </motion.p>

                <motion.p
                  variants={variants}
                  className="text-sm lg:text-base xl:text-lg font-light leading-tight mt-5"
                >
                  {heroInfoData?.descriptionTwo}
                </motion.p>

                <motion.div variants={variants} className="">
                  <button
                    className="mt-11 mb-10 flex items-center cursor-pointer w-[350px] group"
                    onClick={() => {
                      onOpen();
                      onShowPopUp(
                        heroInfoData?.videoUrl,
                        heroInfoData?.videoThum
                      );
                    }}
                  >
                    <div className="bg-primary w-[75px] group-hover:w-[200px] h-[75px] rounded-full transition-all duration-300 relative z-10 group-hover:bg-hoverColor" />

                    <p className="text-[20px] font-medium absolute pl-5 z-20 transition-all duration-300 group-hover:text-hoverColor flex items-center">
                      <IoMdArrowDropright className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white size-6" />
                      Watch Video
                    </p>
                  </button>
                </motion.div>
              </motion.div>
            </div>
            <div className="w-[58%]">
              <Swiper
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setSliderIndex(swiper.activeIndex);
                  // You can use the swiper.activeIndex to store or display the index value
                }}
                className="mySwiper"
              >
                {sliderPortfolioData?.map((el, index) => (
                  <SwiperSlide key={index}>
                    <div className=" relative -mt-10">
                      <div className="relative w-full h-[500px] md:h-[1000px] flex items-center justify-center ">
                        <Image
                          className="absolute inset-0 object-cover bg-center w-full h-full"
                          width={1920}
                          height={700}
                          src={"/assets/home/1111.png"}
                          alt="Bg Image "
                        />

                        <div className="relative flex flex-col items-center justify-center w-full z-40">
                          <ScrollMotionEffect
                            effect="fade-left"
                            duration="2000"
                          >
                            <div
                              className="relative w-[430px] h-auto -mt-40 cursor-pointer  group"
                              onClick={() => {
                                onOpen();
                                onShowPopUp(el?.videoUrl, el?.videoThum);
                              }}
                            >
                              <Image
                                className="w-full h-auto"
                                width={500}
                                height={500}
                                src={el?.videoThum}
                                alt="Slider Video"
                              />
                              <p className="text-xl font-normal absolute top-[3.5%] left-[100%] text-left  bg-primary w-[1px] h-[70px] group-hover:w-[100px] transition-all duration-300 flex items-center rounded-r-md">
                                <span className="pl-1.5">{el?.categories}</span>
                              </p>
                            </div>
                          </ScrollMotionEffect>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <button
            className=" text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full shadow-2xl  shadow-black border group"
            ref={nextButtonRef}
          >
            <IoIosArrowForward className="size-9 text-black group-hover:text-white" />
          </button>
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
