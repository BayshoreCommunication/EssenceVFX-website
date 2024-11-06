import HeroSection from "@/components/home/HeroSection";

export const metadata = {
  title: "EssenceVFX",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet, mauris vitae molestie gravida, libero lorem fermentum elit, eu placerat nunc elit id massa. Morbi interdum lectus ut mauris vehicula",
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
      <HeroSection />
    </section>
  );
}
