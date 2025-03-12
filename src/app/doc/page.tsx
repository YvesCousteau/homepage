import docs from "../../data/doc/docs.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Doc() {
  return (
    <SitesCore>
      <SiteSection title="Doc" sites={docs} />
    </SitesCore>
  );
}
