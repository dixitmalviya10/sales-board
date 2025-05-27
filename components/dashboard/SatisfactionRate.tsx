"use client";
import React from "react";
import ApexChart from "../ui/ApexChart";
import { ApexOptions } from "apexcharts";
import Image from "next/image";

const SatisfactionRate = () => {
  const options: ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
    },

    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
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
            color: "#0075FF",
            opacity: 1,
          },
          {
            offset: 50,
            color: "#0075FF",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: "rgba(0, 117, 255, 0)",
            opacity: 0,
          },
        ],
      },
    },
  };
  const series = [95];
  return (
    <div className="col-span-12 md:col-span-5 lg:col-span-3 gradient_bg  p-5 rounded-card flex flex-col">
      <div>
        <h1 className="font-bold text-lg">Satisfaction Rate</h1>
        <h3 className="text-[#A0AEC0] text-sm">From all projects</h3>
      </div>
      <div>
        <div className="relative">
          <ApexChart
            options={options}
            series={series}
            type="radialBar"
            height={200}
          />
          <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 translate-y-[6rem] bg-[#0075FF] p-2 rounded-full">
            <Image
              width={25}
              height={25}
              src="icons/smiley.svg"
              alt="smiley"
              style={{ zIndex: 10 }}
            />
          </span>
        </div>
        <div className="text-xs text-[#A0AEC0] bg-[#060B28BD] p-4 max-w-80 m-auto flex justify-between w-full rounded-card">
          <span>0%</span>
          <div className="flex flex-col items-center">
            <span className="font-bold text-2xl text-white">{series[0]}%</span>
            <span className="text-xs text-[#A0AEC0]">Based on likes</span>
          </div>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionRate;
