import Image from "next/image";

// "Recent couples" — editorial asymmetric collage (DREAMDAY GALLERY layout):
// one dominant photo on the left, the serif heading set in the whitespace on the
// right, with a small photo above it and a wider photo below.
//
// NOTE: /gallery/*.jpg are free-license placeholders (Unsplash). Couple names &
// years are SAMPLE DATA — replace with real customer weddings before launch.

function Framed({
  src,
  alt,
  ratio,
  position = "center",
  sizes,
}: {
  src: string;
  alt: string;
  ratio: string; // e.g. "4 / 5"
  position?: string;
  sizes: string;
}) {
  return (
    <div className="rounded-[3px] bg-white p-2 shadow-[0_2px_14px_rgba(74,55,40,0.08)]">
      <div className="relative w-full" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="rounded-[2px] object-cover"
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  );
}

function Caption({ name, year }: { name: string; year: number }) {
  return (
    <figcaption className="mt-2">
      <span className="font-serif text-[13px] text-[#4A3728]">{name}</span>{" "}
      <span className="font-sans text-[11px] text-[#8A7A68]">( {year} )</span>
    </figcaption>
  );
}

export function Gallery() {
  return (
    <section className="bg-bg py-[64px]">
      <div className="mx-auto max-w-[1040px] px-10">
        <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.28em] text-[#A1907E]">
          Khoảnh khắc
        </p>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 md:items-start">
          {/* LEFT — dominant portrait */}
          <figure>
            <Framed
              src="/gallery/2.jpg"
              alt="Cặp đôi Trung & An trong ngày cưới"
              ratio="4 / 5"
              position="center 30%"
              sizes="(max-width: 768px) 100vw, 480px"
            />
            <Caption name="Trung & An" year={2025} />
          </figure>

          {/* RIGHT — small photo (offset right), heading, wider photo */}
          <div className="flex flex-col gap-9 md:pt-12">
            <figure className="w-full md:ml-auto md:w-[62%]">
              <Framed
                src="/gallery/5.jpg"
                alt="Khoảnh khắc trao nhẫn của Phong & Chi"
                ratio="4 / 3"
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <Caption name="Phong & Chi" year={2025} />
            </figure>

            <h2 className="font-serif text-[30px] uppercase leading-[1.15] tracking-[0.06em] text-[#5A4636] md:text-[34px]">
              Các cặp đôi
              <br />
              <span className="font-medium">gần đây</span>
            </h2>

            <figure>
              <Framed
                src="/gallery/1.jpg"
                alt="Cặp đôi Minh & Linh trong ngày cưới"
                ratio="4 / 3"
                position="center 38%"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <Caption name="Minh & Linh" year={2025} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
