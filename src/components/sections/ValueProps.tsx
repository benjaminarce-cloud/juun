import { Container } from "@/components/ui/Container";
import { siteCopy } from "@/content/siteCopy";
import { Reveal } from "@/components/motion/Reveal";

export function ValueProps() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
            {siteCopy.valueProps.map((it) => (
              <div
                key={it.title}
                className="min-w-[240px] rounded-lg border border-border bg-card p-5 shadow-softer md:min-w-0"
              >
                <div className="text-[15px] font-medium">{it.title}</div>
                <p className="mt-2 text-[14px] leading-6 text-muted">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
