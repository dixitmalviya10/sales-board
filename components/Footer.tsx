import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-sm flex flex-col gap-2 lg:flex-row justify-between items-center my-10">
      <p className="order-2 lg:order-1">
        @ 2025, Made with ❤️ by{" "}
        <a
          className="text-[#01B574] hover:underline"
          href="https://dixit-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          Dixit Lohar
        </a>{" "}
        for a better web
      </p>
      <div className="space-x-5 order-1 lg:order-2">
        <Link href="/">Marketplace</Link>
        <Link href="/">Blog</Link>
        <Link href="/">License</Link>
      </div>
    </div>
  );
};

export default Footer;
