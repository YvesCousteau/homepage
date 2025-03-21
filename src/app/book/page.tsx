import books from "../../data/book/books.json";

import { SiteSection } from "@/components/features/sites";
import SitesCore from "@/components/features/sites-core";

export default function Book() {
  return (
    <SitesCore>
      <SiteSection title="Books" sites={books} />
    </SitesCore>
  );
}
