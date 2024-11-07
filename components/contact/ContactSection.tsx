import React from "react";
import HomeSilderSection from "../shared/HomeSilderSection";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section>
      <div className="bg-secondary lg:bg-white md:bg-gradient-to-l  to-secondary to-45% from-transparent from-55%  overflow-hidden">
        <div className="lg:flex items-start  justify-center lg:justify-between container  pt-[120px] ">
          {/* for mobile (small screens) */}
          <div className="block lg:hidden">
            <div className="mt-6">
              <Image
                className="w-[300px h-auto"
                width={600}
                height={500}
                src={"/assets/home/contact.png"}
                alt="Slider Video"
              />
            </div>
          </div>
          <div className="w-full lg:w-[40%] text-white mb-12 lg:mb-0 mt-12 lg:mt-0">
            <ContactForm />
          </div>

          <div className="hidden lg:block w-[58%] ">
            {/* <div className="relative flex justify-center lg:block">
              <Image
                className="w-[300px h-auto"
                width={600}
                height={500}
                src="/assets/home/video-thum.png"
                alt="Slider Video"
              />
              <p className="text-xl font-semibold absolute top-[5%] right-10">
                Starwars
              </p>
            </div> */}
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
                <div className="relative w-[430px] h-auto -mt-40 cursor-pointer">
                  <Image
                    className="w-full h-auto"
                    width={500}
                    height={500}
                    src={"/assets/home/contact.png"}
                    alt="Slider Video"
                  />
                  {/* <p className="text-xl font-semibold absolute top-[7%] -right-14 text-left w-[50px] ">
                    {el?.categories}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
