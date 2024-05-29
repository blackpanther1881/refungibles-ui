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
