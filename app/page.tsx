import ActiveUsers from "@/components/dashboard/ActiveUsers";
import OrdersOverview from "@/components/dashboard/OrdersOverview";
import Projects from "@/components/dashboard/Projects";
import ReferralTracking from "@/components/dashboard/ReferralTracking";
import SalesOverview from "@/components/dashboard/SalesOverview";
import SatisfactionRate from "@/components/dashboard/SatisfactionRate";
import Footer from "@/components/Footer";
import Image from "next/image";

const cardInfo = [
  {
    title: "Today's Money",
    amount: "$53,000",
    change: "+55%",
    icon: "/icons/dashboard.svg",
  },
  {
    title: "Today's Users",
    amount: "2,300",
    change: "+5%",
    icon: "/icons/globe-white.svg",
  },
  {
    title: "New Clients",
    amount: "+3,052",
    change: "-14%",
    icon: "/icons/file-white.svg",
  },
  {
    title: "Total Sales",
    amount: "$173,000",
    change: "+8%",
    icon: "/icons/cart-white.svg",
  },
];

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mb-6">
        {cardInfo.map((card, index) => (
          <div
            key={index}
            className="gradient_bg flex items-center justify-between p-4 rounded-card">
            <div className="flex flex-col gap-1">
              <span className="text-xs">{card?.title}</span>
              <span className="text-lg font-bold">
                {card.amount}{" "}
                <span
                  className={`${
                    card.change === "-14%" ? "text-[#E31A1A]" : "text-[#01B574]"
                  } text-sm`}>
                  {card.change}
                </span>
              </span>
            </div>
            <span className="p-3 rounded-xl bg-[#0075FF]">
              <Image src={card.icon} width={20} height={20} alt="earnings" />
            </span>
          </div>
        ))}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 md:gap-6 mb-6">
        <div className="col-span-12 lg:col-span-5 flex-col gap-20 bg-[url(/images/jellyfish.png)] bg-cover bg-no-repeat bg-center flex justify-between items-start p-5 rounded-card">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-[#A0AEC0]">Welcome back,</span>
            <h1 className="font-bold text-[28px] mb-2">Mark Johnson</h1>
            <span className="text-[#A0AEC0]">
              Glad to see you again! <br /> Ask me anything.
            </span>
          </div>
          <button className="flex whitespace-nowrap items-center gap-2 text-xs max-w-24 hover:gap-3 transition-all duration-150">
            Tap to record{" "}
            <Image
              src="/icons/forward.svg"
              width={14}
              height={14}
              alt="forward"
            />
          </button>
        </div>
        <SatisfactionRate />
        <ReferralTracking />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 md:gap-6 mb-6">
        <SalesOverview />
        <ActiveUsers />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 md:gap-6 mb-6">
        <Projects />
        <OrdersOverview />
      </section>
      <Footer />
    </>
  );
}
