import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeSilderSection from "../shared/HomeSilderSection";
import HomeSilderSectionForMobile from "../shared/HomeSilderSectionForMobile";

const HeroSection = () => {
  return (
    <section>
      <div className="bg-secondary lg:bg-white md:bg-gradient-to-l  to-secondary to-45% from-transparent from-55%  overflow-hidden">
        {/* for web (larger screens) */}
        <div className="hidden lg:block min-h-screen">
          <HomeSilderSection />
        </div>

        {/* for mobile (small screens) */}
        <div className="block lg:hidden">
          <HomeSilderSectionForMobile />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// video-thum.png
