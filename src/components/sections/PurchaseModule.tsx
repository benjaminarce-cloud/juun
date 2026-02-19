"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/motion/Reveal";
import { product } from "@/content/products";
import { cimg } from "@/lib/cloudinary";
import { beginHostedCheckout } from "@/lib/commerce";
import { useMemo, useState } from "react";

type Plan = (typeof product.plans)[number]["id"];
type Flavor = (typeof product.flavors)[number];

export function PurchaseModule() {
  const [plan, setPlan] = useState<Plan>("6pack");
  const [flavor, setFlavor] = useState<Flavor>(product.flavors[0]);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  const imgUrl =
    cimg(product.media.productPublicId, { w: 1600, q: 85, crop: "fill" }) ??
    product.media.productFallback;

  const summary = useMemo(() => {
    const planLabel = product.plans.find((p) => p.id === plan)?.label ?? plan;
    return `${planLabel} · ${flavor} · Qty ${qty}`;
  }, [plan, flavor, qty]);

  async function onBuy() {
    try {
      setLoading(true);
      const url = await beginHostedCheckout({
        productHandle: product.handle,
        plan,
        flavor,
        qty,
      });
      window.location.href = url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="buy" className="py-14 md:py-20">
      <Container>
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Left: Product */}
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg ui-hairline ui-border ui-card ui-shadow-soft">
              <Image
                src={imgUrl}
                alt={`${product.displayName} product`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={false}
              />
              {/* soft sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            </div>
          </div>

          {/* Right: Config */}
          <div className="md:col-span-6 md:pl-4">
            <div className="rounded-lg ui-hairline ui-border ui-card p-6 md:p-7 ui-shadow-softer">
              <div className="text-[12px] uppercase tracking-[0.16em] ui-muted">
                Buy
              </div>

              <h2 className="mt-3 text-[28px] leading-tight md:text-[40px] font-semibold">
                {product.displayName}
              </h2>

              <p className="mt-3 text-[15px] leading-7 ui-muted">
                Choose your pack and flavor. Secure checkout is hosted.
              </p>

              {/* Pack */}
              <div className="mt-8">
                <div className="flex items-baseline justify-between">
                  <div className="text-[12px] uppercase tracking-[0.16em] ui-muted">
                    Pack
                  </div>
                  <div className="text-[13px] ui-muted">
                    {product.plans.find((p) => p.id === plan)?.label}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.plans.map((p) => (
                    <Pill
                      key={p.id}
                      active={plan === p.id}
                      onClick={() => setPlan(p.id)}
                    >
                      {p.label}
                    </Pill>
                  ))}
                </div>
              </div>

              {/* Flavor */}
              <div className="mt-7">
                <div className="flex items-baseline justify-between">
                  <div className="text-[12px] uppercase tracking-[0.16em] ui-muted">
                    Flavor
                  </div>
                  <div className="text-[13px] ui-muted">{flavor}</div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.flavors.map((f) => (
                    <Pill
                      key={f}
                      active={flavor === f}
                      onClick={() => setFlavor(f)}
                    >
                      {f}
                    </Pill>
                  ))}
                </div>
              </div>

              {/* Qty + Summary */}
              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] uppercase tracking-[0.16em] ui-muted">
                    Quantity
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="h-10 w-10 rounded-md ui-hairline ui-border ui-card hover:ui-hover transition"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      –
                    </button>

                    <div className="w-10 text-center text-[15px]">{qty}</div>

                    <button
                      type="button"
                      className="h-10 w-10 rounded-md ui-hairline ui-border ui-card hover:ui-hover transition"
                      onClick={() => setQty((q) => Math.min(9, q + 1))}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-3 text-[13px] ui-muted">
                  {summary} · Shipping and totals shown at checkout.
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button size="lg" onClick={onBuy} disabled={loading} className="w-full">
                  {loading ? "Starting checkout…" : "Buy now"}
                </Button>

                <div className="mt-3 flex items-center justify-between text-[12px] ui-muted">
                  <span>Secure checkout</span>
                  <span>Ships from Mexico</span>
                </div>
              </div>
            </div>

            {/* micro trust line */}
            <p className="mt-4 text-[13px] ui-muted">
              Limited first drop. Keep it calm. Keep it consistent.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
