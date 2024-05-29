import React from "react";
import { useRouter } from "next/router";
import { PageTemplate } from "@/containers/template";
import CollectionInfo from "@/containers/explore/collections/info";

export default function CollectionInfoPage() {
  const router = useRouter();
  const { nftId } = router.query;
  const pools: any[] = [];
  return (
    <PageTemplate pageTitle={"Collection"}>
      {/*<PoolInfoContainer />*/}
      <CollectionInfo nftID={nftId | 0} />
    </PageTemplate>
  );
}
