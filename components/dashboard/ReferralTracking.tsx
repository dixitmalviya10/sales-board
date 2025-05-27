import React from "react";
import ApexChart from "../ui/ApexChart";
import { ApexOptions } from "apexcharts";
import Image from "next/image";

const ReferralTracking = () => {
  const options: ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
    },

    plotOptions: {
      radialBar: {
        startAngle: -220,
        endAngle: 50,
        track: {
          background: "#22234B",
        },
        hollow: {
          size: "70%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
            // fontSize: "22px",
            // offsetY: 80,
            // color: "#ffffff",
            // formatter: (val) => `${val}%`,
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["rgba(0, 117, 255, 0)"],
        stops: [0, 50, 100],
        colorStops: [
          {
            offset: 0,
            color: "#05CD99",
            opacity: 1,
          },
          {
            offset: 50,
            color: "#05CD99",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(5, 205, 153, 0)",
            opacity: 0,
          },
        ],
      },
    },
  };
  const series = [93];

  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-4 referral_bg p-5 gap-4 justify-between rounded-card flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">Referral Tracking</h1>
        <button className="bg-slate-800 rounded-md p-1">
          <Image
            src="icons/more_horiz.svg"
            width={20}
            height={15}
            alt="dots"
          />
        </button>
      </div>
      <div className="grid grid-cols-2 justify-between">
        <div className="flex flex-col gap-4 w-full">
          <div className="referral_child_bg px-4 pt-4 pb-6 rounded-card w-full">
            <h2 className="text-[#A0AEC0] text-sm">Invited</h2>
            <h3 className="font-bold text-lg">145 people</h3>
          </div>
          <div className="referral_child_bg px-4 pt-4 pb-6 rounded-card w-full">
            <h2 className="text-[#A0AEC0] text-sm">Bonus</h2>
            <h3 className="font-bold text-lg">1,465</h3>
          </div>
        </div>
        <div className="relative">
          <ApexChart
            options={options}
            series={series}
            type="radialBar"
            height={200}
          />{" "}
          <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 translate-y-[4rem] flex flex-col items-center">
            <span className="text-sm text-[#A0AEC0]">Safety</span>
            <span className="font-bold text-4xl">{series[0] / 10}</span>
            <span className="text-sm text-[#A0AEC0]">Total Score</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralTracking;
