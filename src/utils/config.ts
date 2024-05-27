import { AssetProps, TokenList } from "@/utils/types";

export const dummyTokenList: TokenList = {
  ethereum: [
    {
      name: "ETH",
      identifier: "ETH",
      coinDecimals: 18,
      chain: "ethereum",
      network: "ethereum",
      networkLabel: "ETHEREUM",
      imgUrl: "/images/tokens/eth.svg"
    },
    {
      name: "USDT",
      identifier: "usdt",
      coinDecimals: 6,
      chain: "ethereum",
      network: "ethereum",
      networkLabel: "ETHEREUM",
      imgUrl: "/images/tokens/usdt.svg"
    },
    {
      name: "USDC",
      identifier: "usdc",
      coinDecimals: 6,
      chain: "ethereum",
      network: "ethereum",
      networkLabel: "ETHEREUM",
      imgUrl: "/images/tokens/usdc.svg"
    },
    {
      name: "DAI",
      identifier: "dai",
      coinDecimals: 18,
      chain: "ethereum",
      network: "ethereum",
      networkLabel: "ETHEREUM",
      imgUrl: "/images/tokens/dai.svg"
    }
  ],
  optimism: [
    {
      name: "ETH",
      identifier: "ETH",
      coinDecimals: 18,
      chain: "ethereum",
      network: "ethereum",
      networkLabel: "ETHEREUM",
      imgUrl: "/images/tokens/eth"
    },
    {
      name: "USDT",
      identifier: "usdt",
      coinDecimals: 6,
      chain: "ethereum",
      network: "ethereum",
      networkLabel: "ETHEREUM",
      imgUrl: "/images/tokens/usdt.svg"
    },
    {
      name: "USDC",
      identifier: "usdc",
      coinDecimals: 6,
      chain: "ethereum",
      network: "ethereum",
      networkLabel: "ETHEREUM",
      imgUrl: "/images/tokens/usdc.svg"
    }
  ]
};
