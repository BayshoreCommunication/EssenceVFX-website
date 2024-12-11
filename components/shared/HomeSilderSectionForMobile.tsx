"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useAppContext } from "@/app/AppContext";
import { sliderPortfolioData } from "@/config/data";

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
      {silderIndexValue !== 0 && (
        <button
          ref={prevButtonRef}
          className="absolute left-[2%] 2xl:left-[5%] top-[30%] text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500  rounded-full shadow-md group z-50"
          onClick={() => setSilderIndexValue((prev: any) => prev - 1)}
        >
          <IoIosArrowBack className="size-5 text-black group-hover:text-white" />
        </button>
      )}

      {silderIndexValue !== sliderPortfolioData.length - 1 && (
        <button
          ref={nextButtonRef}
          className="absolute right-[2%] 2xl:right-[5%] top-[30%] text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full shadow-2xl  shadow-black border group z-50"
          onClick={() => setSilderIndexValue((prev: any) => prev + 1)}
        >
          <IoIosArrowForward className="size-5 text-black group-hover:text-white" />
        </button>
      )}

      <div className={`mt-6`}>
        <div className="lg:flex items-center">
          <Swiper
            className="mySwiper"
            cssMode={true}
            initialSlide={silderIndexValue}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            mousewheel={true}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
          >
            {sliderPortfolioData?.map((el, index) => (
              <SwiperSlide key={index}>
                <motion.div className="container  overflow-hidden">
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
                        alt="Slider Video"
                        className="w-full h-auto px-10"
                        height={500}
                        src={el?.videoThum}
                        width={500}
                      />
                    </div>
                  </div>

                  <div className="text-white text-center">
                    <motion.div
                      key={index}
                      animate={
                        silderIndexValue === index ? "visible" : "hidden"
                      }
                      className="flex flex-col items-center py-4 mt-10 justify-center"
                      exit="hidden"
                      initial="hidden"
                      variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: { transition: { staggerChildren: 0.1 } },
                      }}
                    >
                      {/* Top Info */}
                      <motion.ul
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center text-white text-center justify-center list-none text-[12px] gap-2 font-normal ml-0 pl-0 mb-6  uppercase"
                        initial={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <li>
                          <p>{el?.topInfo?.location}</p>
                        </li>
                        <div className="h-3 border-l-2 border-white" />
                        <li>
                          <p>{el?.topInfo?.date}</p>
                        </li>
                        <div className="h-3 border-l-2 border-white" />
                        <li>
                          <Link href={`${el?.topInfo?.igUrl}`} target="_blank">
                            <p>{el?.topInfo?.createBy}</p>
                          </Link>
                        </li>
                      </motion.ul>

                      {/* Title */}
                      <motion.h1
                        className="text-4xl font-extrabold leading-tight pb-3"
                        variants={variants}
                      >
                        {el?.title}
                      </motion.h1>

                      {/* Descriptions */}
                      <motion.p
                        className="text-[14px] font-normal leading-tight mt-5"
                        variants={variants}
                      >
                        {el?.descriptionOne}
                      </motion.p>
                      <motion.p
                        className="text-base  font-light leading-tight mt-5"
                        variants={variants}
                      >
                        {el?.descriptionTwo}
                      </motion.p>

                      {/* Button and Video Section */}
                      <div className=" flex justify-center items-center -ml-6">
                        <motion.div className="" variants={variants}>
                          <button
                            className="mt-8 mb-12 flex items-center cursor-pointer group mx-0"
                            onClick={() => {
                              onOpen();
                              onShowPopUp(el?.videoUrl, el?.videoThum);
                            }}
                          >
                            <div className="bg-primary w-[65px] group-hover:w-[180px] h-[65px] rounded-full transition-all duration-300 relative z-10 group-hover:bg-hoverColor" />

                            <p className="text-[20px] font-medium absolute pl-5 z-20 transition-all duration-300 group-hover:text-hoverColor flex items-center">
                              <IoMdArrowDropright className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white size-6 uppercase" />
                              <span className="text-sm font-[501] -ml-6 w-[120px]">
                                WATCH NOW
                              </span>
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
      <Modal isOpen={isOpen} size="sm" onOpenChange={onOpenChange}>
        <ModalContent className="w-[600px]  h-auto">
          {(onClose) => (
            <ModalBody>
              <div className="pt-4 pb-2">
                {/* <InstagramEmbedVideo /> */}
                <video
                  autoPlay
                  controls
                  muted
                  playsInline
                  className="mx-auto"
                  height={600}
                  poster={imageUrl}
                  preload="metadata"
                  src={videoUrl}
                  width={200}
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
