import AboutSection from "@/components/about/AboutSection";
import StatsSection from "@/components/about/StatsSection";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import React from "react";

export const metadata = {
  title: "demo metadata",
  description: "demo meta title",
};

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
