import { Container } from "@/components/ui/Container";
import { siteCopy } from "@/content/siteCopy";
import { Reveal } from "@/components/motion/Reveal";

export function HowItWorks() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {siteCopy.howItWorks.map((s) => (
              <div key={s.k} className="rounded-lg border border-border bg-card p-6 shadow-softer">
                <div className="text-[28px] font-semibold text-muted">{s.k}</div>
                <div className="mt-3 text-[16px] font-medium">{s.title}</div>
                <p className="mt-2 text-[14px] leading-6 text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
