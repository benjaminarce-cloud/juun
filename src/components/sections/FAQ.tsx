"use client";

import { Container } from "@/components/ui/Container";
import { siteCopy } from "@/content/siteCopy";
import { Reveal } from "@/components/motion/Reveal";
import { useState } from "react";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="max-w-[820px]">
            <div className="text-[13px] uppercase tracking-[0.16em] text-muted">
              FAQ
            </div>
            <h2 className="mt-3 text-[28px] md:text-[40px] font-semibold">
              {siteCopy.faq.headline}
            </h2>

            <div className="mt-8 divide-y divide-border rounded-lg border border-border bg-card shadow-softer">
              {siteCopy.faq.items.map((it, idx) => {
                const isOpen = open === idx;
                return (
                  <div key={it.q} className="p-5">
                    <button
                      className="flex w-full items-center justify-between gap-4 text-left"
                      onClick={() => setOpen(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15px] font-medium">{it.q}</span>
                      <span className="text-muted">{isOpen ? "–" : "+"}</span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-[14px] leading-6 text-muted">
                        {it.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
