"use client";
import { useAppContext } from "@/app/AppContext";
import { gallerySilderData } from "@/config/data";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const GalleryPage = () => {
  const memoizedGalleryData = gallerySilderData;

  const [silderIndexValue, setSilderIndexValue] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperRef.current]);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.activeIndex !== silderIndexValue
    ) {
      swiperRef.current.slideTo(currentImageIndex);
    }
  }, [silderIndexValue]);

  const onShowPopUp = useCallback((video: any, image: any) => {
    setVideoUrl(video);
    setImageUrl(image);
  }, []);

  const handleSlideChange = (swiper: any) => {
    // console.log(swiper.activeIndex);
    setCurrentImageIndex(swiper.activeIndex);
    if (swiper.activeIndex >= memoizedGalleryData.length) {
      swiper.slideTo(0); // Reset to the first slide
      setSilderIndexValue(0);
    } else {
      setSilderIndexValue(swiper.activeIndex);
    }
  };
  const handlePrevSlide = () => {
    if (silderIndexValue > 0) {
      setSilderIndexValue(silderIndexValue - 1);
    }
  };

  const handleNextSlide = () => {
    if (silderIndexValue >= gallerySilderData.length - 1) {
      setSilderIndexValue(0); // Reset to the first index
      if (swiperRef.current) {
        swiperRef.current.slideTo(0);
      }
    } else {
      setSilderIndexValue(silderIndexValue + 1);
    }
  };

  return (
    <div className="relative bg-white pt-28 lg:pt-16 pb-8 lg:pb-20">
      <ScrollMotionEffect>
        <h2 className=" text-[30px] md:text-[30px] font-semibold text-black text-center leading-tight mb-6  lg:mb-5">
          Gallery
        </h2>

        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-[0%] relative z-50 left-[0%] lg:-left-24 ">
              <button
                ref={prevButtonRef}
                onClick={(e) => {
                  // e.preventDefault();

                  handlePrevSlide();
                }}
                className="p-2 bg-white lg:bg-transparent z-50 w-[75px] flex items-center justify-center lg:w-[55px] shadow-lg h-[40px] lg:h-[55px] lg:shadow-none"
              >
                <IoIosArrowBack className="size-5 lg:size-9 text-black hover:text-red-500" />
              </button>
            </div>
            <div className="w-[90%] lg:w-[100%]">
              <Swiper
                allowTouchMove={false}
                cssMode={true}
                loop={true} // Enables loop mode
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                speed={800}
                initialSlide={currentImageIndex}
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
                {memoizedGalleryData.map((el, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="cursor-pointer "
                      onClick={(e) => {
                        // Resume autoplay when clicking on an image
                        // e.preventDefault();
                        if (swiperRef.current) {
                          swiperRef.current.swiper.autoplay.start();
                        }
                      }}
                    >
                      <Image
                        // className="w-[422px] h-[485px] transition-all duration-700 ease-in-out"
                        className="w-[422px] h-[435px] md:h-[485px] transition-all duration-700 ease-in-out"
                        width={1000}
                        height={1000}
                        src={el.url}
                        alt={`Gallery Image ${index + 1}`}
                        priority
                        quality={100}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-[0%] relative z-50 right-[17.5%] lg:-right-9 ">
              <button
                ref={nextButtonRef}
                onClick={(e) => {
                  // e.preventDefault();

                  handleNextSlide();
                }}
                className="  p-2 bg-white lg:bg-transparent w-[70px] flex items-center justify-center lg:w-[55px] shadow-lg lg:shadow-none h-[40px] lg:h-[55px]"
              >
                <IoIosArrowForward className="size-5 lg:size-9 text-black hover:text-red-500 " />
              </button>
            </div>
          </div>
        </div>
      </ScrollMotionEffect>
    </div>
  );
};

export default GalleryPage;
