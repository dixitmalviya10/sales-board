"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  options: ApexOptions;
  series: ApexAxisChartSeries | number[];
  width?: string;
  height?: number;
  type?: "area" | "bar" | "radialBar";
}

export default function ApexChart({
  options,
  series,
  width = "100%",
  height = 350,
  type = "bar",
}: Props) {
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width={width}
      height={height}
    />
  );
}
