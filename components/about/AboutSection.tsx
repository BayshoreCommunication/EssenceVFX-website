import Image from "next/image";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AboutSection = () => {
  return (
    <div className="relative w-full h-[900px] md:h-[700px] flex items-center justify-center -mt-20">
      <Image
        className="absolute inset-0 object-cover bg-bottom w-full h-full"
        width={1920}
        height={700}
        src={"/assets/about/aboutheroimg.jpg"}
        alt="Bg Image "
      />

      <div className="container relative flex flex-col items-center justify-center w-full mt-36">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h2 className="mt-4 md:mt-6 text-[30px] md:text-[55px] font-semibold text-white text-center leading-tight">
            About
          </h2>
          <p className="text-white text-center text-base lg:text-lg mt-4">
            At EssenceVFX, we've been bringing imagination to life for over a
            decade. Our journey began at an anime convention where we approached
            cosplayers, offering on-the-spot VFX using just a mobile app. What
            started as a fun experiment quickly turned into commissions for more
            advanced projects, allowing us to evolve into the VFX specialists we
            are today.
          </p>
          <p className="text-white text-center text-lg mt-4">
            {`We pride ourselves on our expertise with top-notch software,
            including After Effects, Blender, Unreal Engine, and CapCut. We turn
            to Photoshop and Toon Boom for precision when intricate
            frame-by-frame animation is required. What makes us stand out isn't
            just our technical proficiency. With over 10 years of marketing
            experience under our belts, we approach every VFX project with a
            social media mindset. We don’t just create visually stunning
            effects—we design them to maximise engagement and exposure, giving
            our clients an edge in the fast-paced world of digital content.`}
          </p>

          <p className="text-white text-center text-lg mt-4">
            From our humble beginnings to the advanced VFX solutions we provide
            today, EssenceVFX remains committed to blending creativity,
            technology, and strategy to create lasting impressions.
          </p>
        </ScrollMotionEffect>
      </div>
    </div>
  );
};

export default AboutSection;
