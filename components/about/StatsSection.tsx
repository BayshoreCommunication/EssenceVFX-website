import React from "react";
import { ImPower } from "react-icons/im";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const StatsSection: React.FC = () => {
  const data = [1, 2, 3, 4];

  const aboutContents = [
    {
      title: "Views",
      value: "13.077M",
      content:
        "We estimate at least 13.077 million views from just our top VFX videos on our account. That’s not counting ALL of the videos on our account combined. ",
    },
    {
      title: "Likes",
      value: "320,547",
      content:
        "From our most popular VFX videos solely, we cautiously estimate that we have amassed over 320,547 likes. This number does not encompass the aggregate likes received across our entire video library.",
    },
    {
      title: "Comments",
      value: "1,671",
      content:
        "From our account exclusively, our most popular VFX videos have received at least 1,671 comments. This figure does not include comments on other videos from our account, implying a much higher overall comment count.",
    },
    {
      title: "Shares",
      value: "58,919",
      content:
        "Our account's top VFX videos alone account for an estimated 58,919 shares, excluding the numerous other videos.",
    },
  ];

  return (
    <section className="bg-white">
      <ScrollMotionEffect>
        <div className="container py-10 md:py-20 ">
          <div className="grid lg:grid-cols-4 grid-cols-1 items-start gap-8 lg:gap-14">
            {aboutContents?.map((el, index) => (
              <div className="">
                <div className="flex justify-center lg:justify-start">
                  <ImPower className="text-primary size-16 text-center" />
                </div>
                <h2 className="mt-4 md:mt-6 text-[16px] md:text-[25px] font-semibold text-black leading-tight text-center lg:text-left">
                  {el?.title} |
                  <span className="text-red-600 text-center"> {el?.value}</span>
                </h2>
                <p className="text-black font-normal  text-base mt-4 text-center lg:text-left">
                  {el?.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollMotionEffect>
    </section>
  );
};

export default StatsSection;
