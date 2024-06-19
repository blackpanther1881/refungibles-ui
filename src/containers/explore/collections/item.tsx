import { Collection } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";
import Dropdown from "@/components/base/dropdown";
import { InputText } from "@/components/base/input";

interface Props {
  collection: Collection;
}
const CollectionItems = ({ collection }: Props) => {
  const [priceFilter, setPriceFilter] = useState("high-to-low");
  const [searchKey, setSearchKey] = useState("");
  const [filteredList, setFilteredList] = useState(
    collection.collections && collection.collections.length > 0
      ? collection.collections
      : []
  );

  const searchHandler = (evt: any) => {
    const searchTerm = evt.target.value;
    const filtered = collection.collections.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredList(filtered);
    setSearchKey(searchTerm);
  };

  const handleSorting = (value: string) => {
    if (value === "low-to-high") {
      setFilteredList(
        collection.collections.sort((a, b) => Number(b.price) - Number(a.price))
      );
    } else {
      setFilteredList(
        collection.collections.sort((a, b) => Number(a.price) - Number(b.price))
      );
    }
    setPriceFilter(value);
    setSearchKey("");
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
      <div className={"flex justify-start mb-6 gap-6"}>
        <Dropdown
          content={
            <div className={"rounded-md "}>
              <div
                onClick={() => {
                  handleSorting("low-to-high");
                }}
                className={
                  "flex items-center py-2 px-4 hover:bg-black-200 hover:rounded-md cursor-pointer"
                }
              >
                <p className={"text-[14px] text-white-500"}>Low to High</p>
              </div>
              <div
                onClick={() => {
                  handleSorting("high-to-low");
                }}
                className={
                  "flex items-center py-2 px-4 hover:bg-black-200 hover:rounded-md cursor-pointer"
                }
              >
                <p className={"text-[14px] text-white-500"}>High to Low</p>
              </div>
            </div>
          }
          label={
            <p className={"text-[14px] text-white-500"}>
              Price:{" "}
              {priceFilter === "high-to-low" ? "Low to High" : "High to Low"}
            </p>
          }
          labelClass={"border border-[#3876FD] px-4 py-3"}
          className={"!bg-black-500 !p-2 !min-w-[160px]"}
          position={"start"}
        />

        <input
          ref={null}
          type="text"
          placeholder="Search by name"
          value={searchKey}
          disabled={false}
          required={false}
          className={`border border-[#3876FD] px-4 py-3 bg-transparent text-white-500`}
          onChange={searchHandler}
          name={"search"}
        />
      </div>
      <div className={"flex gap-4 flex-wrap"}>
        {filteredList && filteredList.length > 0 ? (
          filteredList.map((item, index) => (
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
                  "border border-white-100 text-center text-sm py-2 text-white-700" +
                  " cursor-pointer rounded-bl-md rounded-br-md absolute bottom-0 right-0 left-0 hover:bg-[#3876FD]"
                }
              >
                Bid
              </div>
            </div>
          ))
        ) : (
          <p className={"text-primary-100"}>Items not found</p>
        )}
      </div>
    </div>
  );
};

export default CollectionItems;
