import React from "react";
import { ColumnDef } from "@tanstack/table-core";
import Image from "next/image";
import { useRouter } from "next/router";
import Table from "@/components/base/table";

interface Collection {
  name: string;
  imgUrl: string;
}
type PoolData = {
  collections: Collection;
  floor_price: number;
  change_24h: string;
  market_cap: number;
  volume_24h: string;
  tvl: number;
  nft_locked: number;
  reserve_ratio: string;
};

const dummyData: PoolData[] = [
  {
    collections: {
      name: "Milady",
      imgUrl: "/images/dummy/nft1.png"
    },
    floor_price: 5.33,
    change_24h: "+40%",
    market_cap: 3033434,
    volume_24h: "+33%",
    tvl: 33,
    nft_locked: 33,
    reserve_ratio: "33%"
  },
  {
    collections: {
      name: "Doodles",
      imgUrl: "/images/dummy/nft2.png"
    },
    floor_price: 1.33,
    change_24h: "+10%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  },
  {
    collections: {
      name: "Test3",
      imgUrl: "/images/dummy/nft3.png"
    },
    floor_price: 31.33,
    change_24h: "-20%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  },
  {
    collections: {
      name: "Doodles",
      imgUrl: "/images/dummy/nft2.png"
    },
    floor_price: 1.33,
    change_24h: "+10%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  },
  {
    collections: {
      name: "Test3",
      imgUrl: "/images/dummy/nft3.png"
    },
    floor_price: 31.33,
    change_24h: "-20%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  },
  {
    collections: {
      name: "Doodles",
      imgUrl: "/images/dummy/nft2.png"
    },
    floor_price: 1.33,
    change_24h: "+10%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  },
  {
    collections: {
      name: "Test3",
      imgUrl: "/images/dummy/nft3.png"
    },
    floor_price: 31.33,
    change_24h: "-20%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  },
  {
    collections: {
      name: "Doodles",
      imgUrl: "/images/dummy/nft2.png"
    },
    floor_price: 1.33,
    change_24h: "+10%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  },
  {
    collections: {
      name: "Test3",
      imgUrl: "/images/dummy/nft3.png"
    },
    floor_price: 31.33,
    change_24h: "-20%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  },
  {
    collections: {
      name: "Doodles",
      imgUrl: "/images/dummy/nft2.png"
    },
    floor_price: 1.33,
    change_24h: "+10%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  },
  {
    collections: {
      name: "Test3",
      imgUrl: "/images/dummy/nft3.png"
    },
    floor_price: 31.33,
    change_24h: "-20%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%"
  }
];

const CollectionsTable = () => {
  const router = useRouter();
  const columns = React.useMemo<ColumnDef<PoolData>[]>(
    () => [
      {
        header: "Collections",
        accessorFn: (row) => row.collections,
        cell: ({ row }) => {
          return (
            <div className={"flex items-center"}>
              <Image
                src={row.original.collections.imgUrl}
                alt={row.original.collections.name}
                className={"md:!w-[20px] md:!h-[20px] mr-2"}
                width={24}
                height={24}
              />
              <span className={"text-white-700 font-semibold"}>
                {" "}
                {row.original.collections.name}
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

  const rowClickHandler = (address: string) => {};

  return (
    <div className={"border border-[#FFFFFF4D] rounded-tr-xl rounded-tl-xl"}>
      <Table
        data={dummyData}
        columns={columns}
        onRowClick={rowClickHandler}
        pagination={false}
      />
    </div>
  );
};

export default CollectionsTable;
