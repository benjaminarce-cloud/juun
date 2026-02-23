// ─────────────────────────────────────────────────────────
// JUUN wellness — Site Copy
// All text lives here. Swap without touching components.
// ─────────────────────────────────────────────────────────

export const copy = {
  // ── META ──────────────────────────────────────────────
  meta: {
    title: 'JUUN wellness — Energía natural',
    description:
      'Bebida energética funcional. Sin taurina, sin azúcar añadida, sin sellos de advertencia.',
  },

  // ── HEADER ────────────────────────────────────────────
  header: {
    cta: 'Comprar',
  },

  // ── HERO ──────────────────────────────────────────────
  hero: {
    eyebrow: '✦ Energía funcional · Hecho en México',
    headlineLight: 'Naturalmente',
    headlineBold: 'funcional.',
    subheadline:
      'La bebida que tu cuerpo entiende. Sin química, sin consecuencias.',
    ctaPrimary: 'Comprar ahora',
    ctaSecondary: 'Ver ingredientes',
    strip: [
      '0g azúcar',
      'Sin taurina',
      'Cafeína natural',
    ],
  },

  // ── SINES MARQUEE ──────────────────────────────────────
  // positive: highlighted / negative: appears muted
  sines: [
    { label: 'L-teanina',          positive: true  },
    { label: 'Sin taurina',        positive: false },
    { label: 'Probióticos',        positive: true  },
    { label: 'Sin azúcar añadida', positive: false },
    { label: 'Cafeína de guaraná', positive: true  },
    { label: 'Sin colorantes',     positive: false },
    { label: '9 vitaminas',        positive: true  },
    { label: 'Sin conservadores',  positive: false },
    { label: 'Fibra prebiótica',   positive: true  },
    { label: 'Sin aspartame',      positive: false },
  ],

  // ── VALUE PROPS ───────────────────────────────────────
  beneficios: {
    eyebrow: '✦ Por qué JUUN',
    titleLight: 'Energía que ',
    titleBold: 'dura.',
    subtitle:
      'Formulada para enfoque sostenido — sin el crash, sin el nerviosismo, sin los ingredientes que no reconoces.',
    props: [
      {
        icon: '⚡',
        name: 'Energía limpia',
        desc: 'Cafeína de guaraná y té verde. Sin taurina, sin estimulantes artificiales.',
      },
      {
        icon: '🧠',
        name: 'Claridad mental',
        desc: 'L-teanina 128mg para enfoque sin ansiedad. La combinación que usan los nootrópicos premium.',
      },
      {
        icon: '🌱',
        name: 'Ingredientes reales',
        desc: 'Sin conservadores, sin colorantes, sin saborizantes artificiales. Lo que dice la etiqueta, eso lleva.',
      },
      {
        icon: '✦',
        name: 'Sin sellos',
        desc: 'Cumple NOM-051. Sin azúcares añadidos, sin grasas saturadas. Nada que esconder.',
      },
    ],
  },

  // ── PURCHASE MODULE ───────────────────────────────────
  purchase: {
    eyebrow: '✦ Elige tu JUUN',
    titleLight: 'Primera ',
    titleBold: 'edición.',
    subtitle: 'Checkout seguro y hospedado. Envío desde México.',
    flavorLabel: 'Sabor',
    packLabel: 'Pack',
    qtyLabel: 'Cantidad',
    buyBtn: 'Comprar ahora',
    footerSecure: '🔒 Checkout seguro',
    footerShipping: '📦 Envío desde México',
    summaryTemplate: (pack: string, flavor: string, qty: number) =>
      `${pack} · ${flavor} · Qty ${qty} · Precio y envío en el checkout.`,
  },

  // ── HOW IT WORKS ──────────────────────────────────────
  como: {
    eyebrow: '✦ El proceso',
    titleLight: 'Cómo ',
    titleBold: 'funciona.',
    steps: [
      {
        num: '01',
        title: 'Elige tu pack',
        desc: 'Individual, 6 o 12. El de 6 es el favorito de quien ya sabe que lo va a repetir.',
      },
      {
        num: '02',
        title: 'Bebe con intención',
        desc: 'Mañana, pre-entrenamiento o reset de media tarde. Cuando tu cuerpo lo pida.',
      },
      {
        num: '03',
        title: 'Hazlo ritual',
        desc: 'La meta no es el pico — es el momentum repetible. Energía que puedes sostener.',
      },
    ],
  },

  // ── INGREDIENTS ───────────────────────────────────────
  ingredientes: {
    eyebrow: '✦ La fórmula',
    titleLight: 'Lo que hay ',
    titleBold: 'adentro.',
    yes: {
      heading: 'Lo que SÍ lleva',
      badge: 'Limpio',
      items: [
        { name: 'L-teanina · 128 mg',    note: 'Aminoácido del té verde. Enfoque sin nerviosismo.',              icon: '🧠' },
        { name: 'Cafeína natural · 127 mg', note: 'De guaraná y té verde. Liberación más gradual.',              icon: '⚡' },
        { name: 'Probióticos',             note: 'Fibra prebiótica (inulina) para tu microbioma.',               icon: '🌱' },
        { name: '9 vitaminas',             note: 'Premezcla completa incluyendo ácido ascórbico.',               icon: '💊' },
        { name: 'Saborizantes naturales',  note: 'Nada artificial. El sabor viene de ingredientes reales.',      icon: '🍓' },
      ],
    },
    no: {
      heading: 'Lo que NO lleva',
      badge: 'Sin esto',
      items: [
        { name: 'Sin taurina',              note: 'El ingrediente más cuestionado de las energéticas convencionales. Fuera.',  icon: '🚫' },
        { name: 'Sin azúcar añadida',       note: '0g. Sin jeringas de glucosa, sin crash post-bebida.',                       icon: '🚫' },
        { name: 'Sin colorantes artificiales', note: 'El color viene del saborizante natural, no de FD&C.',                  icon: '🚫' },
        { name: 'Sin conservadores',        note: 'Formulada para ser limpia de etiqueta a etiqueta.',                        icon: '🚫' },
        { name: 'Sin aspartame',            note: 'Sin edulcorantes polémicos. Dulzura de alulosa.',                          icon: '🚫' },
      ],
    },
  },

  // ── SOCIAL PROOF ──────────────────────────────────────
  voces: {
    eyebrow: '✦ Primeras voces',
    titleLight: 'La gente ',
    titleBold: 'habla.',
    testimonials: [
      {
        quote: 'Se siente premium — no empalagosa, no intensa.',
        highlight: 'Justo limpia.',
        author: 'Beta tester · México',
      },
      {
        quote: 'El tipo de energía que puedo',
        highlight: 'repetir todos los días',
        quoteSuffix: 'sin sentirme mal.',
        author: 'Corredora · CDMX',
      },
      {
        quote: 'El empaque ya lo decía todo — y la bebida',
        highlight: 'lo cumplió.',
        author: 'Diseñador · Guadalajara',
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────
  faq: {
    eyebrow: '✦ FAQ',
    titleLight: 'Preguntas ',
    titleBold: 'frecuentes.',
    items: [
      {
        q: '¿Qué es JUUN exactamente?',
        a: 'Una bebida energética funcional carbonatada formulada con ingredientes naturales. Cafeína de guaraná, L-teanina, probióticos y vitaminas — sin taurina, sin azúcar, sin sellos de advertencia. Primera edición limitada, hecha en México.',
      },
      {
        q: '¿Cuándo llega mi pedido?',
        a: 'Estamos en primera edición. Los tiempos de entrega se muestran en el checkout con base en tu ubicación. Enviamos desde México.',
      },
      {
        q: '¿Es dulce?',
        a: 'Tiene dulzor natural de alulosa — percibido como suave y limpio, no empalagoso. Sin azúcares añadidos ni edulcorantes artificiales.',
      },
      {
        q: '¿Política de devoluciones?',
        a: 'Si tienes un problema con tu pedido, escríbenos. Estamos en primera edición y nos interesa que tu experiencia sea perfecta. Contacto en el footer.',
      },
      {
        q: '¿Por qué no tiene sellos de advertencia?',
        a: 'Porque la fórmula no los activa. Sin exceso de calorías, sin azúcares añadidos, sin grasas saturadas, sin sodio en exceso. Solo lleva la leyenda "Contiene cafeína", requerida por NOM-051.',
      },
    ],
  },

  // ── FINAL CTA ─────────────────────────────────────────
  finalCta: {
    stars: '✦ ✧ ✦',
    titleLight: 'Hazlo ',
    titleBold: 'ritual.',
    subtitle: 'Comprar ahora',
    strip: ['Hecho en México 🇲🇽', '@juun.wellnessmty',
],
  },

  // ── FOOTER ────────────────────────────────────────────
  footer: {
    copy: '© 2025 JUUN wellness. México.',
    links: [
      { label: 'Contacto',   href: '#' },
      { label: 'Privacidad', href: '#' },
      { label: 'Instagram',  href: 'https://www.instagram.com/drinkjuun/' },
    ],
  },
}
