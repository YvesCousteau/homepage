import sitesData_social from "../../data/sites_social.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Doc() {
  return (
    <SitesCore>
      <SiteSection title="Social" sites={sitesData_social} />
    </SitesCore>
  );
}
