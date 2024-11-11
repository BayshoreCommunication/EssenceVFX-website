import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center bg-white">
      <Image
        src="/assets/site-logo/vfx-loading-animation.gif"
        alt="EssenceVFX"
        width={500}
        height={500}
        className="cursor-pointer w-[300px] h-auto mt-2 mb-2"
      />
    </div>
  );
}
