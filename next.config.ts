import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // PIE: Ensure AI discovery files are served with crawler-friendly headers.
  // WHY: Correct Content-Type and cache directives reduce parser ambiguity for bots.
  // OPTIMIZES: Reliable ingestion of AI manifest + robots freshness checks.
  async headers() {
    return [
      {
        source: '/.well-known/ai-content.json',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }],
      },
    ]
  },
}

export default nextConfig
