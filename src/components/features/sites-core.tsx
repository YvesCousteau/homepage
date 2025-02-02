import React, { PropsWithChildren } from "react";

export default function SitesCore({ children }: PropsWithChildren) {
  return <div className="px-8 py-2 h-screen">{children}</div>;
}
