"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number,
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
      { title: "GALLERY", slug: "/gallery" },
      { title: "CONTACT US", slug: "/contact" },
    ],
    [],
  );

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    [],
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className={`relative z-50 `}>
      <div
        className={`w-full py-0 xl:py-2 fixed top-0 transition-colors duration-300 ${navbarColor ? "!bg-white shadow-small duration-1000" : "bg-transparent"}`}
      >
        <div className=" hidden lg:block">
          <div className="flex items-center container  justify-between">
            <div className="w-full flex items-center gap-x-10 2xl:gap-x-20">
              <Link href={"/"}>
                <Image
                  alt="EssenceVFX"
                  className="cursor-pointer w-[180px] xl:w-[150px]  h-auto mt-2 mb-2"
                  height={500}
                  src={
                    navbarColor || pathname === "/gallery"
                      ? "/assets/site-logo/essenceVFX-logo-redblack.png"
                      : "/assets/site-logo/essenceVFX-logo-redwhite.png"
                  }
                  width={500}
                />
              </Link>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-center gap-x-10  xl:gap-x-12">
                {menuItems.map((el) => (
                  <Link
                    key={el.slug}
                    className={`cursor-pointer text-sm lg:text-[14px] font-semibold transition-all duration-300 h-7 
                      ${pathname === el.slug ? "border-b-2 border-primary" : "hover:border-b-2 hover:border-primary"} 
                      ${pathname === "/about" ? (navbarColor ? "text-black" : "text-white") : "text-black"}`}
                    href={`${el.slug}`}
                  >
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className={`bg-white py-4 px-4`}>
            <div className="flex items-center justify-between">
              {/* Mobile Menu Toggle */}
              <button
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden text-black p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  ) : (
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  )}
                </svg>
              </button>

              {/* Mobile Logo */}
              <Link href="/">
                <Image
                  alt="EssenceVFX"
                  className="cursor-pointer w-[140px] h-auto mt-2 mb-2"
                  height={500}
                  src={"/assets/site-logo/essenceVFX-logo-redblack.png"}
                  width={500}
                />
              </Link>

              {/* Spacer to center logo */}
              <div className="w-10" />
            </div>

            {/* Mobile Menu Items */}
            {isMenuOpen && (
              <div className="mt-6 pb-4">
                {menuItems.map((el, index) => (
                  <div key={el.slug} className="flex flex-row mt-2">
                    <Link
                      className={`w-full text-black text-center !text-xl font-medium py-1 ${pathname === el.slug ? "!text-primary" : ""} ${index === 0 ? "mt-6" : ""}`}
                      href={el.slug}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {el.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainHeader);
