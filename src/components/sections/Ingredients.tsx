import { Container } from "@/components/ui/Container";
import { siteCopy } from "@/content/siteCopy";
import { Reveal } from "@/components/motion/Reveal";

export function Ingredients() {
  return (
    <section id="ingredients" className="py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="max-prose">
            <div className="text-[13px] uppercase tracking-[0.16em] text-muted">
              Ingredients
            </div>
            <h2 className="mt-3 text-[28px] md:text-[40px] font-semibold">
              {siteCopy.ingredients.headline}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-muted">
              {siteCopy.ingredients.subhead}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {siteCopy.ingredients.items.map((it) => (
              <div key={it.title} className="rounded-lg border border-border bg-card p-6 shadow-softer">
                <div className="text-[16px] font-medium">{it.title}</div>
                <p className="mt-2 text-[14px] leading-6 text-muted">{it.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
