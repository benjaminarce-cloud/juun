// PIE: IndexNow notifies Bing/Yandex of updated URLs.
// WHY: Push-based notification shortens discovery lag after content changes.
// OPTIMIZES: Retrieval freshness and citation recency for AI answer engines.

const INDEXNOW_KEY = 'JUUN-indexnow-w9k4mx-2026'
const INDEXNOW_KEY_FILE = 'juunwellness-indexnow.txt'
const DOMAIN = 'juunwellness.com'

export async function notifyIndexNow(urls: string[]): Promise<void> {
  const payload = {
    host: DOMAIN,
    key: INDEXNOW_KEY,
    keyLocation: `https://${DOMAIN}/${INDEXNOW_KEY_FILE}`,
    urlList: urls,
  }

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error(`[PIE] IndexNow failed: ${res.status}`)
    }
  } catch (err) {
    console.error('[PIE] IndexNow error:', err)
  }
}

// PIE: Core URL set for first deployment ping.
// WHY: Establishes canonical crawl targets for the core content set.
// OPTIMIZES: Faster index propagation after first release.
export const CORE_URLS = [
  `https://${DOMAIN}/`,
  `https://${DOMAIN}/nosotros`,
  `https://${DOMAIN}/producto`,
  `https://${DOMAIN}/comprar`,
]
