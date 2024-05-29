import React from "react";
import { ColumnDef } from "@tanstack/table-core";
import Image from "next/image";
import { useRouter } from "next/router";
import Table from "@/components/base/table";
import { dummyCollections } from "@/utils/config";
import { Collection } from "@/utils/types";

const CollectionsTable = () => {
  const router = useRouter();
  const columns = React.useMemo<ColumnDef<Collection>[]>(
    () => [
      {
        header: "Collections",
        accessorFn: (row) => row.collections,
        cell: ({ row }) => {
          return (
            <div className={"flex items-center"}>
              <Image
                src={row.original.avatar}
                alt={row.original.collectionName}
                className={"md:!w-[20px] md:!h-[20px] mr-2"}
                width={24}
                height={24}
              />
              <span className={"text-white-700 font-semibold"}>
                {" "}
                {row.original.collectionName}
              </span>
            </div>
          );
        }
      },
      {
        header: "Floor Price",
        accessorFn: (row) => row.floor_price,
        cell: (info) => info.getValue()
      },
      {
        header: "Change 24h",
        accessorFn: (row) => row.change_24h,
        cell: (info) => info.getValue()
      },
      {
        header: "Market Cap",
        accessorFn: (row) => row.market_cap,
        cell: (info) => info.getValue()
      },
      {
        header: "Volume 24h",
        accessorFn: (row) => row.volume_24h,
        cell: (info) => info.getValue()
      },
      {
        header: "TVL",
        accessorFn: (row) => row.tvl,
        cell: (info) => info.getValue()
      },
      {
        header: "NFT Locked",
        accessorFn: (row) => row.nft_locked,
        cell: (info) => info.getValue()
      },
      {
        header: "Reserve Ratio",
        accessorFn: (row) => row.reserve_ratio,
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
        data={dummyCollections}
        columns={columns}
        onRowClick={rowClickHandler}
        pagination={false}
      />
    </div>
  );
};

export default CollectionsTable;
