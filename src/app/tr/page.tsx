import sitesData_to_read from "../../data/sites_to_read.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Social() {
  return (
    <SitesCore>
      <SiteSection title="To read" sites={sitesData_to_read} />
    </SitesCore>
  );
}
