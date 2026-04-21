import { cookies } from 'next/headers'
import ComingSoon from '@/components/ComingSoon'

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const isPreviewMode = cookieStore.get('juun_preview')?.value === 'granted'

  return (
    <>
      {children}
      {!isPreviewMode ? <ComingSoon /> : null}
    </>
  )
}
