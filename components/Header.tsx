"use client";
import { useLayout } from "@/provider/LayoutContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
   const { toggleSidepanel } = useLayout();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`rounded-card z-50 text-xs  md:ml-[16.5rem] xl:ml-[19rem] py-4 fixed left-4 md:left-0 right-4 top-4 transition-all duration-200  ${
        scrolled ? "gradient_bg px-4" : ""
      }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="ml-2 mr-4 md:hidden" onClick={toggleSidepanel}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu">
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
          <div className="hidden sm:block">
            <span className="flex items-center gap-1 mb-1 md:mb-2">
              <Link href="/" className="text-[#A0AEC0]">
                Pages
              </Link>
              <span>/</span>
              <Link href="/">Dashboard</Link>
            </span>
            <span className="text-sm">Dashboard</span>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Type here..."
              className=" w-full rounded-card bg-[#0F1535] pl-11 py-3 border-2 border-[#1A1F37] focus:outline-none text-slate-400 placeholder:text-slate-500 transition-colors duration-75 hover:bg-[#1A1F37] hover:placeholder:text-slate-300 hover:text-white"
            />
            <Image
              src="icons/dashboard.svg"
              alt="search"
              width={18}
              height={18}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
          <Link href="/" className="hidden md:flex items-center gap-1 ">
            <Image
              src="icons/profile-gray.svg"
              width={18}
              height={18}
              alt="profile"
            />
            Sign In
          </Link>
          <Link href="/">
            <Image
              src="icons/settings-gray.svg"
              width={18}
              height={18}
              alt="profile"
            />
          </Link>
          <Link href="/">
            <Image
              src="icons/bell-gray.svg"
              width={18}
              height={18}
              alt="profile"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
