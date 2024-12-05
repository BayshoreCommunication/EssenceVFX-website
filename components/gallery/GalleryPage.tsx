"use client";
import { useDisclosure } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

import { useAppContext } from "@/app/AppContext";
import { gallerySilderData } from "@/config/data";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

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

  const heroInfoData = gallerySilderData?.find(
    (el, index) => index === silderIndexValue
  );

  return (
    <div className="relative bg-white pt-28 lg:pt-20 pb-8 lg:pb-20">
      <ScrollMotionEffect>
        <h2 className=" text-[30px] md:text-[40px] font-semibold text-black text-center leading-tight mb-6  lg:mb-8">
          Gallery
        </h2>

        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-[0%] relative z-50 left-1 lg:-left-7">
              <div>
                {silderIndexValue !== 0 && (
                  <button
                    ref={prevButtonRef}
                    onClick={() => setSilderIndexValue((prev: any) => prev - 1)}
                    className=" text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full shadow-md group z-50"
                  >
                    <IoIosArrowBack className="size-5 lg:size-9 text-black group-hover:text-white" />
                  </button>
                )}
              </div>
            </div>
            <div className="w-[90%] lg:w-[100%]">
              <Swiper
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                // loop={true}
                autoplay={{
                  delay: 3000, // Adjust the delay for smoothness
                  disableOnInteraction: false, // Continue autoplay after interaction
                }}
                speed={800} // Set transition speed
                initialSlide={silderIndexValue}
                effect="slide" // Smooth slide effect
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
                {gallerySilderData?.map((el, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="cursor-pointer">
                      <Image
                        className="w-[422px] h-[500px] transition-all duration-700 ease-in-out"
                        width={1000}
                        height={1000}
                        src={el?.url}
                        alt={el?.url}
                        quality={100}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-[0%] relative z-50 right-10 lg:right-7">
              {silderIndexValue !== gallerySilderData.length - 1 && (
                <button
                  ref={nextButtonRef}
                  onClick={() => setSilderIndexValue((prev: any) => prev + 1)}
                  className=" text-black hover:text-gray-900 p-2 bg-white hover:bg-gray-500 rounded-full  shadow-black border group z-50"
                >
                  <IoIosArrowForward className="size-5 lg:size-9 text-black group-hover:text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </ScrollMotionEffect>
    </div>
  );
};

export default GalleryPage;
