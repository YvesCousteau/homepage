import to_read from "../../data/tr/to_read.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Social() {
  return (
    <SitesCore>
      <SiteSection title="To read" sites={to_read} />
    </SitesCore>
  );
}
