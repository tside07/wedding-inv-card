import type { ComponentType } from "react";
import {
  NotePencil,
  MapPinLine,
  ShareNetwork,
  DeviceMobile,
  ChatCircleText,
  PaintBrush,
} from "@phosphor-icons/react/dist/ssr";
import { features, type Feature } from "@/lib/data";

// Phosphor's Icon type isn't re-exported from /dist/ssr; ComponentType<any>
// sidesteps the propTypes variance mismatch for a simple name->glyph lookup.
const iconMap: Record<Feature["icon"], ComponentType<any>> = {
  rsvp: NotePencil,
  map: MapPinLine,
  share: ShareNetwork,
  device: DeviceMobile,
  wishes: ChatCircleText,
  edit: PaintBrush,
};

// Section 6 - feature grid (no card borders; icon anchors each cell). No eyebrow.
export function Features() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <h2 className="max-w-[24ch] font-display text-[26px] leading-[1.25] text-ink md:text-[34px]">
          Mọi thứ một tấm thiệp cưới cần, gói gọn trong một link
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Glyph = iconMap[feature.icon];
            return (
              <div key={feature.title} className="max-w-[34ch]">
                <Glyph size={26} weight="light" className="text-accent" />
                <h3 className="mt-4 font-display text-[18px] text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-ink-body">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
