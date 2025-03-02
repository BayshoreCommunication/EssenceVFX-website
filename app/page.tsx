import HeroSection from "@/components/home/HeroSection";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import dynamic from "next/dynamic";

export const metadata = {
  title: "EssenceVFX",
  description:
    "At EssenceVFX, we've been bringing imagination to life for over a decade. Our journey began at an anime convention where we approached cosplayers, offering on-the-spot VFX using just a mobile app. What started as a fun experiment quickly turned into commissions for more advanced projects, allowing us to evolve into the VFX specialists we are today.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <section className="">
      <ScrollMotionEffect>
        <HeroSection />
      </ScrollMotionEffect>
    </section>
  );
}
