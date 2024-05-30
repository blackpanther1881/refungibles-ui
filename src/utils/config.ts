import { AssetProps, Collection, TokenList } from "@/utils/types";

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

export const dummyNetworkList = [
  {
    name: "ethereum",
    label: "Ethereum",
    logoUrl: "/images/networks/ethereum.svg"
  },
  {
    name: "optimism",
    label: "Optimism",
    logoUrl: "/images/networks/optimism.svg"
  },
  {
    name: "arbitrum",
    label: "Arbitrum",
    logoUrl: "/images/networks/arbitrum.svg"
  }
];

export const dummyCollections: Collection[] = [
  {
    collections: [
      {
        name: "Milady 912",
        imgUrl: "/images/dummy/milady1.png",
        id: 22323,
        price: "3"
      },
      {
        name: "Milady 712",
        imgUrl: "/images/dummy/milady2.png",
        id: 12323,
        price: "1.2"
      },
      {
        name: "Milady 1212",
        imgUrl: "/images/dummy/milady3.png",
        id: 4242,
        price: "2.2"
      }
    ],
    collectionName: "Milady",
    avatar: "/images/dummy/nft1.png",
    floor_price: 5.33,
    change_24h: "+40%",
    market_cap: 3033434,
    volume_24h: "+33%",
    tvl: 33,
    nft_locked: 33,
    reserve_ratio: "33%",
    nftID: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  },
  {
    collections: [
      {
        name: "Doodles 912",
        imgUrl: "/images/dummy/milady1.png",
        id: 22323,
        price: "3"
      },
      {
        name: "Doodles 712",
        imgUrl: "/images/dummy/milady2.png",
        id: 12323,
        price: "1.2"
      },
      {
        name: "Milady 1212",
        imgUrl: "/images/dummy/milady3.png",
        id: 4242,
        price: "2.2"
      }
    ],
    collectionName: "Doodles",
    avatar: "/images/dummy/nft2.png",
    floor_price: 1.33,
    change_24h: "+10%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%",
    nftID: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  },
  {
    collections: [
      {
        name: "Test3 912",
        imgUrl: "/images/dummy/milady1.png",
        id: 22323,
        price: "3"
      },
      {
        name: "Test3 712",
        imgUrl: "/images/dummy/milady2.png",
        id: 12323,
        price: "1.2"
      },
      {
        name: "Test3 1212",
        imgUrl: "/images/dummy/milady3.png",
        id: 4242,
        price: "2.2"
      }
    ],
    collectionName: "Test3",
    avatar: "/images/dummy/nft3.png",
    floor_price: 31.33,
    change_24h: "-20%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%",
    nftID: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  },
  {
    collections: [
      {
        name: "Test3 912",
        imgUrl: "/images/dummy/milady1.png",
        id: 22323,
        price: "3"
      },
      {
        name: "Test3 712",
        imgUrl: "/images/dummy/milady2.png",
        id: 12323,
        price: "1.2"
      },
      {
        name: "Test3 1212",
        imgUrl: "/images/dummy/milady3.png",
        id: 4242,
        price: "2.2"
      }
    ],
    collectionName: "Test4",
    avatar: "/images/dummy/nft3.png",
    floor_price: 1.33,
    change_24h: "+10%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%",
    nftID: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  },
  {
    collections: [
      {
        name: "Test3 912",
        imgUrl: "/images/dummy/milady1.png",
        id: 22323,
        price: "3"
      },
      {
        name: "Test3 712",
        imgUrl: "/images/dummy/milady2.png",
        id: 12323,
        price: "1.2"
      },
      {
        name: "Test3 1212",
        imgUrl: "/images/dummy/milady3.png",
        id: 4242,
        price: "2.2"
      }
    ],
    collectionName: "Test5",
    avatar: "/images/dummy/nft3.png",
    floor_price: 31.33,
    change_24h: "-20%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%",
    nftID: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  },
  {
    collections: [
      {
        name: "Test3 912",
        imgUrl: "/images/dummy/milady1.png",
        id: 22323,
        price: "3"
      },
      {
        name: "Test3 712",
        imgUrl: "/images/dummy/milady2.png",
        id: 12323,
        price: "1.2"
      },
      {
        name: "Test3 1212",
        imgUrl: "/images/dummy/milady3.png",
        id: 4242,
        price: "2.2"
      }
    ],
    collectionName: "Test6",
    avatar: "/images/dummy/nft3.png",
    floor_price: 1.33,
    change_24h: "+10%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%",
    nftID: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  },
  {
    collections: [
      {
        name: "Test3 912",
        imgUrl: "/images/dummy/milady1.png",
        id: 22323,
        price: "3"
      },
      {
        name: "Test3 712",
        imgUrl: "/images/dummy/milady2.png",
        id: 12323,
        price: "1.2"
      },
      {
        name: "Test3 1212",
        imgUrl: "/images/dummy/milady3.png",
        id: 4242,
        price: "2.2"
      }
    ],
    collectionName: "Test3",
    avatar: "/images/dummy/nft3.png",
    floor_price: 31.33,
    change_24h: "-20%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%",
    nftID: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  },
  {
    collections: [
      {
        name: "Test3 912",
        imgUrl: "/images/dummy/milady1.png",
        id: 22323,
        price: "3"
      },
      {
        name: "Test3 712",
        imgUrl: "/images/dummy/milady2.png",
        id: 12323,
        price: "1.2"
      },
      {
        name: "Test3 1212",
        imgUrl: "/images/dummy/milady3.png",
        id: 4242,
        price: "2.2"
      }
    ],
    collectionName: "Test3",
    avatar: "/images/dummy/nft3.png",
    floor_price: 1.33,
    change_24h: "+10%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%",
    nftID: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  },
  {
    collections: [
      {
        name: "Test3 912",
        imgUrl: "/images/dummy/milady1.png",
        id: 22323,
        price: "3"
      },
      {
        name: "Test3 712",
        imgUrl: "/images/dummy/milady2.png",
        id: 12323,
        price: "1.2"
      },
      {
        name: "Test3 1212",
        imgUrl: "/images/dummy/milady3.png",
        id: 4242,
        price: "2.2"
      }
    ],
    collectionName: "Test3",
    avatar: "/images/dummy/nft3.png",
    floor_price: 31.33,
    change_24h: "-20%",
    market_cap: 33434,
    volume_24h: "+23%",
    tvl: 133,
    nft_locked: 313,
    reserve_ratio: "133%",
    nftID: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  }
];

export const dummyChartData = [
  {
    date: "22 May",
    monthly: "May '24",
    transaction_count: 5824
  },
  {
    date: "23 May",
    monthly: "May '24",
    transaction_count: 5175
  },
  {
    date: "24 May",
    monthly: "May '24",
    transaction_count: 4959
  },
  {
    date: "25 May",
    monthly: "May '24",
    transaction_count: 4713
  },
  {
    date: "26 May",
    monthly: "May '24",
    transaction_count: 4351
  },
  {
    date: "27 May",
    monthly: "May '24",
    transaction_count: 5086
  },
  {
    date: "28 May",
    monthly: "May '24",
    transaction_count: 5261
  },
  {
    date: "29 May",
    monthly: "May '24",
    transaction_count: 4928
  }
];
