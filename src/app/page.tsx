import sitesData_essential from "../data/sites_essential.json";
import sitesData_config from "../data/sites_config.json";
import sitesData_i_like_it from "../data/sites_i_like_it.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Home() {
  return (
    <SitesCore>
      <SiteSection title="Essential" sites={sitesData_essential} />
      <SiteSection title="Config" sites={sitesData_config} />
      <SiteSection title="I like it" sites={sitesData_i_like_it} />
    </SitesCore>
  );
}
