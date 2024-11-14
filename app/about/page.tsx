import AboutSection from "@/components/about/AboutSection";
import StatsSection from "@/components/about/StatsSection";

import React from "react";

export const metadata = {
  title: "EssenceVFX",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet, mauris vitae molestie gravida, libero lorem fermentum elit, eu placerat nunc elit id massa. Morbi interdum lectus ut mauris vehicula",
};

const page = () => {
  return (
    <div className="overflow-y-hidden">
      <AboutSection />
      <StatsSection />
    </div>
  );
};

export default page;
