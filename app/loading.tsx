import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-white">
      <Image
        unoptimized
        alt="EssenceVFX"
        className="cursor-pointer w-[300px] h-auto mt-2 mb-2"
        height={500}
        src="/assets/site-logo/vfx-loading-animation.gif"
        width={500}
      />
    </div>
  );
}
