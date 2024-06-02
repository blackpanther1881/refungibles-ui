import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
  TooltipProps,
  LineChart,
  Line
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

type CustomAreaChartProps = {
  height?: number;
  totalData: any;
  chartDuration: number;
  xAxisDataKey: string;
  yAxisDataKeys: any;
  unit?: string;
  showBrush?: boolean;
  tooltipUnit?: { unit: string; position: string };
};

const CustomAreaChart = ({
  height = 400,
  totalData,
  chartDuration,
  xAxisDataKey,
  yAxisDataKeys,
  unit = "",
  showBrush = false,
  tooltipUnit = { unit: "", position: "end" }
}: CustomAreaChartProps) => {
  // console.log({ xAxisDataKey, yAxisDataKeys, totalData, chartDuration });
  const [brushData, setBrushData] = useState([]);
  const [startIndex, setStartIndex] = useState(
    totalData?.length - chartDuration
  );

  const [endIndex, setEndIndex] = useState(totalData?.length - 1);
  useEffect(() => {
    setStartIndex(chartDuration === -1 ? 0 : totalData?.length - chartDuration);
    setEndIndex(totalData?.length - 1);
  }, [chartDuration, totalData?.length]);

  const handleBrushChange = (dataIndex) => {
    setStartIndex(dataIndex[0]);
    setEndIndex(dataIndex[1]);
    setBrushData(totalData.slice(dataIndex[0], dataIndex[1] + 1));
  };
  return (
    <ResponsiveContainer width="103%" height={height}>
      <AreaChart
        data={brushData.length > 0 ? brushData : totalData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <defs>
          {yAxisDataKeys.map((dataKey, index) => {
            return (
              <linearGradient
                id={`color${dataKey.key}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
                key={dataKey.key}
              >
                <stop offset="5%" stopColor={dataKey.color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={dataKey.color} stopOpacity={0} />
              </linearGradient>
            );
          })}
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="8 8" />
        <Tooltip content={<CustomTooltip tooltipUnit={tooltipUnit} />} />
        {yAxisDataKeys.map((dataKey, index) => {
          return (
            <Line
              key={dataKey.key}
              type="monotone"
              dataKey={dataKey.value}
              // stroke={dataKey.color}
              dot={false}
              yAxisId={dataKey.yAxisId}
            />
          );
        })}
        {/* Keep Axes after graph so that it doesn't overlap with the graph https://github.com/recharts/recharts/issues/566#issuecomment-342402723 */}
        <XAxis dataKey={xAxisDataKey} tick={{ fontSize: "12px" }} />
        {yAxisDataKeys.map((dataKey, index) => {
          return (
            <Area
              key={dataKey.key}
              dataKey={dataKey.value}
              stroke={dataKey.color}
              fill={`url(#color${dataKey.key})`}
              // dot
              yAxisId={dataKey.yAxisId}
            />
          );
        })}
        {yAxisDataKeys.map((dataKey, index) => {
          return (
            <YAxis
              key={dataKey.key}
              type="number"
              axisLine={false}
              // allowDataOverflow
              yAxisId={dataKey.yAxisId}
              orientation={dataKey.position}
              tickFormatter={(value) =>
                value !== 0 ? `${unit}${numberFormat(value, 2)}` : ""
              }
              includeHidden
              interval="preserveStartEnd"
              mirror
              padding={dataKey.key === "price" ? { top: 80 } : { top: 0 }}
              tick={{ fontSize: "12px", fontWeight: 700, fill: dataKey.color }}
            />
          );
        })}

        {showBrush ? (
          <Brush
            dataKey={xAxisDataKey}
            height={40}
            travellerWidth={5}
            startIndex={startIndex}
            endIndex={endIndex}
            onChange={handleBrushChange}
          >
            <AreaChart
              // width={500}
              // height={200}
              data={totalData}
              // syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >
              {yAxisDataKeys.map((dataKey, index) => {
                return (
                  <Area
                    key={dataKey.key}
                    // type="monotone"
                    dataKey={dataKey.value}
                    stroke={dataKey.color}
                    fill={`url(#color${dataKey.key})`}
                    // dot
                    yAxisId={dataKey.yAxisId}
                  />
                );
              })}
            </AreaChart>
          </Brush>
        ) : null}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
