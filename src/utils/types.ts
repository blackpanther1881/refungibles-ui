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
