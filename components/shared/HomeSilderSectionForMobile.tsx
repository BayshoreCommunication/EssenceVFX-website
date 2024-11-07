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

  return (
    <div className="">
      <div className={`mt-6`}>
        <div className="lg:flex items-center">
          <Swiper
            pagination={{
              clickable: true, // Allows pagination to be clickable
              type: "bullets", // You can also use 'progressbar', 'fraction', etc.
            }}
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
                <div className="container">
                  <div className="">
                    {/* Centered text */}

                    <div className="w-full mt-32">
                      <div
                        className=" cursor-pointer"
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
                  </div>
                  <div className=" text-white text-center">
                    <div className="">
                      <div className="flex items-center py-4 mt-10 justify-center">
                        <ul className="flex items-center text-white text-center justify-center list-none text-[16px] md:text-[18px] gap-3 font-light ml-0 pl-0">
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
                      <h1 className="text-4xl font-extrabold leading-tight pb-3">
                        {el?.title}
                      </h1>

                      <p className="text-lg font-light leading-tight mt-5">
                        {el?.descriptionOne}
                      </p>
                      <p className="text-lg font-light leading-tight mt-5">
                        {el?.descriptionTwo}
                      </p>
                      <div className="mt-11 pb-24 flex items-center cursor-pointer overflow-hidden justify-center mx-auto">
                        <Button
                          className="bg-primary p-4 w-24 h-24 rounded-full"
                          onClick={() => {
                            onOpen();
                            onShowPopUp(el?.videoUrl, el?.videoThum);
                          }}
                        />
                        <p className="text-[22px] font-medium -ml-8 relative z-40">
                          Watch Video
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent className="w-[600px]">
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
                  height={50}
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
