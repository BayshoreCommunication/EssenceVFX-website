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
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { sliderPortfolioData } from "@/config/data";
import InstagramEmbedVideo from "./InstagramEmbedVideo";
import { useAppContext } from "@/app/AppContext";

const HomeSilderSectionForMobile = () => {
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

  const onShowPopUp = (video, image) => {
    setVideoUrl(video);
    setImageUrl(image);
  };

  const handleSlideChange = (swiper) => {
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
      {silderIndexValue !== 0 && (
        <button
          onClick={() => setSilderIndexValue((prev) => prev - 1)}
          ref={prevButtonRef}
          className="absolute left-[2%] 2xl:left-[5%] top-[30%] text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500  rounded-full shadow-md group z-50"
        >
          <IoIosArrowBack className="size-5 text-black group-hover:text-white" />
        </button>
      )}

      {silderIndexValue !== sliderPortfolioData.length - 1 && (
        <button
          onClick={() => setSilderIndexValue((prev) => prev + 1)}
          className="absolute right-[2%] 2xl:right-[5%] top-[30%] text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full shadow-2xl  shadow-black border group z-50"
          ref={nextButtonRef}
        >
          <IoIosArrowForward className="size-5 text-black group-hover:text-white" />
        </button>
      )}

      <div className={`mt-6`}>
        <div className="lg:flex items-center">
          <Swiper
            pagination={{
              clickable: true,
              type: "bullets",
            }}
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
              <SwiperSlide key={index}>
                <motion.div className="container">
                  {/* Centered text */}
                  <div className="w-full mt-32">
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        onOpen();
                        onShowPopUp(el?.videoUrl, el?.videoThum);
                      }}
                    >
                      <Image
                        className="w-full h-auto px-10"
                        width={500}
                        height={500}
                        src={el?.videoThum}
                        alt="Slider Video"
                      />
                    </div>
                  </div>

                  <div className="text-white text-center">
                    <motion.div
                      key={index}
                      initial="hidden"
                      animate={
                        silderIndexValue === index ? "visible" : "hidden"
                      }
                      exit="hidden"
                      variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: { transition: { staggerChildren: 0.1 } },
                      }}
                      className="flex flex-col items-center py-4 mt-10 justify-center"
                    >
                      {/* Top Info */}
                      <motion.ul
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="flex items-center text-white text-center justify-center list-none text-[12px] gap-2 font-light ml-0 pl-0 mb-6"
                      >
                        <li>
                          <p>{el?.topInfo?.location}</p>
                        </li>
                        <div className="h-5 border-l-2 border-white" />
                        <li>
                          <p>{el?.topInfo?.date}</p>
                        </li>
                        <div className="h-5 border-l-2 border-white" />
                        <li>
                          <Link href={`${el?.topInfo?.igUrl}`} target="_blank">
                            <p>{el?.topInfo?.createBy}</p>
                          </Link>
                        </li>
                      </motion.ul>

                      {/* Title */}
                      <motion.h1
                        variants={variants}
                        className="text-4xl font-extrabold leading-tight pb-3"
                      >
                        {el?.title}
                      </motion.h1>

                      {/* Descriptions */}
                      <motion.p
                        variants={variants}
                        className="text-base font-light leading-tight mt-5"
                      >
                        {el?.descriptionOne}
                      </motion.p>
                      <motion.p
                        variants={variants}
                        className="text-base  font-light leading-tight mt-5"
                      >
                        {el?.descriptionTwo}
                      </motion.p>

                      {/* Button and Video Section */}
                      <div className="mx-0 flex justify-center items-center">
                        <motion.div variants={variants} className="">
                          <button
                            className="mt-11 mb-10 flex items-center cursor-pointer group mx-0 "
                            onClick={() => {
                              onOpen();
                              onShowPopUp(el?.videoUrl, el?.videoThum);
                            }}
                          >
                            <div className="bg-primary w-[75px] group-hover:w-[180px] h-[75px] rounded-full transition-all duration-300 relative z-10 group-hover:bg-hoverColor" />

                            <p className="text-[20px] font-medium absolute pl-5 z-20 transition-all duration-300 group-hover:text-hoverColor flex items-center">
                              <IoMdArrowDropright className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white size-6 uppercase" />
                              <span className="text-base">WATCH NOW</span>
                            </p>
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent className="w-[600px]  h-auto">
          {(onClose) => (
            <ModalBody>
              <div className="pt-4 pb-2">
                {/* <InstagramEmbedVideo /> */}
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

export default HomeSilderSectionForMobile;
