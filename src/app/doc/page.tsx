import sitesData_book from "../../data/sites_book.json";
import sitesData_doc from "../../data/sites_doc.json";

import { SiteSection } from "@/components/features/sites";

export default function Doc() {
  return (
    <div className="p-8 h-screen">
      <SiteSection title="Book" sites={sitesData_book} />
      <SiteSection title="Doc" sites={sitesData_doc} />
    </div>
  );
}
