import { Collection } from "@/utils/types";
import Image from "next/image";
import React from "react";
import CustomAreaChart from "@/components/charts/area-chart";
import { dummyChartData } from "@/utils/config";

interface Props {
  collection: Collection;
}

const CollectionAnalytics = ({ collection }: Props) => {
  const chartDataOptions = [
    {
      label: "Transactions",
      value: "transaction_count",
      color: "#887CFD",
      key: "transaction_count",
      yAxisId: "rightAxis",
      position: "right"
    }
  ];
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
      <div>
        <CustomAreaChart
          height={350}
          totalData={dummyChartData}
          chartDuration={7}
          xAxisDataKey={"monthly"}
          yAxisDataKeys={chartDataOptions}
          showBrush={false}
        />
      </div>
    </div>
  );
};

export default CollectionAnalytics;
