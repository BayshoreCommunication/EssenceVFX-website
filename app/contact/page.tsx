import ContactSection from "@/components/contact/ContactSection";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import React from "react";

const page = () => {
  return (
    <div>
      <ScrollMotionEffect>
        <ContactSection />
      </ScrollMotionEffect>
    </div>
  );
};

export default page;
