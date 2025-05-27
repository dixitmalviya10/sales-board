"use client";
import React from "react";
import ApexChart from "../ui/ApexChart";

const SalesOverview = () => {
  const areaChartOptions = {
    chart: {
      toolbar: { show: false },
    },
    legend: { show: false },
    xaxis: {
      axisBorder: { show: false }, // hides bottom line
      axisTicks: { show: false }, // hides small tick markers
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#CBD5E0",
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 700,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#CBD5E0",
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 700,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#56577A", // soft gray
      strokeDashArray: 4, // dashed line
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" as const },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const areaChartSeries = [
    {
      name: "Sales",
      data: [200, 250, 200, 350, 0, 500, 280, 150, 270, 320, 410, 500],
    },
    {
      name: "Revenue",
      data: [150, 200, 180, 300, 0, 450, 250, 120, 220, 280, 360, 420],
    },
  ];

  return (
    <div className="col-span-12 lg:col-span-7 gradient_bg p-5 rounded-card">
      <h1 className="font-bold text-lg mb-1">Sales overview</h1>
      <h3 className="text-sm text-[#A0AEC0]">
        <span className="text-[#01B574] font-bold">(+5) more</span> in 2025
      </h3>
      <div id="chart">
        <ApexChart
          type="area"
          options={areaChartOptions}
          series={areaChartSeries}
        />
      </div>
    </div>
  );
};

export default SalesOverview;
