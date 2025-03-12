import helps from "../../data/help/helps.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Social() {
  return (
    <SitesCore>
      <SiteSection title="Helps" sites={helps} />
    </SitesCore>
  );
}
