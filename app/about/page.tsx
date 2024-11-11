import AboutSection from "@/components/about/AboutSection";
import StatsSection from "@/components/about/StatsSection";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import React from "react";

const page = () => {
  return (
    <div>
      <ScrollMotionEffect>
        <AboutSection />
        <StatsSection />
      </ScrollMotionEffect>
    </div>
  );
};

export default page;
