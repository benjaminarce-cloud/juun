export const product = {
  handle: "functional-drink",
  displayName: "Functional Drink",
  plans: [
    { id: "single", label: "Single", price: "—" },
    { id: "6pack", label: "6 Pack", price: "—" },
    { id: "12pack", label: "12 Pack", price: "—" },
  ] as const,
  flavors: ["Citrus", "Berry", "Mint"] as const,
  media: {
    heroPublicId: undefined as string | undefined, // set later
    productPublicId: undefined as string | undefined, // set later
    heroFallback: "/placeholders/hero.jpg",
    productFallback: "/placeholders/product.png",
  },
};
