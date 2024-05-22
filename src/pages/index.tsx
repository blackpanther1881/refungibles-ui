import { PageTemplate } from "@/containers/template";
import Trade from "../containers/trade";
export default function HomePage() {
  return (
    <PageTemplate className="trade" title="Trade">
      <Trade />
    </PageTemplate>
  );
}
