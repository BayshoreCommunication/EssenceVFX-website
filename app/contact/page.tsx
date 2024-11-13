import ContactSection from "@/components/contact/ContactSection";
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
        <ContactSection />
      </ScrollMotionEffect>
    </div>
  );
};

export default page;
