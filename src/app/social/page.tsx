import socials from "../../data/social/socials.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Social() {
  return (
    <SitesCore>
      <SiteSection title="Socials" sites={socials} />
    </SitesCore>
  );
}
