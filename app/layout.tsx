import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Sidepanel from "@/components/Sidepanel";
import { LayoutProvider } from "@/provider/LayoutContext";

const plusJakarta = localFont({
  src: [
    {
      path: "./fonts/plus-jakarta-display-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-display-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-display-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-display-medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Sales Board",
  description: "A dashboard for sales data visualization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`text-white ${plusJakarta.className}`}>
      <body className="relative">
        <LayoutProvider>
          <Sidepanel />
          <Header />
          <main className="ml-4 md:ml-[16.5rem] xl:ml-[19rem] mt-[6.1rem] mr-4">
            {children}
          </main>
        </LayoutProvider>
      </body>
    </html>
  );
}
