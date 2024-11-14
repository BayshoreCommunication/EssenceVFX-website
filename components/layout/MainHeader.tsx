"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { LuUser2 } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
) => {
  let timeout: NodeJS.Timeout | undefined;

  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
};

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const menuItems = useMemo(
    () => [
      { title: "HOME", slug: "/" },
      { title: "ABOUT", slug: "/about" },
      // { title: "STATS", slug: "/services" },
      { title: "CONTACT US", slug: "/contact" },
    ],
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // className={`pb-0 pt-2 md:pb-3 md:pt-4 fixed top-0 transition-colors duration-300 ${navbarColor ? "!bg-white shadow-small duration-1000" : "bg-transparent"}`}

  return (
    <section className={`relative z-50 `}>
      <div
        className={`w-full py-0 xl:py-2 fixed top-0 transition-colors duration-300 ${navbarColor ? "!bg-white shadow-small duration-1000" : "bg-transparent"}`}
      >
        <div className=" hidden lg:block">
          <div className="flex items-center container  justify-between">
            <div className="w-full flex items-center gap-x-10 2xl:gap-x-20">
              <Link href={"/"}>
                {/* <h2 className="text-4xl font-black text-primary">EssenceVFX</h2> */}
                <Image
                  src={
                    navbarColor
                      ? "/assets/site-logo/essenceVFX-logo-redblack.png"
                      : "/assets/site-logo/essenceVFX-logo-redwhite.png"
                  }
                  alt="EssenceVFX"
                  width={500}
                  height={500}
                  className="cursor-pointer w-[180px] xl:w-[150px]  h-auto mt-2 mb-2"
                />
              </Link>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-center gap-x-28  xl:gap-x-24">
                {menuItems.map((el) => (
                  <Link
                    key={el.slug}
                    href={`${el.slug}`}
                    className={`cursor-pointer text-sm lg:text-[14px] font-semibold transition-all duration-300 h-7 
                      ${pathname === el.slug ? "border-b-2 border-primary" : "hover:border-b-2 hover:border-primary"} 
                      ${pathname === "/about" ? (navbarColor ? "text-black" : "text-white") : "text-black"}`}
                  >
                    {el.title}
                  </Link>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden ">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={` bg-white  py-4`}
          >
            <NavbarContent>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden text-black"
              />
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src={"/assets/site-logo/essenceVFX-logo-redblack.png"}
                    alt="EssenceVFX"
                    width={500}
                    height={500}
                    className="cursor-pointer w-[140px]  h-auto mt-2 mb-2"
                  />
                </Link>
              </NavbarBrand>
            </NavbarContent>

            <NavbarMenu className="overflow-hidden  mt-6">
              {menuItems.map((el, index) => (
                <NavbarMenuItem key={el.slug} className="flex flex-row mt-2">
                  <Link
                    className={`w-full  text-black text-center !text-xl font-medium py-1 ${pathname === el.slug ? "!text-primary" : ""} ${index === 0 ? "mt-6" : ""}`}
                    href={el.slug}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {el.title}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainHeader);
