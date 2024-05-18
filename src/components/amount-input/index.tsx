import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/base/buttons";
import { InputText } from "@/components/base/input";
import Image from "next/image";
import { AssetProps } from "@/utils/types";

export enum TokenModalInputBoxTrigger {
  "FROM" = "from",
  "TO" = "to"
}

export interface Props {
  className?: string;
  activeInput?: boolean;
  type?: TokenModalInputBoxTrigger;
  assetInfo: AssetProps;
}

export const AmountInput = ({
  className,
  activeInput = false,
  assetInfo,
  type = TokenModalInputBoxTrigger.FROM
}: Props) => {
  const { register, getValues, setValue, watch } = useFormContext();

  const availableBlc = 222;
  const availableBlcDollar = "$3434";

  const availableBlcHandler = (amount: any) => {
    const field =
      type === TokenModalInputBoxTrigger.FROM ? "amountIn" : "amountOut";
    setValue(field, amount);
  };

  const handleInputChange = (evt: any) => {
    const field =
      type === TokenModalInputBoxTrigger.FROM ? "amountIn" : "amountOut";
    setValue(field, evt.target.value);
  };

  return (
    <div
      className={`px-6 py-[17px] bg-[#F6F7F9] border border-[#DDE1E6] rounded-md md:p-3`}
    >
      <div className={"flex items-center justify-between"}>
        <div className="flex justify-center flex-col flex-1">
          <div className="input-logo flex items-center">
            <Button
              className={`bg-[#fff] border border-white-400 !h-[46px] text-[12px] text-black-600 !py-1.5 button
         md:py-2 md:text-sm flex items-center justify-center !rounded-full md:!h-[40px]`}
              type="custom"
              size="medium"
              onClick={() => {}}
              content={
                <>
                  <div className="flex items-center">
                    <Image
                      src={assetInfo.imgUrl}
                      alt={assetInfo.name}
                      className={`md:!w-[24] md:!h-[24] relative mr-2`}
                      width={24}
                      height={24}
                    />
                    <span className="text-lg text-black-600 font-semibold leading-normal md:text-xsm md:ml-2 whitespace-nowrap">
                      {assetInfo.name}
                    </span>
                  </div>
                </>
              }
            />
          </div>
        </div>
        <InputText
          {...register(
            type === TokenModalInputBoxTrigger.FROM ? "amountIn" : "amountOut"
          )}
          // passing ref as null to avoid console error
          ref={null}
          type="text"
          placeholder="0.00"
          value={watch(
            type === TokenModalInputBoxTrigger.FROM ? "amountIn" : "amountOut"
          )}
          disable={!activeInput}
          required={true}
          title={"Amount must have value more than 0.01"}
          // name="stakeInput"
          className={`h-[46px] max-w-[140px] md:max-w-[100px] !text-black-600`}
          inputType={"plain"}
          onChange={handleInputChange}
        />
      </div>
      <div className={"flex items-center justify-between mt-[15px]"}>
        <p className="leading-normal text-sm md:text-xsm">
          <span className="text-black-100">Available: </span>
          <span
            className={`text-black-200 font-bold  ${
              !activeInput ? "pointer-events-none" : "cursor-pointer"
            }`}
            onClick={() => availableBlcHandler(availableBlc)}
          >
            {availableBlc}
          </span>
        </p>
        <p className="text-black-100 font-normal leading-normal text-right text-sm">
          {availableBlcDollar}
        </p>
      </div>
      {Number(
        watch(type == TokenModalInputBoxTrigger.FROM ? "amountIn" : "amountOut")
      ) > Number(availableBlc) ? (
        <p className={"text-[14px] text-red-400 font-normal mt-1"}>
          Exceeds Wallet Balance
        </p>
      ) : null}
    </div>
  );
};
