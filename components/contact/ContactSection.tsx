import React from "react";
import HomeSilderSection from "../shared/HomeSilderSection";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section>
      <div className="bg-gradient-to-l  to-secondary to-45% from-transparent from-55%  overflow-hidden">
        <div className="flex items-start justify-between container  pt-[120px] ">
          <div className="w-[40%] text-white">
            <ContactForm />
          </div>
          <div className="w-[58%] relative flex justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
