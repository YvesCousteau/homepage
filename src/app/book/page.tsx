import sitesData_book from "../../data/sites_book.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Book() {
  return (
    <SitesCore>
      <SiteSection title="Book" sites={sitesData_book} />
    </SitesCore>
  );
}
