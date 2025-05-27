import Image from "next/image";
import React from "react";

const OrdersOverview = () => {
  return (
    <div className="col-span-12 lg:col-span-4 gradient_bg p-5 rounded-card">
      <h2 className="text-lg font-bold mb-1">Orders Overview</h2>
      <span className="text-[#A0AEC0] text-sm flex items-center gap-1">
        <Image src="/icons/circle.svg" alt="checkmark" width={17} height={17} />{" "}
        +30% this month
      </span>
      <ul className="space-y-5 mt-7">
        <li className="flex items-start gap-4">
          <Image src="/icons/bell.svg" width={20} height={20} alt="bell" />
          <div>
            <p className="text-sm">$2400, Design changes</p>
            <span className="text-xs text-[#A0AEC0]">22 DEC 7:20 PM</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <Image src="/icons/html.svg" width={20} height={20} alt="bell" />
          <div>
            <p className="text-sm">New order #4219423</p>
            <span className="text-xs text-[#A0AEC0]">21 DEC 11:21 PM</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <Image src="/icons/cart.svg" width={20} height={20} alt="bell" />
          <div>
            <p className="text-sm">Server Payments for April</p>
            <span className="text-xs text-[#A0AEC0]">21 DEC 9:28 PM</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <Image src="/icons/credit.svg" width={20} height={20} alt="bell" />
          <div>
            <p className="text-sm">New card added for order #3210145</p>
            <span className="text-xs text-[#A0AEC0]">20 DEC 3:52 PM</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="w-5 h-5">&nbsp;</span>
          <div>
            <p className="text-sm">Unlock packages for Development</p>
            <span className="text-xs text-[#A0AEC0]">19 DEC 11:35 PM</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <Image src="/icons/l1.svg" width={20} height={20} alt="bell" />
          <div>
            <p className="text-sm">New order #9851258</p>
            <span className="text-xs text-[#A0AEC0]">18 DEC 4:41 PM</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OrdersOverview;
