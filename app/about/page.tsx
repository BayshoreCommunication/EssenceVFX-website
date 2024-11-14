import AboutSection from "@/components/about/AboutSection";
import StatsSection from "@/components/about/StatsSection";

import React from "react";

export const metadata = {
  title: "demo metadata",
  description: "demo meta title",
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
