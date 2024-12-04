import GalleryPage from "@/components/gallery/GalleryPage";

export const metadata = {
  title: "EssenceVFX",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet, mauris vitae molestie gravida, libero lorem fermentum elit, eu placerat nunc elit id massa. Morbi interdum lectus ut mauris vehicula",
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const page = () => {
  return (
    <div>
      <GalleryPage />
    </div>
  );
};

export default page;
