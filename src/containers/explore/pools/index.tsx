import React from "react";
import { ColumnDef } from "@tanstack/table-core";
import Image from "next/image";
import { useRouter } from "next/router";
import Table from "@/components/base/table";
import { dummyCollections, dummyPools } from "@/utils/config";
import { Pool } from "@/utils/types";

const PoolsTable = () => {
  const router = useRouter();
  const columns = React.useMemo<ColumnDef<Pool>[]>(
    () => [
      {
        header: "Pool",
        accessorFn: (row) => row.pool_combination,
        cell: ({ row }) => {
          return (
            <div className={"flex items-center"}>
              <div className={"flex items-center mr-2"}>
                <Image
                  src={row.original.pool_combination.token1Img}
                  alt={row.original.pool_combination.token1}
                  className={"rounded-full"}
                  width={24}
                  height={24}
                />
                <Image
                  src={row.original.pool_combination.token2Img}
                  alt={row.original.pool_combination.token2}
                  className={"-ml-2 rounded-full"}
                  width={24}
                  height={24}
                />
              </div>
              <span className={"text-white-700 font-semibold"}>
                {" "}
                {row.original.pool_combination.token1}/
                {row.original.pool_combination.token2}
              </span>
            </div>
          );
        }
      },
      {
        header: "Transactions",
        accessorFn: (row) => row.transactions,
        cell: (info) => info.getValue()
      },
      {
        header: "TVL",
        accessorFn: (row) => row.tvl,
        cell: (info) => info.getValue()
      },
      {
        header: "1 Day Volume",
        accessorFn: (row) => row.volume_24h,
        cell: (info) => info.getValue()
      },
      {
        header: "7 Day Volume",
        accessorFn: (row) => row.volume_7day,
        cell: (info) => info.getValue()
      },
      {
        header: "1 Day APR",
        accessorFn: (row) => row.apr_1day,
        cell: (info) => info.getValue()
      }
    ],
    []
  );

  const rowClickHandler = (address: string) => {
    router.push(`explore/collections/${address}`);
  };

  return (
    <div className={"border border-[#FFFFFF4D] rounded-tr-xl rounded-tl-xl"}>
      <Table
        data={dummyPools}
        columns={columns}
        onRowClick={rowClickHandler}
        pagination={false}
      />
    </div>
  );
};

export default PoolsTable;
