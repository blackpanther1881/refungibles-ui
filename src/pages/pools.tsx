import { PageTemplate } from "@/containers/template";
import PoolsContainer from "@/containers/pools";

export default function Pools() {
  return (
    <PageTemplate className="pools" title="Pools">
      <PoolsContainer />
    </PageTemplate>
  );
}
