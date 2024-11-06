import React from "react";
import { ImPower } from "react-icons/im";

const StatsSection: React.FC = () => {
  const data = [1, 2, 3, 4];

  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20 ">
        <div className="flex items-center gap-6">
          {data.map((el, index) => (
            <div className="" key={index}>
              <ImPower className="text-yellow-400 size-16" />
              <h2 className="mt-4 md:mt-6 text-[16px] md:text-[25px] font-semibold text-black leading-tight">
                Stats <span className="text-red-600">{el}</span>
              </h2>
              <p className="text-black  text-base mt-4">
                At EssenceVFX, we've been bringing imagination to life for over
                a decade. Our journey.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
