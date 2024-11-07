"use client";
import React, { useRef, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

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

const HomeSilderSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

  return (
    <div className="min-h-screen">
      <div className={`mt-14  px-16 -mb-36`}>
        <div className="lg:flex items-center">
          <button
            ref={prevButtonRef}
            className=" text-black hover:text-gray-900 p-2 bg-white rounded-full shadow-md "
          >
            <IoIosArrowBack className="size-9" />
          </button>
          <Swiper
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            {sliderPortfolioData?.map((el, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-start justify-between container  pt-[120px] -mt-10">
                  <div className="w-[40%] text-white">
                    <div className="">
                      <div className="flex items-center py-4 mt-10">
                        <ul className="flex items-center text-white text-center list-none text-[14px] xl:text-[18px] gap-2 xl:gap-2 font-light ml-0 pl-0">
                          <li className="">
                            <p>{el?.topInfo?.location}</p>
                          </li>
                          <div className="h-5 border-l-2 border-white "></div>
                          <li className="">
                            <p>{el?.topInfo?.date}</p>
                          </li>
                          <div className="h-5 border-l-2 border-white "></div>
                          <li className="">
                            <p>{el?.topInfo?.createBy}</p>
                          </li>
                        </ul>
                      </div>
                      <h1 className="text-xl xl:text-4xl font-extrabold leading-tight pb-3">
                        {el?.title}
                      </h1>

                      <p className="text-sm xl:text-lg font-light leading-tight mt-5">
                        {el?.descriptionOne}
                      </p>
                      <p className="text-sm xl:text-lg font-light leading-tight mt-5">
                        {el?.descriptionTwo}
                      </p>
                      <div className="mt-11 flex items-center cursor-pointer overflow-hidden">
                        <Button
                          className="bg-primary p-4 w-24 h-24 rounded-full"
                          onClick={onOpen}
                        />
                        <p className="text-[22px] font-medium -ml-8 relative z-40">
                          Watch Video
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[58%] relative -mt-10">
                    <div className="relative w-full h-[500px] md:h-[1000px] flex items-center justify-center ">
                      <Image
                        className="absolute inset-0 object-cover bg-center w-full h-full"
                        width={1920}
                        height={700}
                        src={"/assets/home/1111.png"}
                        alt="Bg Image "
                      />

                      {/* Centered text */}

                      <div className="relative flex flex-col items-center justify-center w-full z-40">
                        <div
                          className="relative w-[430px] h-auto -mt-40 cursor-pointer"
                          onClick={onOpen}
                        >
                          <Image
                            className="w-full h-auto"
                            width={500}
                            height={500}
                            src={el?.videoThum}
                            alt="Slider Video"
                          />
                          <p className="text-xl font-semibold absolute top-[7%] -right-14 text-left w-[50px] ">
                            {el?.categories}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className=" text-black hover:text-gray-900 p-2 bg-white rounded-full shadow-large shadow-black border"
            ref={nextButtonRef}
          >
            <IoIosArrowForward className="size-9" />
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent className="w-[400px]">
          {(onClose) => (
            <ModalBody>
              <div className="pt-4 pb-2">
                <InstagramEmbedVideo />
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HomeSilderSection;
