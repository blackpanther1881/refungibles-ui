import Image from "next/image";
import Icon from "@/components/Icon";
import { InputText } from "@/components/base/input";
import { Button } from "@/components/base/buttons";
import AssetSelection from "@/components/amount-input/asset-selection";
import { dummyTokenList } from "@/utils/config";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const percentageList = [
  {
    label: "Market",
    value: 0
  },
  {
    label: "+1%",
    value: 1
  },
  {
    label: "+5%",
    value: 5
  },
  {
    label: "+10%",
    value: 10
  }
];

const PriceInput = () => {
  const [showAssetDialog, setShowAssetDialog] = useState(false);
  const [primaryToken, setPrimaryToken] = useState(null);
  const [secondaryToken, setSecondaryToken] = useState(null);

  const [activePercent, setActivePercent] = useState(
    percentageList.find((item) => item.value === 0)
  );

  const initialPrice = 22;
  const { watch, setValue } = useFormContext();
  const { tokenIn, tokenOut, amountIn } = watch();

  useEffect(() => {
    // set Initial market Price
    setValue("marketPrice", initialPrice);
    setSecondaryToken(tokenIn);
    setPrimaryToken(tokenOut);
  }, [tokenOut]);

  const handleLimitChange = () => {};

  const handleLimitSelection = (value) => {
    setActivePercent(percentageList.find((item) => item.value === value));
    if (value !== 0) {
      const percentage = (value / 100) * Number(initialPrice).toFixed(6);
      setValue("marketPrice", 22 + Number(percentage));
    } else {
      setValue("marketPrice", 22);
    }
  };

  const handleSwitch = () => {
    setSecondaryToken(primaryToken);
    setPrimaryToken(secondaryToken);
  };

  return (
    <div className={`px-6 py-[17px] bg-[#E3E3E31A] rounded-md md:p-3 mb-3`}>
      <div className={"flex items-center justify-between mb-4"}>
        <div className={"text-white-700 flex items-center"}>
          when 1
          {secondaryToken ? (
            <div className="flex items-center mx-1">
              <Image
                src={secondaryToken && secondaryToken.imgUrl}
                alt={secondaryToken && secondaryToken.name}
                className={`md:!w-[24] md:!h-[24] relative mr-2`}
                width={18}
                height={18}
              />
              <span className="text-base">
                {secondaryToken && secondaryToken.name}
              </span>
            </div>
          ) : null}{" "}
          is worth
        </div>
        <div
          className={" text-white-200 items-center text-sm cursor-pointer"}
          onClick={handleSwitch}
        >
          <Icon viewClass={` !w-[20px]`} iconName="close" />
        </div>
      </div>

      <div className={"flex items-center justify-between"}>
        <InputText
          // passing ref as null to avoid console error
          ref={null}
          type="text"
          placeholder={"0"}
          value={watch("marketPrice")}
          disable={false}
          required={false}
          title={"Amount must have value more than 0.01"}
          className={`h-[46px] max-w-[140px] mr-auto md:max-w-[100px] !text-white-600`}
          inputType={"plain"}
          onChange={handleLimitChange}
        />
        <div className="input-logo flex items-center justify-end">
          <Button
            className={`!h-[46px] text-[12px] !text-[#fff] !py-1.5 button
         md:py-2 md:text-sm flex items-center justify-center !rounded-full md:!h-[40px]`}
            type="custom"
            size="medium"
            onClick={() => {
              setShowAssetDialog(true);
            }}
            content={
              primaryToken ? (
                <>
                  <div className="flex items-center">
                    <Image
                      src={primaryToken && primaryToken.imgUrl}
                      alt={primaryToken && tokenOut.name}
                      className={`md:!w-[24] md:!h-[24] relative mr-2`}
                      width={24}
                      height={24}
                    />
                    <span className="text-lg text-white-700 font-semibold leading-normal md:text-xsm md:ml-2 whitespace-nowrap">
                      {primaryToken && primaryToken.name}
                    </span>
                    <Icon viewClass={`ml-4 !w-[10px]`} iconName="chevron" />
                  </div>
                </>
              ) : null
            }
          />
        </div>
      </div>

      <div className={"flex items-center gap-2 "}>
        {percentageList.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer border border-transparent px-2 py-[2px] text-white-200 text-sm ${
              item.value === activePercent.value
                ? " border-[#01E4EB] rounded-md"
                : ""
            }`}
            onClick={() => {
              handleLimitSelection(item.value);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
      {showAssetDialog ? (
        <AssetSelection
          selectedItem={primaryToken}
          tokenList={dummyTokenList}
          onSelectHandler={() => {}}
          onClose={() => {
            setShowAssetDialog(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default PriceInput;
