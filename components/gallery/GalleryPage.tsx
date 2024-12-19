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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const memoizedGalleryData = useMemo(() => gallerySilderData, []);

  const { silderIndexValue, setSilderIndexValue } = useAppContext();
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
  }, [currentImageIndex]);

  // Sync Swiper with `silderIndexValue` smoothly
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.activeIndex !== silderIndexValue
    ) {
      swiperRef.current.slideTo(silderIndexValue);
    }
  }, [silderIndexValue]);

  const onShowPopUp = useCallback((video: any, image: any) => {
    setVideoUrl(video);
    setImageUrl(image);
  }, []);

  // const handleSlideChange = useCallback(
  //   (swiper: any) => {
  //     if (swiper.activeIndex >= memoizedGalleryData.length) {
  //       swiper.slideTo(0); // Reset to the first slide
  //       setSilderIndexValue(0);
  //     } else {
  //       setSilderIndexValue(swiper.activeIndex);
  //     }
  //   },
  //   [memoizedGalleryData.length, setSilderIndexValue]
  // );

  // const handlePrevSlide = useCallback(() => {
  //   if (silderIndexValue > 0) {
  //     setSilderIndexValue((prev: number) => prev - 1);
  //   }
  // }, [silderIndexValue]);

  // const handleNextSlide = useCallback(() => {
  //   if (silderIndexValue >= gallerySilderData.length - 1) {
  //     setSilderIndexValue(0); // Reset to the first index
  //     if (swiperRef.current) {
  //       swiperRef.current.slideTo(0);
  //     }
  //   } else {
  //     setSilderIndexValue((prev: number) => prev + 1);
  //   }
  // }, [silderIndexValue, memoizedGalleryData.length]);
  const handleSlideChange = (swiper: any) => {
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
      setSilderIndexValue((prev: number) => prev - 1);
    }
  };

  const handleNextSlide = () => {
    if (silderIndexValue >= gallerySilderData.length - 1) {
      setSilderIndexValue(0); // Reset to the first index
      if (swiperRef.current) {
        swiperRef.current.slideTo(0);
      }
    } else {
      setSilderIndexValue((prev: number) => prev + 1);
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
                onClick={() => setSilderIndexValue((prev: any) => prev - 1)}
                className="p-2 bg-white lg:bg-transparent z-50 w-[75px] flex items-center justify-center lg:w-[55px] shadow-lg h-[40px] lg:h-[55px] lg:shadow-none"
              >
                <IoIosArrowBack className="size-5 lg:size-9 text-black hover:text-red-500" />
              </button>
            </div>
            <div className="w-[80%] lg:w-[100%]">
              <Swiper
                allowTouchMove={false}
                cssMode={true}
                loop={true} // Enables loop mode
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={800}
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
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {memoizedGalleryData.map((el, index) => (
                  <SwiperSlide key={el.url || index}>
                    <div
                      className="cursor-pointer w-[80%]"
                      onClick={() => {
                        // Resume autoplay when clicking on an image
                        if (swiperRef.current) {
                          swiperRef.current.swiper.autoplay.start();
                        }
                      }}
                    >
                      <Image
                        // className="w- h-full
                        //  transition-all duration-700 ease-in-out"
                        className=" transition-all duration-700 ease-in-out"
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
                onClick={() => setSilderIndexValue((prev: number) => prev + 1)}
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
