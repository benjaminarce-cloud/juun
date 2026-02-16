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
        <Reveal className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card shadow-soft">
            <Image
              src={imgUrl}
              alt={`${product.displayName} product`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="max-prose">
            <div className="text-[13px] uppercase tracking-[0.16em] text-muted">
              Buy
            </div>
            <h2 className="mt-3 text-[28px] leading-tight md:text-[40px] font-semibold">
              {product.displayName}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-muted">
              Choose your pack and flavor. Checkout is secure and hosted.
            </p>

            <div className="mt-8">
              <div className="text-[13px] uppercase tracking-[0.16em] text-muted">
                Pack
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

            <div className="mt-7">
              <div className="text-[13px] uppercase tracking-[0.16em] text-muted">
                Flavor
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

            <div className="mt-7 flex items-center gap-3">
              <div className="text-[13px] uppercase tracking-[0.16em] text-muted">
                Qty
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="h-10 w-10 rounded-md border border-border bg-card hover:bg-fg/5"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  –
                </button>
                <div className="w-10 text-center text-[15px]">{qty}</div>
                <button
                  type="button"
                  className="h-10 w-10 rounded-md border border-border bg-card hover:bg-fg/5"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button size="lg" onClick={onBuy} disabled={loading}>
                {loading ? "Starting checkout…" : "Buy now"}
              </Button>

              <div className="text-[13px] text-muted">
                {summary} · Shipping and final totals shown at checkout.
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
