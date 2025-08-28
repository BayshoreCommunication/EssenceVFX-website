"use client";
import React, { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ScrollMotionEffectProps {
  children: ReactNode;
}

const ScrollMotionEffect: React.FC<ScrollMotionEffectProps> = ({
  children,
}) => {
  useEffect(() => {
    console.log("Initializing AOS");
    AOS.init();
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      className=""
      data-aos="fade-zoom-in"
      data-aos-easing="ease-out"
      data-aos-delay="100"
      data-aos-offset="50"
      data-aos-duration="800"
    >
      {children}
    </div>
  );
};

export default ScrollMotionEffect;
