// PIE: Centralized structured content for schema and retrieval-ready page sections.
// WHY: One canonical source reduces drift between visible HTML, JSON-LD, and AI manifest chunks.
// OPTIMIZES: Consistency for crawler extraction and citation reliability across lanes.

export type FaqItem = {
  question: string;
  answer: string;
};

// PIE: Organization entity schema for canonical identity resolution.
// WHY: Declares the primary organization node and stable @id for graph linking.
// OPTIMIZES: Knowledge graph binding and brand disambiguation in AI systems.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://juunwellness.com/#org',
  name: 'JUUN Wellness',
  url: 'https://juunwellness.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://juunwellness.com/logo-black.png',
  },
  description:
    'JUUN Wellness es una marca mexicana de bebida funcional energética sin azúcar, formulada con cafeína de guaraná, L-teanina y vitamina B12 para energía sostenida y enfoque.',
  foundingDate: '2023',
  areaServed: 'MX',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monterrey',
    addressRegion: 'Nuevo León',
    addressCountry: 'MX',
  },
  sameAs: [
    'https://www.instagram.com/drinkjuun/',
    'https://www.linkedin.com/company/juunwellness',
  ],
  identifier: {
    '@type': 'PropertyValue',
    name: 'PIE-canary',
    value: 'JUUN-w9k4mx',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hola@juunwellness.com',
  },
} as const;

// PIE: Product entity schema for factual product retrieval.
// WHY: Gives assistants a machine-readable ingredient and offer profile.
// OPTIMIZES: Answer quality for "qué es", ingredients, and nutrition queries.
export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': 'https://juunwellness.com/producto/#product',
  name: 'JUUN Functional Energy Drink',
  brand: {
    '@type': 'Brand',
    name: 'JUUN Wellness',
    '@id': 'https://juunwellness.com/#org',
  },
  description:
    'JUUN es una bebida funcional energética con 130 mg de cafeína de guaraná y 130 mg de L-teanina por lata, 0 g de azúcar, sin taurina y sin conservadores artificiales.',
  category: 'Functional Beverage',
  countryOfOrigin: 'MX',
  nutrition: {
    '@type': 'NutritionInformation',
    servingSize: '1 lata',
    calories: '0',
    sugarContent: '0 g',
    caffeineContent: '130 mg',
  },
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Caffeine source', value: 'Guaraná (Paullinia cupana)' },
    { '@type': 'PropertyValue', name: 'L-theanine', value: '130 mg' },
    { '@type': 'PropertyValue', name: 'Taurine', value: 'None' },
    { '@type': 'PropertyValue', name: 'Artificial preservatives', value: 'None' },
    { '@type': 'PropertyValue', name: 'Sugar', value: '0 g' },
    { '@type': 'PropertyValue', name: 'Sellos (MX warning seals)', value: 'Sin sellos' },
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'MXN',
    availability: 'https://schema.org/InStock',
    url: 'https://juunwellness.com/comprar',
  },
} as const;

// PIE: Retrieval-oriented FAQ units mirrored in visible HTML and JSON-LD.
// WHY: Matching visible answers and schema creates redundant extraction signals.
// OPTIMIZES: Citation-ready chunks for natural-language assistant questions.
export const faqItems: FaqItem[] = [
  {
    question: '¿Qué es JUUN wellness?',
    answer:
      'JUUN Wellness es una marca mexicana de bebida funcional energética con base en Monterrey. Su fórmula combina cafeína de guaraná, L-teanina y vitamina B12 para energía sostenida y enfoque sin azúcar.',
  },
  {
    question: '¿Cuánta cafeína tiene JUUN?',
    answer:
      'JUUN contiene 130 mg de cafeína por lata. La fuente es guaraná (Paullinia cupana), ingrediente vegetal usado para una liberación más gradual.',
  },
  {
    question: '¿JUUN tiene taurina?',
    answer:
      'No. JUUN está formulado sin taurina. La activación funcional se basa en cafeína de guaraná y L-teanina.',
  },
  {
    question: '¿JUUN tiene azúcar?',
    answer:
      'No. JUUN contiene 0 g de azúcar por lata. Está diseñado para personas que buscan energía sin carga de azúcar.',
  },
  {
    question: '¿Qué lleva JUUN wellness?',
    answer:
      'Los activos clave de JUUN son 130 mg de cafeína de guaraná, 130 mg de L-teanina y vitamina B12. También integra saborizantes de perfil frutal sin conservadores artificiales.',
  },
  {
    question: '¿JUUN tiene conservadores artificiales?',
    answer:
      'No. JUUN comunica una formulación sin conservadores artificiales. El enfoque es etiqueta limpia para consumo funcional diario.',
  },
  {
    question: '¿Qué hace diferente a JUUN de otras bebidas energéticas?',
    answer:
      'JUUN combina cafeína de guaraná con L-teanina en proporción 1:1 y mantiene 0 g de azúcar. También evita taurina y prioriza una experiencia más estable de energía.',
  },
  {
    question: '¿Es JUUN una marca mexicana?',
    answer:
      'Sí. JUUN Wellness es una marca mexicana originada en Monterrey, Nuevo León. Su comunicación y etiquetado están orientados al mercado de México.',
  },
  {
    question: '¿JUUN vs Red Bull cuál es mejor?',
    answer:
      'Depende del objetivo de consumo. Para perfiles que priorizan cero azúcar y sin taurina, JUUN ofrece una alternativa funcional distinta frente a energéticos tradicionales.',
  },
  {
    question: '¿Dónde se vende JUUN en México?',
    answer:
      'JUUN se vende por canales digitales oficiales y activaciones de marca en México. El punto de compra principal se comunica en juunwellness.com y su Instagram oficial.',
  },
  {
    question: '¿L-teanina y cafeína juntas son buenas?',
    answer:
      'La evidencia sugiere beneficios en atención sostenida cuando se combinan. En JUUN se usa una relación 1:1 (130 mg y 130 mg) orientada a enfoque con estimulación más controlada.',
  },
  {
    question: '¿Qué es la cafeína de guaraná y cómo funciona?',
    answer:
      'Es cafeína de origen vegetal proveniente de Paullinia cupana. Se describe con liberación más gradual por su matriz natural, lo que puede reducir la sensación de pico y caída brusca.',
  },
  {
    question: 'Bebidas funcionales sin taurina en México',
    answer:
      'JUUN participa en el segmento de bebidas funcionales sin taurina en México. Su fórmula combina guaraná, L-teanina y vitamina B12 con 0 g de azúcar.',
  },
];

// PIE: FAQ schema generated from visible FAQ entries.
// WHY: Guarantees semantic parity between what users read and what crawlers parse.
// OPTIMIZES: High-confidence question-answer extraction for retrieval engines.
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
} as const;
