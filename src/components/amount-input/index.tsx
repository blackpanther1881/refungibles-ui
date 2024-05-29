import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/base/buttons";
import { InputText } from "@/components/base/input";
import Image from "next/image";
import { AssetProps } from "@/utils/types";
import Icon from "@/components/Icon";
import AssetSelection from "@/components/amount-input/asset-selection";
import { dummyTokenList } from "@/utils/config";

export interface Props {
  type: string;
  assetInfo: AssetProps;
  className?: string;
  activeInput?: boolean;
  tokenKey?: string;
  networkKey?: string;
  label: string;
}

export const AmountInput = ({
  className,
  activeInput = false,
  assetInfo,
  type = "amountIn",
  tokenKey = "tokenIn",
  networkKey = "tokenInNetwork",
  label
}: Props) => {
  const { register, getValues, setValue, watch } = useFormContext();
  const [showAssetDialog, setShowAssetDialog] = useState(false);

  const availableBlc = 222;
  const availableBlcDollar = "$3434";

  const availableBlcHandler = (amount: any) => {
    // const field =
    //   type === TokenModalInputBoxTrigger.FROM ? "amountIn" : "amountOut";
    setValue(type, amount);
  };

  const handleInputChange = (evt: any) => {
    setValue(type, evt.target.value);
  };

  const onSelect = (item: any) => {
    console.log(item, "selected-item");
    setValue(tokenKey, item);
    setShowAssetDialog(false);
  };

  const selectedToken = watch(tokenKey);

  console.log(selectedToken, "selectedToken");
  return (
    <div
      className={`px-6 py-[17px] bg-[#E3E3E31A] rounded-md md:p-3 ${className}`}
    >
      <div className={"flex items-center justify-between mb-4"}>
        <p className={"text-white-700"}>{label}</p>
        <div className={"flex text-white-200 items-center text-sm"}>
          <Icon viewClass={`mr-2 !w-[13px]`} iconName="wallet" />
          <p className={"mr-2"}>{availableBlc}</p>
          {activeInput ? (
            <>
              <p className={"px-2 py-1 rounded-md"}>Half</p>
              <p className={"px-2 py-1 rounded-md"}>Max</p>
            </>
          ) : null}
        </div>
      </div>

      <div className={"flex items-center justify-between"}>
        <InputText
          {...register(type)}
          // passing ref as null to avoid console error
          ref={null}
          type="text"
          placeholder="0.00"
          value={watch(type)}
          disable={!activeInput}
          required={false}
          title={"Amount must have value more than 0.01"}
          className={`h-[46px] max-w-[140px] mr-auto md:max-w-[100px] !text-white-600`}
          inputType={"plain"}
          onChange={handleInputChange}
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
                {selectedToken ? (
                  <div className="flex items-center">
                    <Image
                      src={selectedToken.imgUrl}
                      alt={selectedToken.name}
                      className={`md:!w-[24] md:!h-[24] relative mr-2`}
                      width={24}
                      height={24}
                    />
                    <span className="text-lg text-white-700 font-semibold leading-normal md:text-xsm md:ml-2 whitespace-nowrap">
                      {selectedToken.name}
                    </span>
                    <Icon viewClass={`ml-4 !w-[10px]`} iconName="chevron" />
                  </div>
                ) : null}
              </>
            }
          />
        </div>
      </div>
      <div className={"flex items-center justify-between mt-[4px]"}>
        <p className="text-black-100 font-normal leading-normal text-right text-sm">
          {availableBlcDollar}
        </p>
      </div>
      {Number(watch(type)) > Number(availableBlc) ? (
        <p className={"text-[14px] text-red-400 font-normal"}>
          Exceeds Wallet Balance
        </p>
      ) : null}
      {showAssetDialog ? (
        <AssetSelection
          networkKey={networkKey!}
          selectedItem={selectedToken}
          tokenList={dummyTokenList}
          onSelectHandler={onSelect}
          onClose={() => {
            setShowAssetDialog(false);
          }}
        />
      ) : null}
    </div>
  );
};
