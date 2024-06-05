import { dummyChartData } from "@/utils/config";
import React from "react";
import { LineChart, Line, Tooltip } from "recharts";

export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-black-400 rounded-md p-2">
        <p className="label text-white-400">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const PriceChart = () => {
  const chartDataOptions = [
    {
      label: "Transactions",
      value: "transaction_count",
      color: "#01E4EB",
      key: "transaction_count",
      yAxisId: "rightAxis",
      position: "right"
    }
  ];

  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page 2", uv: 3100, pv: 1400, amt: 1400 },
    { name: "Page 2", uv: 1100, pv: 3400, amt: 1600 },
    { name: "Page 2", uv: 2100, pv: 1400, amt: 1800 },
    { name: "Page 2", uv: 200, pv: 2400, amt: 2100 },
    { name: "Page 2", uv: 600, pv: 3300, amt: 3400 }
  ];

  return (
    <LineChart width={200} height={20} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} />
      <Tooltip content={CustomTooltip} />
    </LineChart>
  );
};
export default PriceChart;
