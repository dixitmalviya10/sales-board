"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavigateLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <li className="mb-2">
      {item?.label === "Profile" && <span className="text-xs leading-10 tracking-widest">ACCOUNT PAGES</span>}
      <Link
        href={item?.navTo}
        className={`flex items-center gap-2 p-2 hover:bg-[#1A1F37] rounded-md ${
          pathName === item.navTo ? "bg-[#1A1F37]" : ""
        }`}>
        <span
          className={`p-[0.4rem] rounded-xl ${
            pathName === item.navTo ? "bg-[#0075FF]" : "bg-[#1A1F37]"
          }`}>
          <Image src={item.icon} width={20} height={20} alt={item.label} />
        </span>{" "}
        <span className="text-sm">{item.label}</span>
      </Link>
    </li>
  );
};

export default NavigateLink;
