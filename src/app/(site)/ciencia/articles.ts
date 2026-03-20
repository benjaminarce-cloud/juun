export const ARTICLE_SLUGS = [
  'guarana',
  'lteanina',
  'taurina',
  'azucar',
  'nom051',
  'consumidor-mexicano',
  'adaptogenos',
  'sistema-nervioso',
  'mercado-global',
] as const

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number]

type ArticleSection = {
  heading: string
  body: string
}

type ArticleEvidenceRow = {
  dato: string
  evidencia: string
  fuente: string
  href: string
}

type ArticleFaq = {
  q: string
  a: string
}

type ArticleReference = {
  text: string
  href?: string
}

type Article = {
  tag: string
  title: string
  date: string
  intro: string
  sections: ArticleSection[]
  evidenceRows: ArticleEvidenceRow[]
  faq: ArticleFaq[]
  references: ArticleReference[]
}

export type ArticleWithSlug = Article & {
  slug: ArticleSlug
}

// Future science articles only need a new key here and a matching slug in ARTICLE_SLUGS.
export const ARTICLES = {
  guarana: {
    tag: 'ESTIMULANTE NATURAL',
    title: 'Guaraná vs café: por qué no se sienten igual aunque ambos tengan cafeína',
    date: '20 de marzo, 2026',
    intro:
      'Cuando una marca dice que usa cafeína de guaraná, mucha gente asume que está hablando de una cafeína completamente distinta a la del café. La realidad es más interesante y más útil: la cafeína es la misma molécula, pero la experiencia no siempre se siente igual.',
    sections: [
      {
        heading: '¿La cafeína del guaraná es distinta?',
        body:
          'En términos químicos, no. La cafeína del guaraná y la del café es cafeína. Lo que sí cambia es el contexto en el que llega al cuerpo. Guaraná es una semilla botánica con otros compuestos bioactivos además de cafeína, y por eso algunos investigadores han planteado que sus efectos subjetivos podrían no depender solo de la cafeína aislada. Una revisión sistemática y metaanálisis sobre guaraná encontró un pequeño efecto positivo en el tiempo de respuesta en tareas cognitivas, pero también reconoció que no está claro si ese cambio se explica solo por la cafeína o por otros compuestos presentes en el ingrediente.',
      },
      {
        heading: 'Entonces, ¿por qué muchas personas sienten que no es lo mismo?',
        body:
          'Porque en la vida real nadie consume \'una molécula\'; consume una bebida. El café suele tomarse rápido, caliente, en tazas de volumen variable y con perfiles muy distintos según el tostado, la preparación o si se toma en ayunas. El guaraná, en cambio, suele aparecer dentro de formulaciones funcionales con dosis más controladas y combinado con otros ingredientes diseñados para modular la experiencia. La semilla contiene cafeína junto con taninos, saponinas y polifenoles, lo que ayuda a explicar por qué el efecto percibido puede sentirse distinto, aunque la evidencia no sostenga una diferencia farmacocinética radical y universal.',
      },
      {
        heading: 'Lo que sí dice la ciencia',
        body:
          'La forma rigurosa de hablar de guaraná no es decir que \'es otra cafeína\', sino que es una fuente botánica de cafeína dentro de una matriz distinta. La ciencia actual permite decir que guaraná es más que una palabra decorativa en la etiqueta y que puede influir en cómo se vive la energía de una formulación; no permite afirmar con seguridad que siempre tenga una absorción mucho más lenta o una farmacocinética completamente diferente al café por sí solo.',
      },
      {
        heading: 'Qué significa esto para una bebida funcional',
        body:
          'En una categoría saturada de estímulo agresivo, la oportunidad no está en vender misticismo botánico. Está en diseñar una experiencia más útil. Si una bebida con guaraná se siente más estable, más limpia o menos áspera, probablemente la explicación esté en la formulación total, no en una narrativa simplista. Esa es una posición mucho más sólida: menos mito, más diseño inteligente de energía.',
      },
    ],
    evidenceRows: [
      {
        dato: 'Guaraná y rendimiento cognitivo',
        evidencia:
          'Revisión sistemática y metaanálisis. Efecto positivo pequeño en tiempo de respuesta; mecanismo no completamente atribuible a cafeína sola.',
        fuente: 'Hack et al., Nutrients (2023)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/36678305/',
      },
      {
        dato: 'Composición botánica de Paullinia cupana',
        evidencia: 'La semilla contiene cafeína junto con taninos, saponinas, teobromina y polifenoles.',
        fuente: 'Schimpl et al., Journal of Ethnopharmacology (2013)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/23454763/',
      },
    ],
    faq: [
      {
        q: '¿La cafeína del guaraná es diferente a la del café?',
        a: 'No en términos de molécula. La diferencia está en la matriz del ingrediente y en la formulación del producto.',
      },
      {
        q: '¿El guaraná siempre se absorbe más lento?',
        a: 'La evidencia disponible no sostiene de forma contundente que siempre ocurra así.',
      },
      {
        q: '¿Por qué una bebida con guaraná puede sentirse más suave?',
        a: 'Porque influyen la dosis, los otros compuestos del ingrediente y el diseño completo de la bebida.',
      },
    ],
    references: [
      {
        text: 'Hack B, et al. Effect of Guarana (Paullinia cupana) on Cognitive Performance: A Systematic Review and Meta-Analysis. Nutrients. 2023;15(2):434.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/36678305/',
      },
      {
        text: 'Gurney T, Ronca F. Comment on Hack et al. Nutrients. 2023;15(8):2000.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/37111219/',
      },
      {
        text: 'Schimpl FC, et al. Guarana: revisiting a highly caffeinated plant from the Amazon. Journal of Ethnopharmacology. 2013;150(1):14-31.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/23454763/',
      },
    ],
  },
  lteanina: {
    tag: 'STACK NOOTRÓPICO',
    title: 'L-teanina + cafeína: la combinación para enfoque que la categoría energética dejó de lado',
    date: '20 de marzo, 2026',
    intro:
      'La industria energética tradicional pasó años optimizando intensidad. Mientras tanto, en la literatura sobre cognición y nootrópicos, otra combinación fue ganando prestigio silenciosamente: L-teanina más cafeína. No porque sea una moda nueva, sino porque lleva años estudiándose en tareas de atención, alerta y manejo de distracción.',
    sections: [
      {
        heading: '¿Qué son la L-teanina y la cafeína?',
        body:
          'La cafeína es el estimulante dietario más utilizado del mundo y se asocia con mayor alerta y menor percepción de fatiga. La L-teanina es un aminoácido presente de forma natural en el té y se ha estudiado por su posible relación con un estado de calma atenta. Por separado ya son interesantes; juntos, el objetivo deja de ser solo \'más energía\' y pasa a ser \'energía más utilizable\'.',
      },
      {
        heading: 'Qué dice la evidencia sobre la combinación',
        body:
          'Un metaanálisis de estudios aleatorizados y controlados encontró que la combinación de L-teanina y cafeína puede tener efectos beneficiosos agudos sobre atención y alerta en la primera etapa posterior al consumo. Estudios experimentales también reportaron mejoras en tareas de cambio de atención, precisión y menor susceptibilidad a distracciones cuando ambas se administraron juntas. La literatura no afirma que funcione igual para todo el mundo, pero sí muestra una señal consistente: comparada con cafeína sola, puede ofrecer una experiencia cognitiva más afinada.',
      },
      {
        heading: 'Por qué esto importa hoy',
        body:
          'El consumidor moderno ya no solo quiere \'sentirse despierto\'. Quiere trabajar, estudiar, entrenar o concentrarse sin sentir que el producto le estorba. Ahí es donde L-teanina + cafeína gana relevancia: no como promesa milagrosa, sino como una arquitectura funcional mejor alineada con las demandas de enfoque contemporáneo.',
      },
      {
        heading: 'Lo que esta combinación no significa',
        body:
          'No significa que una bebida pueda reemplazar sueño, pausas o hábitos básicos de recuperación. La evidencia habla de efectos agudos en ciertos contextos, no de superpoderes cognitivos. Precisamente por eso la combinación conserva credibilidad: porque puede sostenerse con más rigor que muchas promesas vacías de la categoría energética legacy.',
      },
    ],
    evidenceRows: [
      {
        dato: 'L-teanina + cafeína en atención y alerta',
        evidencia:
          'Metaanálisis de estudios aleatorizados. Efectos beneficiosos agudos en atención en la primera etapa post-consumo.',
        fuente: 'Camfield et al., Nutritional Neuroscience (2014)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/24946991/',
      },
      {
        dato: 'Combinación vs cafeína sola en tareas cognitivas',
        evidencia: 'Mejoras en cambio de atención y menor susceptibilidad a distracciones frente a cafeína sola.',
        fuente: 'Owen et al., Nutritional Neuroscience (2008)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/18681988/',
      },
      {
        dato: 'L-teanina y ondas cerebrales alfa',
        evidencia: 'Asociación con estado de calma atenta sin sedación.',
        fuente: 'Nobre et al., Asia Pacific Journal of Clinical Nutrition (2008)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/18296328/',
      },
    ],
    faq: [
      {
        q: '¿Para qué sirve combinar L-teanina con cafeína?',
        a: 'Se ha estudiado por su posible capacidad de apoyar la atención y la alerta en tareas cognitivamente demandantes.',
      },
      {
        q: '¿Es mejor que consumir solo cafeína?',
        a: 'En ciertos estudios, la combinación mostró ventajas frente a la cafeína sola en aspectos de atención y distracción, aunque no en todos los contextos.',
      },
      {
        q: '¿Quita por completo el nerviosismo?',
        a: 'No necesariamente. La respuesta depende de dosis, persona y contexto de uso.',
      },
    ],
    references: [
      {
        text: 'Camfield DA, et al. Acute effects of tea constituents L-theanine, caffeine, and epigallocatechin gallate on cognitive function and mood: a systematic review and meta-analysis. Nutritional Neuroscience. 2014;17(4):167-176.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/24946991/',
      },
      {
        text: 'Giesbrecht T, et al. The combination of L-theanine and caffeine improves cognitive performance and increases subjective alertness. Nutritional Neuroscience. 2010;13(6):283-290.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/21040626/',
      },
      {
        text: 'Owen GN, et al. The combined effects of L-theanine and caffeine on cognitive performance and mood. Nutritional Neuroscience. 2008;11(4):193-198.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/18681988/',
      },
      {
        text: 'Sohail AA, et al. The Cognitive-Enhancing Outcomes of Caffeine and L-Theanine: A Systematic Review. Cureus. 2021;13(12):e20513.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/35111479/',
      },
    ],
  },
  taurina: {
    tag: 'DECISIÓN DE FÓRMULA',
    title: 'Por qué JUUN no tiene taurina',
    date: '11 de marzo, 2026',
    intro:
      'La taurina presente en energéticos tradicionales es de síntesis química. La evidencia sobre su beneficio funcional en bebidas es mixta e inconsistente en literatura revisada por pares. Elegimos no incluirla: la activación de JUUN proviene exclusivamente de cafeína de guaraná y L-teanina.',
    sections: [
      {
        heading: 'La taurina como estándar de categoría',
        body:
          'La taurina es un ingrediente recurrente en la categoría de energéticos, pero su presencia frecuente no equivale automáticamente a una necesidad funcional para todas las fórmulas. En términos de posicionamiento, muchas bebidas la incluyen porque pertenece al estándar histórico del segmento.',
      },
      {
        heading: 'Una decisión editorial de fórmula',
        body:
          'JUUN tomó una ruta distinta. En lugar de sumar ingredientes por inercia de mercado, limitamos la activación a cafeína de guaraná y L-teanina. La ausencia de taurina no es una omisión accidental; es una decisión editorial de fórmula.',
      },
    ],
    evidenceRows: [
      {
        dato: 'Taurina en fórmulas estándar de energéticos (por porción)',
        evidencia: '1,000 mg típico en energéticos de 250ml según fichas nutricionales públicas.',
        fuente: 'Fuente: etiquetados públicos de fabricantes',
        href: 'https://www.redbull.com/int-en/energydrink/red-bull-energy-drink-ingredients-list',
      },
    ],
    faq: [],
    references: [
      {
        text: 'Red Bull Energy Drink Ingredients List.',
        href: 'https://www.redbull.com/int-en/energydrink/red-bull-energy-drink-ingredients-list',
      },
    ],
  },
  azucar: {
    tag: 'PERFIL METABÓLICO',
    title: '0g de azúcar: la decisión detrás de la fórmula',
    date: '11 de marzo, 2026',
    intro:
      'El pico de insulina post-azúcar es la causa principal del bajón energético en bebidas tradicionales. JUUN aporta 0g de azúcar: la activación no depende del ciclo glucémico, lo que busca una curva de energía más estable.',
    sections: [
      {
        heading: 'El problema del impulso glucémico',
        body:
          'Buena parte del bajón asociado a energéticos tradicionales no se explica sólo por la cafeína, sino por la carga de azúcar que acompaña la activación. Cuando la fórmula depende del ciclo glucémico, la sensación subjetiva de energía tiende a ser más corta y más irregular.',
      },
      {
        heading: 'Por qué importa una fórmula sin azúcar',
        body:
          'JUUN evita esa lógica con 0 g de azúcar por lata. La intención es separar el estímulo cognitivo del impulso glucémico y sostener una experiencia más limpia, especialmente para usuarios que priorizan enfoque prolongado sobre explosión inmediata.',
      },
    ],
    evidenceRows: [
      {
        dato: 'Azúcar en energéticos tradicionales estándar',
        evidencia: 'Entre 27–54g por porción según categoría y formato.',
        fuente: 'Fuente: etiquetados nutricionales públicos de categoría',
        href: 'https://www.monsterenergy.com/en-us/energy-drinks/monster-energy/original-green/',
      },
    ],
    faq: [],
    references: [
      {
        text: 'Monster Energy Original Green. Información de producto y etiquetado nutrimental.',
        href: 'https://www.monsterenergy.com/en-us/energy-drinks/monster-energy/original-green/',
      },
    ],
  },
  nom051: {
    tag: 'REGULACIÓN',
    title: 'Cómo leer una etiqueta de bebida en México: lo que la NOM-051 realmente exige',
    date: '20 de marzo, 2026',
    intro:
      'En México, una buena etiqueta no solo informa: también comunica seriedad. La NOM-051-SCFI/SSA1-2010 y su modificación de 2020 redefinieron la relación entre marca y consumidor al establecer reglas claras para el etiquetado de alimentos y bebidas no alcohólicas preenvasados.',
    sections: [
      {
        heading: 'Qué regula realmente la NOM-051',
        body:
          'La norma establece la información comercial y sanitaria que deben contener los productos preenvasados en México: denominación, lista de ingredientes, información nutrimental, contenido neto, identificación del lote y, cuando aplica, sellos o leyendas precautorias. La modificación de 2020 fortaleció especialmente el sistema de etiquetado frontal para advertir excesos nutrimentales.',
      },
      {
        heading: 'Sellos y leyendas: no son lo mismo',
        body:
          'Los sellos frontales se refieren a excesos de nutrimentos críticos bajo los criterios definidos por la regulación; las leyendas precautorias funcionan como advertencias específicas en determinados casos, por ejemplo por cafeína o edulcorantes. La NOM-051 también restringe el uso de personajes infantiles, celebridades o elementos interactivos en productos con ciertas advertencias.',
      },
      {
        heading: 'Por qué esto importa en bebidas funcionales',
        body:
          'En categorías donde muchas marcas intentan verse \'limpias\' o \'wellness\' solo desde el empaque, la disciplina regulatoria importa más que el estilo visual. Una bebida seria no solo formula bien; también dice con claridad lo que contiene y cómo debe interpretarse.',
      },
      {
        heading: 'Cómo leer una bebida con más criterio',
        body:
          'Primero, mira qué declara realmente la etiqueta, no solo lo que sugiere el diseño. Después, revisa ingredientes, información nutrimental y advertencias aplicables. Una estética limpia no sustituye cumplimiento normativo. En el mercado mexicano, una marca que sabe etiquetar bien transmite algo valioso antes de que pruebes el producto: que entiende su responsabilidad.',
      },
    ],
    evidenceRows: [
      {
        dato: 'NOM-051 — norma original',
        evidencia: 'Especificaciones generales de etiquetado para alimentos y bebidas no alcohólicas preenvasados.',
        fuente: 'DOF, 2010',
        href: 'https://www.dof.gob.mx/nota_detalle.php?codigo=5137518&fecha=05/04/2010',
      },
      {
        dato: 'Modificación NOM-051 — etiquetado frontal',
        evidencia: 'Introduce sistema de sellos de advertencia y leyendas precautorias. Publicada en DOF.',
        fuente: 'DOF, 27 de marzo de 2020',
        href: 'https://www.dof.gob.mx/nota_detalle.php?codigo=5590745&fecha=27/03/2020',
      },
    ],
    faq: [
      {
        q: '¿Qué regula la NOM-051?',
        a: 'La información comercial y sanitaria del etiquetado de alimentos y bebidas no alcohólicas preenvasados en México.',
      },
      {
        q: '¿Qué diferencia hay entre sellos y leyendas precautorias?',
        a: 'No son lo mismo: los sellos señalan excesos nutrimentales y las leyendas advierten condiciones específicas cuando aplican.',
      },
      {
        q: '¿Una bebida funcional también debe cumplirla?',
        a: 'Sí, si entra dentro del alcance de la norma como bebida no alcohólica preenvasada.',
      },
    ],
    references: [
      {
        text: 'Secretaría de Economía, Secretaría de Salud. NOM-051-SCFI/SSA1-2010. Diario Oficial de la Federación. 2010.',
        href: 'https://www.dof.gob.mx/nota_detalle.php?codigo=5137518&fecha=05/04/2010',
      },
      {
        text: 'Modificación a la NOM-051-SCFI/SSA1-2010. Diario Oficial de la Federación. 27 de marzo de 2020.',
        href: 'https://www.dof.gob.mx/nota_detalle.php?codigo=5590745&fecha=27/03/2020',
      },
      {
        text: 'Gobierno de México. Manual de la Modificación a la NOM-051. 2021.',
      },
    ],
  },
  'consumidor-mexicano': {
    tag: 'MERCADO',
    title: 'El consumidor mexicano ya no busca solo energía: busca una bebida que le sirva',
    date: '20 de marzo, 2026',
    intro:
      'El cambio más importante en la categoría no es que la gente haya dejado de buscar energía. Es que ahora la energía se evalúa de otra manera. Hoy pesan más la utilidad, la confianza, el balance y la coherencia con objetivos de bienestar que el simple impacto inicial.',
    sections: [
      {
        heading: 'La categoría funcional en México sí se está moviendo',
        body:
          'Grand View Research estima que el mercado mexicano de bebidas funcionales generó ingresos por USD 3,186.4 millones en 2024 y proyecta que alcance USD 5,660.6 millones en 2030, con una tasa compuesta anual de 10.1%. Dentro de ese mercado, energy drinks & shots fue el segmento de mayor ingreso en 2024, mientras que nutraceutical drinks aparece como el segmento de crecimiento más rápido. Eso no solo habla de tamaño; habla de sofisticación en la demanda.',
      },
      {
        heading: 'Qué cambió en la mente del consumidor',
        body:
          'NielsenIQ describe el consumo en México de 2025 con conceptos como redefinición del ahorro y estrategias polarizadas. Cuando eso se cruza con salud y bienestar, el resultado es una compra más exigente: la gente quiere justificar mejor qué toma, por qué lo toma y qué recibe a cambio. A nivel global, NIQ también reporta que la salud y el wellness siguen siendo una intención de compra importante, aun con barreras de precio y contexto económico.',
      },
      {
        heading: 'Por qué el viejo lenguaje del energético ya no basta',
        body:
          'El modelo clásico del energético fue diseñado para otra etapa cultural. Hoy convive con presiones distintas: reducción de azúcar, búsqueda de funcionalidad concreta y mayor atención a claims de bienestar. Euromonitor resume esa transición al señalar que las tendencias de salud y wellness están empujando mayor interés en opciones con menos azúcar y en productos multifuncionales.',
      },
      {
        heading: 'La oportunidad',
        body:
          'Una marca funcional no necesita entrar a la conversación como \'otro energético\'. Le conviene mucho más presentarse como una bebida diseñada para un tipo de energía más compatible con la vida real: trabajo, estudio, rutina, claridad y control. Ese reposicionamiento encaja mejor con la evolución del consumidor mexicano y con la manera en que la categoría funcional está creciendo.',
      },
    ],
    evidenceRows: [
      {
        dato: 'Mercado mexicano de bebidas funcionales',
        evidencia: 'USD 3,186.4M en 2024. Proyección USD 5,660.6M para 2030. CAGR 10.1%.',
        fuente: 'Grand View Research, 2024',
        href: 'https://www.grandviewresearch.com/industry-analysis/mexico-functional-drinks-market',
      },
      {
        dato: 'Comportamiento del consumidor México 2025',
        evidencia:
          'Redefinición del ahorro, polarización de estrategias, mayor exigencia en relación valor-experiencia.',
        fuente: 'NielsenIQ, La visión completa del consumo en México 2025',
        href: 'https://nielseniq.com/global/es/insights/report/2025/la-vision-completa-del-consumo-en-mexico/',
      },
    ],
    faq: [
      {
        q: '¿Está creciendo el mercado funcional en México?',
        a: 'Sí. Hay proyecciones de crecimiento sólido hacia 2030, con energy drinks aún fuertes y otras subcategorías creciendo más rápido.',
      },
      {
        q: '¿Qué busca hoy el consumidor mexicano?',
        a: 'Más utilidad, mejor relación valor-experiencia, y productos alineados con salud y bienestar.',
      },
      {
        q: '¿Las energéticas tradicionales siguen siendo relevantes?',
        a: 'Sí, pero están bajo presión por cambios en preferencias hacia menos azúcar y más funcionalidad.',
      },
    ],
    references: [
      {
        text: 'Grand View Research. Mexico Functional Drinks Market Size & Outlook, 2025-2030.',
        href: 'https://www.grandviewresearch.com/industry-analysis/mexico-functional-drinks-market',
      },
      {
        text: 'NielsenIQ. La visión completa del consumo en México 2025.',
        href: 'https://nielseniq.com/global/es/insights/report/2025/la-vision-completa-del-consumo-en-mexico/',
      },
      {
        text: 'Euromonitor International. Energy Drinks. Soft Drinks industry reports.',
      },
    ],
  },
  adaptogenos: {
    tag: 'BOTÁNICA FUNCIONAL',
    title: 'Adaptógenos: por qué la ciencia los estudia desde hace décadas y hoy vuelven al centro',
    date: '20 de marzo, 2026',
    intro:
      'La palabra adaptógeno puede sonar nueva en la cultura wellness, pero en la literatura científica no lo es. Desde hace décadas existe investigación que intenta describir cómo ciertos compuestos vegetales podrían apoyar la respuesta del organismo frente al estrés y contribuir a la homeostasis.',
    sections: [
      {
        heading: 'Qué son los adaptógenos',
        body:
          'Una de las descripciones clásicas en la literatura los presenta como sustancias que aumentan la \'resistencia no específica\' al estrés. Revisiones posteriores han discutido sus posibles efectos neuroprotectores, antifatiga, ansiolíticos y de soporte del sistema nervioso central, aunque siempre con diferencias importantes según el ingrediente estudiado. Ingredientes como Rhodiola rosea, Eleutherococcus senticosus, Schisandra chinensis y Withania somnifera aparecen de forma recurrente en las revisiones modernas.',
      },
      {
        heading: 'Qué tan fuerte es la evidencia',
        body:
          'Existe un cuerpo de investigación serio. La parte honesta es que la evidencia es heterogénea. Revisiones sistemáticas sobre plantas adaptógenas y estrés han examinado su relación con variables de cortisol y estrés percibido, pero los resultados dependen del extracto, la dosis, el diseño del estudio y la calidad metodológica. No es humo, pero tampoco es un terreno para claims inflados.',
      },
      {
        heading: 'Por qué hoy están en tendencia',
        body:
          'No porque la ciencia haya aparecido ayer, sino porque el consumidor cambió. En una cultura marcada por burnout, carga mental y sueño deficiente, ingredientes asociados con resiliencia y soporte del estrés encuentran una nueva relevancia comercial. La categoría se volvió tendencia cuando el mercado finalmente alcanzó una conversación que la ciencia llevaba años explorando.',
      },
      {
        heading: 'Cómo hablar de adaptógenos bien',
        body:
          'No consiste en exagerarlos. Consiste en ubicarlos correctamente: como una categoría con historia científica, promesa interesante y límites claros. Para una marca funcional, esa combinación de curiosidad y rigor es exactamente donde nace la credibilidad.',
      },
    ],
    evidenceRows: [
      {
        dato: 'Base conceptual de adaptógenos',
        evidencia: 'Mecanismos de estrés-protección y efectos sobre SNC. Referencia clásica del campo.',
        fuente: 'Panossian & Wikman, Pharmaceuticals (2010)',
        href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3991026/',
      },
      {
        dato: 'Evidencia sobre eficacia adaptógena',
        evidencia: 'Revisión de eficacia basada en evidencia en fatiga y mecanismos moleculares.',
        fuente: 'Panossian & Wikman, Current Clinical Pharmacology (2009)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/19500070/',
      },
    ],
    faq: [
      {
        q: '¿Los adaptógenos son una moda nueva?',
        a: 'No. La literatura científica los estudia desde hace décadas.',
      },
      {
        q: '¿Sirven para el estrés?',
        a: 'Hay evidencia prometedora, pero varía según ingrediente, dosis y calidad del estudio.',
      },
      {
        q: '¿Se pueden comunicar sin hacer claims médicos?',
        a: 'Sí, si se habla de forma responsable, sin prometer tratamiento o cura.',
      },
    ],
    references: [
      {
        text: 'Panossian A, Wikman G. Evidence-based efficacy of adaptogens in fatigue. Current Clinical Pharmacology. 2009;4(3):198-219.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/19500070/',
      },
      {
        text: 'Panossian A, Wikman G. Effects of adaptogens on the central nervous system. Pharmaceuticals. 2010;3(1):188-224.',
        href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3991026/',
      },
    ],
  },
  'sistema-nervioso': {
    tag: 'RENDIMIENTO',
    title: 'Tu sistema nervioso en una jornada larga de enfoque: lo que pasa y qué puedes hacer',
    date: '20 de marzo, 2026',
    intro:
      'Una sesión larga de trabajo no se pierde solo porque \'te dé sueño\'. Se deteriora porque sostener atención tiene un costo mental y porque el estrés, el cansancio y la saturación van erosionando la calidad del enfoque.',
    sections: [
      {
        heading: 'Qué pasa con la concentración',
        body:
          'Harvard Health señala que los cambios en capacidad de concentración pueden estar relacionados con estrés, estado de ánimo, problemas médicos y sueño. También recomienda prácticas como reducir distractores, mindfulness y hábitos que favorezcan una atención más estable. Concentrarse no es solo \'echarle ganas\'; es una función sensible al contexto físico y emocional.',
      },
      {
        heading: 'Cómo entra el estrés en la ecuación',
        body:
          'Mayo Clinic describe que los síntomas de estrés pueden afectar pensamientos, emociones y conducta, e incluye problemas de memoria y enfoque entre sus efectos. La exposición prolongada a hormonas del estrés puede alterar múltiples procesos del cuerpo y elevar riesgo de ansiedad, depresión y dificultades de concentración.',
      },
      {
        heading: 'Qué sí ayuda',
        body:
          'La respuesta no es heroísmo continuo. Suele funcionar mejor una arquitectura sencilla: menos multitarea, pausas breves, movimiento ligero, menos ruido y una estrategia realista para administrar bloques de trabajo. Una bebida funcional entra mejor como apoyo dentro de una rutina inteligente que como sustituto de esa rutina.',
      },
      {
        heading: 'Dónde encaja una bebida funcional',
        body:
          'Una bebida bien formulada puede ayudar a sostener una jornada, pero no corrige por sí sola estrés crónico, sueño deficiente o mala estructura de trabajo. La oportunidad de marca está en acompañar un modelo de rendimiento más maduro: energía que ayuda a trabajar mejor, no una narrativa falsa de invencibilidad.',
      },
    ],
    evidenceRows: [
      {
        dato: 'Estrés y concentración',
        evidencia: 'Los síntomas de estrés incluyen problemas de memoria, enfoque y funcionamiento mental.',
        fuente: 'Mayo Clinic. Stress symptoms: Effects on your body and behavior.',
        href: 'https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-symptoms/art-20050987',
      },
      {
        dato: 'Hábitos para la concentración',
        evidencia: 'Reducir distractores, mindfulness y hábitos básicos mejoran la atención sostenida.',
        fuente: 'Harvard Health Publishing. Pay attention to concentration.',
        href: 'https://www.health.harvard.edu/mind-and-mood/pay-attention-to-concentration',
      },
    ],
    faq: [
      {
        q: '¿El estrés afecta la concentración?',
        a: 'Sí. Mayo Clinic y Harvard reconocen efectos del estrés sobre memoria, foco y funcionamiento mental.',
      },
      {
        q: '¿Por qué me cuesta más pensar después de varias horas?',
        a: 'Porque la atención sostenida tiene un costo creciente y empeora con cansancio, estrés y mala recuperación.',
      },
      {
        q: '¿Una bebida funcional reemplaza descanso o pausas?',
        a: 'No. Puede apoyar, pero no sustituir hábitos básicos de rendimiento y recuperación.',
      },
    ],
    references: [
      {
        text: 'Harvard Health Publishing. Pay attention to concentration.',
        href: 'https://www.health.harvard.edu/mind-and-mood/pay-attention-to-concentration',
      },
      {
        text: 'Mayo Clinic. Stress symptoms: Effects on your body and behavior.',
        href: 'https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-symptoms/art-20050987',
      },
    ],
  },
  'mercado-global': {
    tag: 'INDUSTRIA',
    title: 'El mercado global de energéticas mueve miles de millones. El problema es que la categoría sigue mal diseñada.',
    date: '20 de marzo, 2026',
    intro:
      'El tamaño de una categoría no prueba que esté bien resuelta. Solo prueba que existe una necesidad. En bebidas energéticas, esa necesidad sigue siendo enorme y gran parte de la categoría todavía opera con una lógica vieja.',
    sections: [
      {
        heading: 'El mercado crece, pero también cambia',
        body:
          'Grand View Research estima que el mercado global de energéticas alcanzó USD 79.39 mil millones en 2024 y proyecta USD 125.11 mil millones para 2030. En paralelo, el mercado de bebidas funcionales también se expande, con proyección a USD 315.89 mil millones para 2033. El crecimiento no ocurre en el vacío: la conversación ya no es solo \'energía\', es bienestar, función y claims más específicos.',
      },
      {
        heading: 'Qué está empujando la transformación',
        body:
          'Euromonitor resume la tendencia con claridad: la salud y el wellness están influyendo la demanda al empujar el interés por opciones con menos azúcar y productos multifuncionales. La categoría ya no puede depender únicamente del lenguaje del exceso.',
      },
      {
        heading: 'Qué sigue mal planteado',
        body:
          'Durante mucho tiempo, la categoría confundió intensidad con valor. Diseñó productos y comunicación alrededor del golpe inmediato, no de la calidad de la experiencia. Pero un consumidor más consciente, más expuesto a la conversación wellness y más atento al azúcar, ya no compra del mismo modo. Hoy una bebida no compite solo por impactar; compite por encajar.',
      },
      {
        heading: 'El papel de una marca funcional',
        body:
          'La oportunidad rara y valiosa no está en entrar como una versión \'menos mala\' del energético de siempre, sino como un corrector de categoría. Eso significa cambiar la pregunta central. No \'¿qué tan fuerte se siente?\', sino \'¿qué tan útil resulta?\'.',
      },
    ],
    evidenceRows: [
      {
        dato: 'Mercado global de energéticas',
        evidencia: 'USD 79.39B en 2024. Proyección USD 125.11B para 2030.',
        fuente: 'Grand View Research. Energy Drinks Market, 2025-2030.',
        href: 'https://www.grandviewresearch.com/industry-analysis/energy-drinks-market',
      },
      {
        dato: 'Mercado global de bebidas funcionales',
        evidencia: 'USD 164.68B en 2025. Proyección USD 315.89B para 2033.',
        fuente: 'Grand View Research. Functional Beverages Market.',
        href: 'https://www.grandviewresearch.com/industry-analysis/functional-beverages-market',
      },
    ],
    faq: [
      {
        q: '¿Cuánto vale el mercado global de energéticas?',
        a: 'Grand View Research lo estimó en USD 79.39 mil millones en 2024.',
      },
      {
        q: '¿Qué está cambiando en la categoría?',
        a: 'Mayor presión hacia menos azúcar, más funcionalidad y una experiencia más alineada con wellness.',
      },
      {
        q: '¿Qué significa corregir la categoría?',
        a: 'Dejar de diseñar productos solo para impacto inicial y empezar a diseñarlos para utilidad real.',
      },
    ],
    references: [
      {
        text: 'Grand View Research. Energy Drinks Market Size, Share & Trends Analysis Report, 2025-2030.',
        href: 'https://www.grandviewresearch.com/industry-analysis/energy-drinks-market',
      },
      {
        text: 'Grand View Research. Functional Beverages Market Size & Trends Analysis Report.',
        href: 'https://www.grandviewresearch.com/industry-analysis/functional-beverages-market',
      },
      {
        text: 'Euromonitor International. Energy Drinks. Soft Drinks industry report.',
      },
    ],
  },
} satisfies Record<ArticleSlug, Article>

export const ARTICLE_LIST: ArticleWithSlug[] = ARTICLE_SLUGS.map((slug) => ({
  slug,
  ...ARTICLES[slug],
}))

export function isArticleSlug(slug: string): slug is ArticleSlug {
  return ARTICLE_SLUGS.includes(slug as ArticleSlug)
}

export function getArticleBySlug(slug: string): ArticleWithSlug | null {
  return isArticleSlug(slug)
    ? {
        slug,
        ...ARTICLES[slug],
      }
    : null
}
