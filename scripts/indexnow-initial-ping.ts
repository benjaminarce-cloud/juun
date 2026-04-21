// PIE: One-time IndexNow bootstrap script.
// WHY: Sends the canonical JUUN route set with the production key file.
// OPTIMIZES: Faster discovery of core pages after deploy.

const host = 'juunwellness.com'
const key = '86f2d814064a4055a4113feef7cd7963'
const keyLocation = `https://${host}/86f2d814064a4055a4113feef7cd7963.txt`

const urlList = [
  `https://${host}/`,
  `https://${host}/ciencia`,
  `https://${host}/ciencia/guarana`,
  `https://${host}/ciencia/lteanina`,
  `https://${host}/ciencia/taurina`,
  `https://${host}/ciencia/azucar`,
  `https://${host}/ciencia/nom051`,
  `https://${host}/ciencia/consumidor-mexicano`,
  `https://${host}/ciencia/adaptogenos`,
  `https://${host}/ciencia/sistema-nervioso`,
  `https://${host}/ciencia/mercado-global`,
  `https://${host}/nosotros`,
  `https://${host}/producto`,
] as const

async function pingIndexNow(): Promise<void> {
  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  }

  const response = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  const responseBody = await response.text()

  console.log('[PIE] IndexNow status:', response.status)
  console.log('[PIE] IndexNow body:', responseBody || '<empty>')

  if (!response.ok) {
    process.exitCode = 1
  }
}

pingIndexNow().catch((err: unknown) => {
  console.error('[PIE] IndexNow initial ping failed:', err)
  process.exitCode = 1
})
