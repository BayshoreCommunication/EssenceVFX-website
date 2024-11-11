"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Loading = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Set a timer to show the loading screen for at least 5 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000); // 5 seconds minimum loading time

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (!showLoading) return null;

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-gray-100">
      <Image
        src="/assets/site-logo/vfx-loading-animation.gif"
        alt="EssenceVFX"
        width={500}
        height={500}
        className="cursor-pointer w-[300px] h-auto mt-2 mb-2"
      />
    </div>
  );
};

export default Loading;
