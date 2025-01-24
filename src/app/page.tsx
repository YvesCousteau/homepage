import sitesData_config from "../data/sites_config.json";
import sitesData_dev_back from "../data/sites_dev_back.json";
import sitesData_dev_front from "../data/sites_dev_front.json";
import sitesData_social from "../data/sites_social.json";

import { SiteSection } from "@/components/features/sites";

export default function Home() {
  return (
    <div className="p-8 h-screen">
      <SiteSection title="Config" sites={sitesData_config} />
      <SiteSection title="Dev Back" sites={sitesData_dev_back} />
      <SiteSection title="Dev Front" sites={sitesData_dev_front} />
      <SiteSection title="Social" sites={sitesData_social} />
    </div>
  );
}
