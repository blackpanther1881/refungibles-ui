import { Collection } from "@/utils/types";
import Image from "next/image";
import React from "react";

interface Props {
  collection: Collection;
}
const CollectionItems = ({ collection }: Props) => {
  if (!collection) return;
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
      <div className={"mb-4"}>
        <p className={"text-white-200"}>{collection.description}</p>
      </div>
      <div className={"flex justify-start gap-6 mb-4"}>
        <div>
          <p className={"text-white-200 text-xsm"}>Global Floor</p>
          <p className={"text-white-600 text-sm"}>{collection.floor_price}</p>
        </div>
        <div>
          <p className={"text-white-200 text-xsm"}>Floor 24H</p>
          <p className={"text-white-600 text-sm"}>{collection.change_24h}</p>
        </div>
        <div>
          <p className={"text-white-200 text-xsm"}>Total Volume</p>
          <p className={"text-white-600 text-sm"}>{collection.tvl}</p>
        </div>
        <div>
          <p className={"text-white-200 text-xsm"}>Items</p>
          <p className={"text-white-600 text-sm"}>{collection.market_cap}</p>
        </div>
        <div>
          <p className={"text-white-200 text-xsm"}>Uniq Owners</p>
          <p className={"text-white-600 text-sm"}>{24}</p>
        </div>
        <div>
          <p className={"text-white-200 text-xsm"}>Listed</p>
          <p className={"text-white-600 text-sm"}>4%</p>
        </div>
      </div>
      <div className={"flex gap-4 flex-wrap"}>
        {collection.collections.length &&
          collection.collections.map((item, index) => (
            <div
              key={index}
              className={
                "rounded-md bg-[#D9D9D933] rounded-bl-md rounded-br-md relative"
              }
            >
              <div className={"p-2"}>
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  className={""}
                  width={280}
                  height={350}
                />
              </div>
              <div className={"p-2 mb-[40px]"}>
                <div className={"flex justify-between items-center"}>
                  <p className={"text-white-200 text-xsm"}>{item.name}</p>
                  <p className={"text-white-600 text-sm"}>#{item.id}</p>
                </div>
                <p className={"text-white-700 font-semibold"}>
                  {" "}
                  {item.price} ETH
                </p>
              </div>
              <div
                className={
                  "border border-white-100 text-center text-sm py-2 text-white-200 rounded-bl-md rounded-br-md absolute bottom-0 right-0 left-0"
                }
              >
                Bid
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CollectionItems;
