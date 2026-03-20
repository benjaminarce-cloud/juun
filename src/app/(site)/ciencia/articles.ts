export const ARTICLE_SLUGS = ['guarana', 'lteanina', 'taurina', 'azucar'] as const

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number]

type ArticleRow = {
  datum: string
  evidence: string
  sourceLabel: string
  sourceHref: string
}

type ArticleCitation = {
  label: string
  href: string
}

type Article = {
  slug: ArticleSlug
  tag: string
  title: string
  excerpt: string
  publishedAt: string
  paragraphs: string[]
  rows: ArticleRow[]
  citations: ArticleCitation[]
}

// Future science articles only need a new key here and a matching slug in ARTICLE_SLUGS.
export const ARTICLES = {
  guarana: {
    slug: 'guarana',
    tag: 'ESTIMULANTE NATURAL',
    title: 'Guaraná vs cafeína de síntesis: por qué importa la fuente',
    excerpt:
      'La cafeína de guaraná (Paullinia cupana) se absorbe de forma más gradual que la cafeína anhidra producida en laboratorio. La matriz natural — taninos, teobromina, catequinas — modula la velocidad de absorción y reduce la sensación de pico abrupto.',
    publishedAt: '2026-03-11',
    paragraphs: [
      'La fuente de cafeína no es un detalle cosmético; modifica la manera en que el cuerpo percibe la activación. En JUUN la cafeína proviene de guaraná, una matriz vegetal que convive naturalmente con otros compuestos bioactivos en lugar de presentarse como un aislado puro.',
      'Cuando la cafeína se formula desde Paullinia cupana, la conversación deja de ser sólo miligramos y pasa a ser contexto metabólico. La presencia de taninos, teobromina y catequinas altera la velocidad de absorción y puede hacer menos abrupta la sensación de pico.',
      'Ese matiz importa porque JUUN no busca una sacudida breve, sino una curva más estable de energía funcional. La elección del guaraná responde a esa lógica de formulación desde la fuente, no sólo desde la dosis.',
    ],
    rows: [
      {
        datum: 'Guaraná como matriz natural de cafeína',
        evidence:
          'La revisión describe a Paullinia cupana como una fuente botánica con cafeína, teobromina, teofilina, taninos y catequinas relevantes para su comportamiento funcional.',
        sourceLabel: 'Schimpl et al. 2013',
        sourceHref: 'https://pubmed.ncbi.nlm.nih.gov/23454763/',
      },
      {
        datum: 'Absorción y liberación más gradual',
        evidence:
          'La literatura citada sobre guaraná lo diferencia de la cafeína aislada por el contexto de su matriz y la forma en que modula la percepción del estímulo.',
        sourceLabel: 'PubMed 23454763',
        sourceHref: 'https://pubmed.ncbi.nlm.nih.gov/23454763/',
      },
    ],
    citations: [
      {
        label: 'Schimpl et al., Journal of Ethnopharmacology (2013)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/23454763/',
      },
    ],
  },
  lteanina: {
    slug: 'lteanina',
    tag: 'STACK NOOTRÓPICO',
    title: 'L-teanina + cafeína: la relación 1:1 que usamos',
    excerpt:
      'La combinación de L-teanina con cafeína ha mostrado mejoras en desempeño atencional en adultos (Haskell et al., Nutritional Neuroscience, 2008). En JUUN usamos 130 mg de cada uno — una relación 1:1 orientada a enfoque sostenido sin nerviosismo.',
    publishedAt: '2026-03-11',
    paragraphs: [
      'La relación entre L-teanina y cafeína es una de las combinaciones mejor estudiadas para tareas que exigen atención sostenida. El valor no está en empujar más fuerte el sistema nervioso, sino en orientar la activación hacia calma alerta y foco cognitivo.',
      'En JUUN usamos 130 mg de L-teanina junto con 130 mg de cafeína de guaraná. La decisión de mantener una relación 1:1 responde a una intención editorial clara: construir una experiencia de enfoque más estable, menos agresiva y más compatible con trabajo profundo.',
      'La lógica detrás de la fórmula no pretende replicar un shot de estímulo. Busca una energía suficientemente nítida para rendir, pero lo bastante contenida para no depender del nerviosismo como motor.',
    ],
    rows: [
      {
        datum: 'Atención sostenida con L-teanina + cafeína',
        evidence:
          'La combinación de L-teanina con cafeína mostró mejoras en desempeño atencional en adultos en comparación con controles.',
        sourceLabel: 'Haskell et al. 2008',
        sourceHref: 'https://pubmed.ncbi.nlm.nih.gov/18681988/',
      },
      {
        datum: 'L-teanina promueve ondas cerebrales alfa asociadas a calma alerta',
        evidence:
          'La literatura sobre L-teanina la vincula con un estado de relajación vigilante, consistente con el objetivo de reducir nerviosismo sin apagar la activación.',
        sourceLabel: 'Nobre et al. 2008',
        sourceHref: 'https://pubmed.ncbi.nlm.nih.gov/18296328/',
      },
    ],
    citations: [
      {
        label: 'Haskell et al., Nutritional Neuroscience (2008)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/18681988/',
      },
      {
        label: 'Nobre et al., Asia Pacific Journal of Clinical Nutrition (2008)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/18296328/',
      },
    ],
  },
  taurina: {
    slug: 'taurina',
    tag: 'DECISIÓN DE FÓRMULA',
    title: 'Por qué JUUN no tiene taurina',
    excerpt:
      'La taurina presente en energéticos tradicionales es de síntesis química. La evidencia sobre su beneficio funcional en bebidas es mixta e inconsistente en literatura revisada por pares. Elegimos no incluirla — la activación de JUUN proviene exclusivamente de cafeína de guaraná y L-teanina.',
    publishedAt: '2026-03-11',
    paragraphs: [
      'La taurina es un ingrediente recurrente en la categoría de energéticos, pero su presencia frecuente no equivale automáticamente a una necesidad funcional para todas las fórmulas. En términos de posicionamiento, muchas bebidas la incluyen porque pertenece al estándar histórico del segmento.',
      'JUUN tomó una ruta distinta. En lugar de sumar ingredientes por inercia de mercado, limitamos la activación a cafeína de guaraná y L-teanina. La ausencia de taurina no es una omisión accidental; es una decisión editorial de fórmula.',
    ],
    rows: [
      {
        datum: 'Taurina en fórmulas estándar de energéticos (por porción)',
        evidence: '1,000 mg típico en energéticos de 250ml según fichas nutricionales públicas.',
        sourceLabel: 'Fuente: etiquetados públicos de fabricantes',
        sourceHref:
          'https://www.redbull.com/int-en/energydrink/red-bull-energy-drink-ingredients-list',
      },
    ],
    citations: [],
  },
  azucar: {
    slug: 'azucar',
    tag: 'PERFIL METABÓLICO',
    title: '0g de azúcar: la decisión detrás de la fórmula',
    excerpt:
      'El pico de insulina post-azúcar es la causa principal del bajón energético en bebidas tradicionales. JUUN aporta 0g de azúcar — la activación no depende del ciclo glucémico, lo que busca una curva de energía más estable.',
    publishedAt: '2026-03-11',
    paragraphs: [
      'Buena parte del bajón asociado a energéticos tradicionales no se explica sólo por la cafeína, sino por la carga de azúcar que acompaña la activación. Cuando la fórmula depende del ciclo glucémico, la sensación subjetiva de energía tiende a ser más corta y más irregular.',
      'JUUN evita esa lógica con 0 g de azúcar por lata. La intención es separar el estímulo cognitivo del impulso glucémico y sostener una experiencia más limpia, especialmente para usuarios que priorizan enfoque prolongado sobre explosión inmediata.',
    ],
    rows: [
      {
        datum: 'Azúcar en energéticos tradicionales estándar',
        evidence: 'Entre 27–54g por porción según categoría y formato.',
        sourceLabel: 'Fuente: etiquetados nutricionales públicos de categoría',
        sourceHref:
          'https://www.monsterenergy.com/en-us/energy-drinks/monster-energy/original-green/',
      },
    ],
    citations: [],
  },
} satisfies Record<ArticleSlug, Article>

export const ARTICLE_LIST = ARTICLE_SLUGS.map((slug) => ARTICLES[slug])

export function isArticleSlug(slug: string): slug is ArticleSlug {
  return ARTICLE_SLUGS.includes(slug as ArticleSlug)
}

export function getArticleBySlug(slug: string) {
  return isArticleSlug(slug) ? ARTICLES[slug] : null
}
