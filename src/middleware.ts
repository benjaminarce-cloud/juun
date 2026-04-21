import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PREVIEW_COOKIE = 'juun_preview'
const PREVIEW_VALUE = 'granted'
const PREVIEW_TOKEN = 'juun2026'
const PREVIEW_MAX_AGE = 60 * 60 * 24 * 30

export function middleware(request: NextRequest) {
  const previewParam = request.nextUrl.searchParams.get('preview')

  if (previewParam === PREVIEW_TOKEN) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.searchParams.delete('preview')

    const response = NextResponse.redirect(redirectUrl)
    response.cookies.set({
      name: PREVIEW_COOKIE,
      value: PREVIEW_VALUE,
      maxAge: PREVIEW_MAX_AGE,
      path: '/',
    })

    return response
  }

  const previewCookie = request.cookies.get(PREVIEW_COOKIE)?.value

  if (previewCookie === PREVIEW_VALUE) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-preview-mode', 'true')

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  return NextResponse.next()
}
