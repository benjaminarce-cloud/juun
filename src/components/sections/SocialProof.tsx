import { Container } from "@/components/ui/Container";
import { siteCopy } from "@/content/siteCopy";
import { Reveal } from "@/components/motion/Reveal";

export function SocialProof() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="max-prose">
            <div className="text-[13px] uppercase tracking-[0.16em] text-muted">
              Proof
            </div>
            <h2 className="mt-3 text-[28px] md:text-[40px] font-semibold">
              {siteCopy.socialProof.headline}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {siteCopy.socialProof.items.map((t, idx) => (
              <figure key={idx} className="rounded-lg border border-border bg-card p-6 shadow-softer">
                <blockquote className="text-[15px] leading-7">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-[13px] text-muted">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
