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

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { sliderPortfolioData } from "@/config/data";
import InstagramEmbedVideo from "./InstagramEmbedVideo";

const HomeSilderSectionForMobile = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
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
    hidden: { opacity: 0, y: 20 }, // Hidden state (optional y-axis movement)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex); // Update the current index
  };

  return (
    <div className="">
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
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange} // Trigger slide change event
            className="mySwiper"
          >
            {sliderPortfolioData?.map((el, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial="hidden"
                  animate={currentIndex === index ? "visible" : "hidden"} // Animate on index match
                  exit="hidden"
                  variants={variants}
                  className="container"
                >
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
                        className="w-full h-auto"
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
                      animate={currentIndex === index ? "visible" : "hidden"}
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
                        className="flex items-center text-white text-center justify-center list-none text-[16px] md:text-[18px] gap-3 font-light ml-0 pl-0 mb-6"
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
                        className="text-lg font-light leading-tight mt-5"
                      >
                        {el?.descriptionOne}
                      </motion.p>
                      <motion.p
                        variants={variants}
                        className="text-lg font-light leading-tight mt-5"
                      >
                        {el?.descriptionTwo}
                      </motion.p>

                      {/* Button and Video Section */}
                      <motion.div
                        variants={variants}
                        className="mt-11 pb-24 flex items-center cursor-pointer overflow-hidden justify-center mx-auto"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <Button
                            className="bg-primary p-4 w-24 h-24 rounded-full"
                            onClick={() => {
                              onOpen();
                              onShowPopUp(el?.videoUrl, el?.videoThum);
                            }}
                          />
                        </motion.div>
                        <p className="text-[22px] font-medium -ml-8 relative z-40">
                          Watch Video
                        </p>
                      </motion.div>
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
