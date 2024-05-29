import Image from "next/image";
import Icon from "@/components/Icon";
import { InputText } from "@/components/base/input";
import { Button } from "@/components/base/buttons";
import AssetSelection from "@/components/amount-input/asset-selection";
import { dummyTokenList } from "@/utils/config";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const PriceInput = () => {
  const [showAssetDialog, setShowAssetDialog] = useState(false);

  const { watch, setValue } = useFormContext();
  const { tokenIn, tokenOut, amountIn } = watch();

  useEffect(() => {
    // set Initial market Price
    setValue("marketPrice", 22);
  }, []);
  const handleLimitChange = () => {};

  return (
    <div className={`px-6 py-[17px] bg-[#E3E3E31A] rounded-md md:p-3 mb-3`}>
      <div className={"flex items-center justify-between mb-4"}>
        <div className={"text-white-700 flex items-center"}>
          when 1
          <div className="flex items-center mx-1">
            <Image
              src={tokenIn.imgUrl}
              alt={tokenIn.name}
              className={`md:!w-[24] md:!h-[24] relative mr-2`}
              width={18}
              height={18}
            />
            <span className="text-base">{tokenIn.name}</span>
          </div>{" "}
          is worth
        </div>
        <div className={"flex text-white-200 items-center text-sm"}>
          <Icon viewClass={`mr-2 !w-[13px]`} iconName="wallet" />
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
            className={`bg-[#111111] !h-[46px] text-[12px] !text-[#fff] !py-1.5 button
         md:py-2 md:text-sm flex items-center justify-center !rounded-full md:!h-[40px]`}
            type="custom"
            size="medium"
            onClick={() => {
              setShowAssetDialog(true);
            }}
            content={
              <>
                <div className="flex items-center">
                  <Image
                    src={tokenOut.imgUrl}
                    alt={tokenOut.name}
                    className={`md:!w-[24] md:!h-[24] relative mr-2`}
                    width={24}
                    height={24}
                  />
                  <span className="text-lg text-white-700 font-semibold leading-normal md:text-xsm md:ml-2 whitespace-nowrap">
                    {tokenOut.name}
                  </span>
                  <Icon viewClass={`ml-4 !w-[10px]`} iconName="chevron" />
                </div>
              </>
            }
          />
        </div>
      </div>
      {showAssetDialog ? (
        <AssetSelection
          selectedItem={tokenOut}
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
