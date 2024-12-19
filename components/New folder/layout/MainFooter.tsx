"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";

import { useAppContext } from "@/app/AppContext";
import { siteConfig } from "@/config/site";

const MainFooter = () => {
  const { silderIndexValue, setSilderIndexValue } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (title: number) => {
    localStorage.removeItem("sliderIndexValue");
    setSilderIndexValue(title);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (
      pathname === "/about" ||
      pathname === "/contact" ||
      pathname === "/gallery"
    ) {
      localStorage.setItem("sliderIndexValue", title.toString()); // Convert number to string
      router.push("/");
    }
  };

  return (
    <>
      <footer className="bg-primary">
        <div className="container py-16">
          <div className="">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
              <div className="">
                <h2 className="text-[20px] font-semibold text-white text-center md:text-left">
                  Useful Links
                </h2>
                <hr className="mt-2 mb-6 w-32 border-white" />
                <ul className="ml-0 text-white list-none text-[15px] font-normal">
                  {siteConfig?.footer?.usefulLinks?.map((el, index) => (
                    <li key={index} className="mb-4 text-center md:text-left">
                      <Link className="hover:underline " href={el.slug}>
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="text-[20px] font-semibold text-white text-center md:text-left">
                  Categories
                </h2>
                <hr className="w-28 mt-2 mb-6 border-white" />
                <ul className="ml-0 text-[15px] font-normal text-white list-none">
                  {siteConfig?.footer?.categories?.map((el, index) => (
                    <li key={index} className="mb-4 text-center md:text-left ">
                      <button
                        className="hover:underline"
                        onClick={() => scrollToTop(el?.index)}
                      >
                        {el.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="font-semibold text-white text-[20px] text-center md:text-left">
                  Get In Touch
                </h2>
                <hr className="w-32 mt-2 mb-6 border-white" />
                <ul className="ml-0 text-[15px] font-normal text-white list-none">
                  {siteConfig?.footer?.getInTouch?.map((el, index) => (
                    <li key={index} className="mb-4 text-center md:text-left">
                      <Link className="hover:underline" href={el.slug}>
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center my-8">
            <Link href={"/"}>
              <Image
                alt="EssenceVFX"
                className="cursor-pointer w-[150px]  h-auto mt-2 mb-2"
                height={500}
                src={"/assets/site-logo/essenceVFX-Logo-White.png"}
                width={500}
              />
            </Link>

            <div className="text-white  flex justify-center md:justify-start gap-3 mt-4 md:mt-6 ">
              <Link
                className="inline-block p-2 rounded  duration-300"
                href="https://www.facebook.com/cosplaypowers"
                target="_blank"
              >
                <FaFacebookF className="size-5 hover:text-black" />
              </Link>
              {/* <Link
                href="https://www.linkedin.com/company/melamedlawpllc"
                target="_blank"
                className="inline-block p-2 rounded duration-300"
              >
                <FaLinkedinIn className="size-5 hover:text-black" />
              </Link> */}
              <Link
                className="inline-block p-2 rounded  duration-300"
                href="https://www.tiktok.com/@webslinger"
                target="_blank"
              >
                <FaTiktok className="size-5 hover:text-black" />
              </Link>
              <Link
                className="inline-block p-2 rounded  duration-300"
                href="https://www.instagram.com/cosplaypowers/"
                target="_blank"
              >
                <FaInstagram className="size-5 hover:text-black" />
              </Link>
              <Link
                className="inline-block p-2 rounded duration-300"
                href="https://www.youtube.com/@webslingers"
                target="_blank"
              >
                <FaYoutube className="size-5 hover:text-black" />
              </Link>
            </div>
          </div>

          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <div className="md:flex :items-center sm:justify-between ">
            <div className="text-[16px] font-normal text-center text-white">
              © 2024{" "}
              <Link className="hover:underline text-white" href="">
                EssenceVFX
              </Link>
              . All Rights Reserved.
            </div>

            <div className="text-[16px] font-normal text-center text-white mt-4 md:mt-0">
              Design & Developed by{" "}
              <Link
                className="font-normal hover:underline text-white"
                href="https://www.bayshorecommunication.com/"
                rel="noreferrer"
                target="_blank"
              >
                BayShore Communication
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
