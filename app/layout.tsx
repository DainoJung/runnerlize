import type { Metadata } from 'next'
import './globals.css'
import HeaderBar from '@/components/common/header-bar'
import BottomTabNav from '@/components/common/bottom-tab-nav'

export const metadata: Metadata = {
  title: '알마경 - 경마 예측 서비스',
  description: '2030 세대를 위한 AI 기반 경마 예측 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen pb-20">
        <HeaderBar />
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
        <BottomTabNav />
      </body>
    </html>
  )
} 