import { Container } from "@/components/ui/Container";
import { siteCopy } from "@/content/siteCopy";
import { Reveal } from "@/components/motion/Reveal";

export function ValueProps() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="-mx-4 md:mx-0">
            <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-2 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0">
              {siteCopy.valueProps.map((it) => (
                <div
                  key={it.title}
                  className="min-w-[260px] rounded-lg ui-hairline ui-border ui-card p-5 ui-shadow-softer md:min-w-0 md:p-6 transition-transform duration-200 hover:-translate-y-[2px]"
                >
                  <div className="text-[16px] font-medium leading-6">
                    {it.title}
                  </div>
                  <p className="mt-2 text-[14px] leading-6 ui-muted">
                    {it.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* hide scrollbar (webkit) */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
      </Container>
    </section>
  );
}
