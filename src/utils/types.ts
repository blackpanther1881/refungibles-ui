export interface AssetProps {
  name: string;
  identifier: string;
  coinDecimals: number;
  chain: string;
  network: string;
  networkLabel: string;
  imgUrl: string;
}

export interface TokenList {
  [index: string]: AssetProps[];
}

interface CollectionInfo {
  name: string;
  imgUrl: string;
  id: number | string;
  price: string;
}

export type Collection = {
  collections: CollectionInfo[];
  avatar: string;
  collectionName: string;
  floor_price: number;
  change_24h: string;
  market_cap: number;
  volume_24h: string;
  tvl: number;
  nft_locked: number;
  reserve_ratio: string;
  nftID: any;
  description: any;
};

export type Pool = {
  poolID: string | number;
  pool_combination: {
    token1: string;
    token1Img: string;
    token2: string;
    token2Img: string;
  };
  transactions: string | number;
  tvl: string | number;
  volume_24h: string | number;
  volume_7day: string | number;
  apr_1day: string | number;
};
