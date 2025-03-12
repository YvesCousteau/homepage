import misc from "../../data/misc/misc.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Social() {
  return (
    <SitesCore>
      <SiteSection title="Misc" sites={misc} />
    </SitesCore>
  );
}
