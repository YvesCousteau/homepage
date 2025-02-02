import sitesData_dev_back from "../../data/sites_dev_back.json";
import sitesData_dev_front from "../../data/sites_dev_front.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Dev() {
  return (
    <SitesCore>
      <SiteSection title="Dev Back" sites={sitesData_dev_back} />
      <SiteSection title="Dev Front" sites={sitesData_dev_front} />
    </SitesCore>
  );
}
