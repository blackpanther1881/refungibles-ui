import { PageTemplate } from "@/containers/template";
import ExploreTabs from "@/containers/explore";

export default function Explore() {
  return (
    <PageTemplate className="explore" title="Explore">
      <ExploreTabs />
    </PageTemplate>
  );
}
