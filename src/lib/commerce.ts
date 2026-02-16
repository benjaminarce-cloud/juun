export type PurchaseSelection = {
  productHandle: string;
  variantId?: string; // Shopify variant ID later
  plan: "single" | "6pack" | "12pack";
  flavor?: string;
  qty: number;
};

export async function beginHostedCheckout(sel: PurchaseSelection) {
  // v1 placeholder: send to a hosted checkout URL you control.
  // Later: call /api/checkout to create a Shopify checkout session / Stripe checkout session.

  const url = process.env.NEXT_PUBLIC_HOSTED_CHECKOUT_URL;
  if (!url) throw new Error("Missing NEXT_PUBLIC_HOSTED_CHECKOUT_URL");

  // Minimal query params (safe placeholder). Replace with server-created session.
  const qp = new URLSearchParams({
    plan: sel.plan,
    qty: String(sel.qty),
    flavor: sel.flavor ?? "",
  });

  return `${url}?${qp.toString()}`;
}

