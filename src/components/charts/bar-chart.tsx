import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  TooltipProps,
  CartesianGrid
} from "recharts";
import {
  NameType,
  ValueType
} from "recharts/types/component/DefaultTooltipContent";
import { numberFormat } from "@/utils/number";

const CustomTooltip = ({
  active,
  payload,
  label,
  tooltipUnit
}: TooltipProps<ValueType, NameType> & { tooltipUnit: any }) => {
  if (active && payload && payload.length) {
    return (
      <div className={"p-4 bg-black-100 rounded-md"}>
        <p className={"text-white-500"}>
          {payload[0]?.payload?.datetime || payload[0]?.payload?.date || label}
        </p>
        {payload.map((entry, index) => {
          return (
            <div
              className={"flex justify-between gap-8 items-center"}
              key={index}
            >
              <div className={"flex gap-1 items-center"} key={index}>
                {/*<Circle size="10px" bg={entry.color} />*/}
                <p className={"text-white-500"}>
                  {(entry.name as string)
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                  :
                </p>
              </div>
              <p className={"text-white-500"}>
                {tooltipUnit.position === "start"
                  ? `${tooltipUnit.unit}${numberFormat(
                      Math.abs(entry.value as number),
                      2
                    )}`
                  : `${numberFormat(Math.abs(entry.value as number), 2)}${
                      tooltipUnit.unit
                    } `}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

const CustomBarChart = ({
  data,
  height = 400,
  xAxisDataKey,
  yAxisDataKeys,
  mirror = false,
  unit = "",
  tooltipUnit = { unit: "", position: "end" }
}: any) => {
  return (
    <ResponsiveContainer width="103%" height={height}>
      <BarChart
        // width={900}
        // height={900}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <Tooltip
          cursor={{ fill: "#0000001A" }}
          content={<CustomTooltip tooltipUnit={tooltipUnit} />}
          // shared={false}
        />
        {yAxisDataKeys.map((dataKey: any) => {
          return (
            <Bar
              key={dataKey.key}
              type="monotone"
              dataKey={dataKey.value}
              stroke={dataKey.color}
              fill={dataKey.color}
              yAxisId={dataKey.yAxisId}
            />
          );
        })}
        {/* Keep Axes after graph so that it doesn't overlap with the graph https://github.com/recharts/recharts/issues/566#issuecomment-342402723 */}
        <CartesianGrid vertical={false} strokeDasharray="8 8" />
        <XAxis
          dataKey={xAxisDataKey}
          interval="equidistantPreserveStart"
          tick={{ fontSize: "12px" }}
          tickMargin={10}
        />
        {yAxisDataKeys.map((dataKey: any) => {
          return (
            <YAxis
              key={dataKey.key}
              type="number"
              axisLine={false}
              mirror={mirror}
              // allowDataOverflow
              yAxisId={dataKey.yAxisId}
              orientation={dataKey.position}
              tickFormatter={(value) =>
                value !== 0 ? `${unit}${numberFormat(value, 2)}` : ""
              }
              includeHidden
              interval="preserveStartEnd"
              // mirror
              padding={dataKey.key === "price" ? { top: 80 } : { top: 0 }}
              tick={{
                fontSize: "12px",
                fontWeight: 700,
                style: {
                  textAnchor: dataKey.position === "left" ? "end" : "start"
                },
                fill: dataKey.color
              }}
            />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
