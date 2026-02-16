"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteCopy } from "@/content/siteCopy";
import { product } from "@/content/products";
import { cimg } from "@/lib/cloudinary";
import { scrollToId } from "@/lib/scroll";

export function Hero() {
  const heroUrl =
    cimg(product.media.heroPublicId, { w: 2000, q: 85, crop: "fill" }) ??
    product.media.heroFallback;

  return (
    <section className="relative min-h-[92vh] bg-grain">
      <div className="absolute inset-0">
        <Image src={heroUrl} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg" />
      </div>

      <Container className="relative z-10 flex min-h-[92vh] flex-col justify-end pb-12 md:pb-16">
        <div className="max-prose">
          <div className="text-[13px] uppercase tracking-[0.16em] text-muted">
            {siteCopy.hero.eyebrow}
          </div>

          <h1 className="mt-4 text-[40px] leading-[1.05] md:text-[64px] md:leading-[1.02] font-semibold">
            {siteCopy.hero.headline}
          </h1>

          <p className="mt-4 text-[16px] leading-7 text-muted md:text-[18px]">
            {siteCopy.hero.subhead}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Button size="lg" onClick={() => scrollToId("buy")}>
              {siteCopy.hero.primaryCta}
            </Button>
            <Button size="lg" variant="secondary" onClick={() => scrollToId("ingredients")}>
              {siteCopy.hero.secondaryCta}
            </Button>
          </div>

          <p className="mt-6 text-[13px] text-muted">{siteCopy.hero.note}</p>
        </div>
      </Container>
    </section>
  );
}
