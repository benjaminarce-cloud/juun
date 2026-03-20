// PIE: One-time IndexNow bootstrap script.
// WHY: Sends initial URL batch so retrieval crawlers discover core pages quickly.
// OPTIMIZES: Early citation readiness after deploy.

import { CORE_URLS, notifyIndexNow } from '../lib/indexnow'

notifyIndexNow(CORE_URLS)
  .then(() => console.log('[PIE] IndexNow initial ping sent for:', CORE_URLS))
  .catch((err: unknown) => {
    console.error('[PIE] IndexNow initial ping failed:', err)
    process.exitCode = 1
  })
