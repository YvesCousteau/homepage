import sitesData_doc from "../../data/sites_doc.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Doc() {
  return (
    <SitesCore>
      <SiteSection title="Doc" sites={sitesData_doc} />
    </SitesCore>
  );
}
