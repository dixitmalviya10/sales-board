"use client";
import React, { useEffect, useRef } from "react";
import NavigateLink from "./NavigateLink";
import { useLayout } from "@/provider/LayoutContext";

const navList = [
  { label: "Dashboard", navTo: "/", icon: "icons/dashboard.svg" },
  { label: "Tables", navTo: "#", icon: "icons/tables.svg" },
  { label: "Billing", navTo: "#", icon: "icons/billing.svg" },
  { label: "RTL", navTo: "#", icon: "icons/rtl.svg" },
  { label: "Profile", navTo: "#", icon: "icons/profile.svg" },
  { label: "Sign In", navTo: "#", icon: "icons/signin.svg" },
  { label: "Sign Up", navTo: "#", icon: "icons/signup.svg" },
];

const Sidepanel = () => {
  const { isSidepanelOpen, closeSidepanel } = useLayout();
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !(panelRef.current as HTMLElement).contains(event.target as Node)
      ) {
        closeSidepanel();
      }
    };
    if (isSidepanelOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidepanelOpen, closeSidepanel]);
  return (
    <aside
      ref={panelRef}
      className={`transition-all duration-300 ${
        isSidepanelOpen
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full pointer-events-none"
      } md:translate-x-0 md:opacity-100 md:pointer-events-auto md:block gradient_bg fixed left-4 top-4 max-w-[230px] xl:max-w-[264px] w-full bottom-4 p-5 rounded-card overflow-y-auto z-[100]`}>
      <nav className="flex flex-col gap-4">
        <h2 className="text-center leading-[2.5] tracking-widest gradient-logo">
          VISION UI FREE
        </h2>
        <hr className="border-line" />
        <ul>
          {navList.map((item) => (
            <NavigateLink key={item.label} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidepanel;
