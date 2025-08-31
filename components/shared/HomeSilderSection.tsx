"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropright,
} from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAppContext } from "@/app/AppContext";
import { sliderPortfolioData } from "@/config/data";

const HomeSilderSection = () => {
  const { silderIndexValue, setSilderIndexValue } = useAppContext();
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onOpenChange = (open: boolean) => setIsOpen(open);

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
          alt="Slider Video"
          className="w-[200px] h-auto"
          height={300}
          src={"/assets/home/white-bg-dot.png"}
          width={300}
        />
      </div>

      {silderIndexValue !== 0 && (
        <div>
          <button
            ref={prevButtonRef}
            className="absolute left-[2%] 2xl:left-[5%] top-[60%] text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full shadow-md group z-50"
            onClick={() => setSilderIndexValue((prev: any) => prev - 1)} // Decrement index
          >
            <IoIosArrowBack className="size-9 text-black group-hover:text-white" />
          </button>
        </div>
      )}

      {silderIndexValue !== sliderPortfolioData.length - 1 && (
        <button
          ref={nextButtonRef}
          className="absolute right-[2%] 2xl:right-[5%] top-[60%] text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full shadow-2xl shadow-black border group z-50"
          onClick={() => setSilderIndexValue((prev: any) => prev + 1)} // Increment index
        >
          <IoIosArrowForward className="size-9 text-black group-hover:text-white" />
        </button>
      )}

      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center gap-x-0  pt-24 mb-40 h-[600px] ">
          <div className="max-w-[510px]">
            <motion.div
              key={silderIndexValue}
              animate="visible"
              className=""
              exit={{ opacity: 0, transition: { duration: 0.7 } }}
              initial="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <div className="flex items-center py-6">
                <motion.ul
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex items-center text-white text-center list-none text-[12px] lg:text-[14px] xl:text-[15px] gap-2 xl:gap-4 font-normal ml-0 pl-0`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <li>
                    <p className="uppercase">
                      {heroInfoData?.topInfo?.location}
                    </p>
                  </li>
                  <div className="h-4 border-l-2 border-white" />
                  <li>
                    <p className="uppercase">{heroInfoData?.topInfo?.date}</p>
                  </li>
                  <div className="h-4 border-l-2 border-white" />
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
                className="text-xl lg:text-5xl xl:text-7xl font-bold leading-tight pb-2 text-white"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={variants}
              >
                {heroInfoData?.title}
              </motion.h1>

              <motion.h1
                className="text-lg lg:text-xl xl:text-3xl font-medium leading-tight pb-3 text-white"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={variants}
              >
                {heroInfoData?.subTitle}
              </motion.h1>

              <motion.p
                className={`text-[12px] lg:text-[14px] xl:text-[15px] font-normal leading-relaxed mt-5 text-white`}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                variants={variants}
              >
                {heroInfoData?.descriptionOne}
              </motion.p>

              <motion.div
                className="flex items-center justify-center"
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.15 }}
                variants={variants}
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
              className="mySwiper"
              cssMode={true}
              initialSlide={silderIndexValue}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              mousewheel={true}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={handleSlideChange}
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
                        alt="Slider Video"
                        className="w-full h-auto shadow-5xl z-40 relative drop-shadow-2xl"
                        height={500}
                        src={el?.videoThum}
                        width={500}
                      />
                      <p
                        className={`text-sm font-bold absolute top-[3.5%] left-[100%] text-left bg-primary w-[35px] h-[70px] group-hover:w-[72px] transition-all duration-300 flex items-center rounded-r-md z-50`}
                      >
                        <span className="pl-0.5 text-secondary font-semibold text-[11px] uppercase text-center ">
                          {el?.categories}
                        </span>
                      </p>

                      <Image
                        alt="Slider Video"
                        className=" z-10  absolute top-[7%] left-[-6%] group-hover:top-[-5%] group-hover:left-[5%] transition-all duration-300"
                        height={300}
                        src={"/assets/home/image-hover-border-new.png"}
                        width={500}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => onOpenChange(false)}
        >
          <div
            className="w-[600px] h-auto bg-white rounded-lg shadow-xl p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
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
        </div>
      )}
    </div>
  );
};

export default HomeSilderSection;
