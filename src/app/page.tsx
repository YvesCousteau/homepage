import sitesData_config from "../data/sites_config.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Home() {
  return (
    <SitesCore>
      <SiteSection title="Config" sites={sitesData_config} />
    </SitesCore>
  );
}
