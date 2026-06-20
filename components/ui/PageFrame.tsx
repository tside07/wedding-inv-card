import * as React from "react";

// The whole page sits in a rounded frame on the grey backdrop (≥640px).
// On mobile (<640px) the frame is dropped: full-bleed, no margin, no radius.
export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg sm:mx-auto sm:my-[18px] sm:max-w-[1240px] sm:overflow-hidden sm:rounded-[10px]">
      {children}
    </div>
  );
}

export default PageFrame;
