import { Collection } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";
import CustomAreaChart from "@/components/charts/area-chart";
import { dummyChartData, dummyNetworkList } from "@/utils/config";
import Dropdown from "@/components/base/dropdown";
import CustomBarChart from "@/components/charts/bar-chart";
import Swap from "@/containers/trade/swap";

interface Props {
  collection: Collection;
}

const CollectionAnalytics = ({ collection }: Props) => {
  const [chartType, setChartType] = useState("Area Chart");
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

  const handleChartType = (type: string) => {
    setChartType(type);
  };
  return (
    <div>
      <div className={"flex items-baseline mb-4"}>
        <Image
          src={collection.avatar}
          alt={collection.collectionName}
          className={"md:!w-[20px] md:!h-[20px] mr-3"}
          width={88}
          height={88}
        />
        <span className={"text-white-700 font-semibold"}>
          {" "}
          {collection.collectionName}
        </span>
      </div>
      <div className={"flex mt-4 gap-8"}>
        <div className={"flex-1"}>
          <div className={"mb-5"}>
            {chartType === "Area Chart" ? (
              <CustomAreaChart
                height={350}
                totalData={dummyChartData}
                chartDuration={7}
                xAxisDataKey={"monthly"}
                yAxisDataKeys={chartDataOptions}
                showBrush={false}
              />
            ) : (
              <CustomBarChart
                data={dummyChartData}
                xAxisDataKey="date"
                yAxisDataKeys={chartDataOptions}
                unit="$"
                tooltipUnit={{
                  unit: "$",
                  position: "start"
                }}
              />
            )}
          </div>
          <div className={"flex justify-between mb-8"}>
            <div className={"flex gap-[18px] items-center"}>
              <div
                className={
                  "w-[35px] h-[35px] flex items-center justify-center rounded-md bg-[#FFFFFF33]"
                }
              >
                <p className={"text-white-200 text-sm "}>1D</p>
              </div>
              <div
                className={
                  "w-[35px] h-[35px] flex items-center justify-center rounded-md bg-[#FFFFFF33]"
                }
              >
                <p className={"text-white-200 text-sm "}>1W</p>
              </div>
              <div
                className={
                  "w-[35px] h-[35px] flex items-center justify-center rounded-md bg-[#FFFFFF33]"
                }
              >
                <p className={"text-white-200 text-sm "}>1M</p>
              </div>
              <div
                className={
                  "w-[35px] h-[35px] flex items-center justify-center rounded-md bg-[#FFFFFF33]"
                }
              >
                <p className={"text-white-200 text-sm "}>1Y</p>
              </div>
            </div>
            <div>
              <Dropdown
                content={
                  <div className={"rounded-md "}>
                    <div
                      onClick={() => {
                        handleChartType("Area Chart");
                      }}
                      className={
                        "flex items-center py-2 px-4 hover:bg-black-200 hover:rounded-md cursor-pointer"
                      }
                    >
                      <p className={"text-[14px] text-white-500"}>Area Chart</p>
                    </div>
                    <div
                      onClick={() => {
                        handleChartType("Bar Chart");
                      }}
                      className={
                        "flex items-center py-2 px-4 hover:bg-black-200 hover:rounded-md cursor-pointer"
                      }
                    >
                      <p className={"text-[14px] text-white-500"}>Bar Chart</p>
                    </div>
                  </div>
                }
                label={
                  <p className={"text-[14px] text-white-500 py-2 px-4"}>
                    {chartType}
                  </p>
                }
                labelClass={"border border-white-200 rounded-md"}
                className={"!bg-black-500 !p-2"}
                position={"start"}
              />
            </div>
          </div>
          <div className={"flex justify-start gap-10 mt-4"}>
            <div>
              <p className={"text-white-200 text-sm"}>Global Floor</p>
              <p className={"text-white-600 text-base"}>
                {collection.floor_price}
              </p>
            </div>
            <div>
              <p className={"text-white-200 text-sm"}>Floor 24H</p>
              <p className={"text-white-600 text-base"}>
                {collection.change_24h}
              </p>
            </div>
            <div>
              <p className={"text-white-200 text-sm"}>Total Volume</p>
              <p className={"text-white-600 text-base"}>{collection.tvl}</p>
            </div>
            <div>
              <p className={"text-white-200 text-sm"}>Items</p>
              <p className={"text-white-600 text-base"}>
                {collection.market_cap}
              </p>
            </div>
          </div>
        </div>
        <div className={"w-[502px]"}>
          <Swap sourcePath={"analytics"} />
        </div>
      </div>
    </div>
  );
};

export default CollectionAnalytics;
