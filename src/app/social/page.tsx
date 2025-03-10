import sitesData_social from "../../data/sites_social.json";
import sitesData_misc from "../../data/sites_misc.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Social() {
  return (
    <SitesCore>
      <SiteSection title="Social" sites={sitesData_social} />
      <SiteSection title="Misc" sites={sitesData_misc} />
    </SitesCore>
  );
}
