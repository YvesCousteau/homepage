import essential from "../data/home/essential.json";
import config from "../data/home/config.json";
import i_like_it from "../data/home/i_like_it.json";
import ai from "../data/home/ai.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Home() {
  return (
    <SitesCore>
      <SiteSection title="Essential" sites={essential} />
      <SiteSection title="Config" sites={config} />
      <SiteSection title="AI" sites={ai} />
      <SiteSection title="I like it" sites={i_like_it} />
    </SitesCore>
  );
}
