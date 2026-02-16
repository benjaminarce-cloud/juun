"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteCopy } from "@/content/siteCopy";
import { Reveal } from "@/components/motion/Reveal";
import { scrollToId } from "@/lib/scroll";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="rounded-lg border border-border bg-card p-10 md:p-14 shadow-soft">
            <div className="max-prose">
              <h2 className="text-[28px] md:text-[44px] font-semibold leading-tight">
                {siteCopy.finalCta.headline}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-muted">
                {siteCopy.finalCta.subhead}
              </p>
              <div className="mt-8">
                <Button size="lg" onClick={() => scrollToId("buy")}>
                  {siteCopy.finalCta.cta}
                </Button>
              </div>
            </div>
          </div>

          <footer className="mt-12 text-[13px] text-muted">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a className="hover:underline" href="#">Shipping</a>
              <a className="hover:underline" href="#">Returns</a>
              <a className="hover:underline" href="#">Contact</a>
              <a className="hover:underline" href="#">Instagram</a>
            </div>
            <div className="mt-4">© {new Date().getFullYear()} {siteCopy.brand}</div>
          </footer>
        </Reveal>
      </Container>
    </section>
  );
}
