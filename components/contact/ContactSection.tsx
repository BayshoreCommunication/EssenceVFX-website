import React from "react";
import Image from "next/image";

import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="bg-secondary lg:bg-transparent relative">
      <div className="absolute -z-10 right-0] xl:right-[1%]  2xl:right-[15%] top-[26%] opacity-80">
        <Image
          alt="Slider Video"
          className="w-[200px] h-auto"
          height={300}
          src={"/assets/home/white-bg-dot.png"}
          width={300}
        />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-x-8 pt-24 pb-10 xl:mb-44 h-auto lg:h-[550px] ">
          <div className=" text-white pb-6 lg:mb-0 pt-12 lg:mt-0  w-full lg:max-w-[550px] ">
            <ContactForm />
          </div>

          <div className="block lg:hidden  w-full ">
            <div className="mt-3 flex justify-center items-center">
              <Image
                alt="Slider Video"
                className="w-[300px] h-auto"
                height={500}
                src={"/assets/home/contact.png?v=2"}
                width={600}
              />
            </div>
          </div>

          <div className="hidden lg:block w-full ">
            <div className="w-full flex items-center justify-center">
              <div className="relative w-[400px] h-[590px] cursor-pointer  group mt-8">
                <Image
                  alt="Slider Video"
                  className="w-full h-auto shadow-5xl z-40 relative drop-shadow-[0_25px_35px_rgba(0,0,0,0.20)]"
                  height={500}
                  src={"/assets/home/contact.png?v=2"}
                  width={500}
                />
                <p className="text-xl font-normal absolute top-[3.5%] left-[100%] text-left  bg-primary w-[25px] h-[70px] group-hover:w-[72px] transition-all duration-300 flex items-center rounded-r-md z-50" />

                <Image
                  alt="Slider Video"
                  className=" z-10  absolute top-[7%] left-[-6%] group-hover:top-[-5%] group-hover:left-[5%] transition-all duration-300"
                  height={300}
                  src={"/assets/home/image-hover-border-new.png"}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
