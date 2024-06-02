declare global {
  interface Window {
    ethereum: any;
    getOfflineSigner: any;
    keplr: any;
    cosmostation?: any;
    leap: any;
    okxwallet: any;
  }
}
