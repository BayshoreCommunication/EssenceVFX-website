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
import { Orbitron } from "next/font/google";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });

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
      { title: "STATS", slug: "/services" },
      { title: "CONTACT US", slug: "/contact" },
    ],
    []
  );

  // const handleScroll = useCallback(
  //   debounce(() => {
  //     setNavbarColor(window.scrollY >= 100);
  //   }, 100),
  //   []
  // );

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  return (
    <section className="relative z-50">
      <div className="mt-2 py-2 lg:py-5 ">
        <div className=" hidden lg:block">
          <div className="flex items-center container  justify-between">
            <div className=" flex items-center gap-x-10 2xl:gap-x-16">
              <Link href={"/"}>
                <h2 className="text-4xl font-black text-primary">EssenceVFX</h2>
              </Link>
            </div>

            <div className="">
              <div className="flex items-center justify-stretch gap-x-2  xl:gap-x-8">
                {menuItems.map((el) => (
                  <Link
                    key={el.slug}
                    href={`${el.slug}`}
                    className={`cursor-pointer text-sm lg:text-[16px] font-medium  nav-item ${pathname === el.slug ? "border-b-2 border-primary" : ""}  ${pathname === "/about" ? "!text-white " : "!text-black"}`}
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
            className={` bg-white py-3`}
          >
            <NavbarContent>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden text-black"
              />
              <NavbarBrand>
                <Link href="/">
                  <h2 className="text-3xl font-black text-primary">
                    EssenceVFX
                  </h2>
                </Link>
              </NavbarBrand>
            </NavbarContent>

            <NavbarMenu className="overflow-hidden">
              {menuItems.map((el, index) => (
                <NavbarMenuItem key={el.slug} className="flex flex-row">
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
