import React from "react";
import ApexChart from "../ui/ApexChart";
import Image from "next/image";
import { ApexOptions } from "apexcharts";

const ActiveUsers = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "35%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["", "", "", "", "", "", "", "", ""],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
          fontSize: "10px",
          fontWeight: 500,
        },
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: { show: false },
    colors: ["#FFFFFF"],
  };

  const series = [
    {
      name: "Data",
      data: [350, 280, 150, 300, 500, 430, 490, 330, 270],
    },
  ];
  return (
    <div className="col-span-12 lg:col-span-5 gradient_bg p-5 gap-3 flex flex-col justify-between rounded-card">
      <div className="referral_child_bg rounded-card">
        <ApexChart options={options} series={series} type="bar" height={220} />
      </div>
      <div>
        <h1 className="font-bold text-lg mb-1">Active Users</h1>
        <h3 className="text-sm text-[#A0AEC0]">
          <span className="text-[#01B574] font-bold">(+23)</span> than last week
        </h3>
        <div className="grid grid-cols-4 gap-4 justify-between mt-6">
          <div>
            <div className="flex items-center gap-2 text-[#A0AEC0] text-sm mb-2">
              <span className="p-[0.4rem] inline-block rounded-xl bg-[#0075FF]">
                <Image
                  src="icons/wallet.svg"
                  width={20}
                  height={20}
                  alt="wallet"
                />
              </span>
              Users
            </div>
            <div>
              <span className="font-bold text-lg">32,984</span>
              <div className="w-full bg-[#2D2E5F] h-[3px] rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-[#0075FF] transition-all duration-300"
                  style={{ width: `50%` }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[#A0AEC0] text-sm mb-2">
              <span className="p-[0.4rem] inline-block rounded-xl bg-[#0075FF]">
                <Image
                  src="icons/rocket-white.svg"
                  width={20}
                  height={20}
                  alt="clicks"
                />
              </span>
              Clicks
            </div>
            <div>
              <span className="font-bold text-lg">2,42m</span>
              <div className="w-full bg-[#2D2E5F] h-[3px] rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-[#0075FF] transition-all duration-300"
                  style={{ width: `50%` }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[#A0AEC0] text-sm mb-2">
              <span className="p-[0.4rem] inline-block rounded-xl bg-[#0075FF]">
                <Image
                  src="icons/cart-white.svg"
                  width={20}
                  height={20}
                  alt="sales"
                />
              </span>
              Sales
            </div>
            <div>
              <span className="font-bold text-lg">2,400$</span>
              <div className="w-full bg-[#2D2E5F] h-[3px] rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-[#0075FF] transition-all duration-300"
                  style={{ width: `50%` }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[#A0AEC0] text-sm mb-2">
              <span className="p-[0.4rem] inline-block rounded-xl bg-[#0075FF]">
                <Image
                  src="icons/settings-white.svg"
                  width={20}
                  height={20}
                  alt="items"
                />
              </span>
              Items
            </div>
            <div>
              <span className="font-bold text-lg">320</span>
              <div className="w-full bg-[#2D2E5F] h-[3px] rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-[#0075FF] transition-all duration-300"
                  style={{ width: `50%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
