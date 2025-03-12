import back from "../../data/dev/back.json";
import front from "../../data/dev/front.json";
import style from "../../data/dev/style.json";
import helps from "../../data/dev/helps.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Dev() {
  return (
    <SitesCore>
      <SiteSection title="Back" sites={back} />
      <SiteSection title="Front" sites={front} />
      <SiteSection title="Style" sites={style} />
      <SiteSection title="Helps" sites={helps} />
    </SitesCore>
  );
}
