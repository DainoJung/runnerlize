'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomTabNav() {
  const pathname = usePathname()

  const tabs = [
    { href: '/', icon: 'ri-home-5-line', activeIcon: 'ri-home-5-fill', label: '홈' },
    { href: '/ai', icon: 'ri-robot-line', activeIcon: 'ri-robot-fill', label: 'AI 예측' },
    { href: '/strategy', icon: 'ri-bar-chart-line', activeIcon: 'ri-bar-chart-fill', label: '전략' },
    { href: '/tutorial', icon: 'ri-book-open-line', activeIcon: 'ri-book-open-fill', label: '튜토리얼' },
    { href: '/mypage', icon: 'ri-user-line', activeIcon: 'ri-user-fill', label: '내 정보' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center px-3 py-1 ${
                  isActive ? 'text-primary' : 'text-gray-500'
                }`}
                aria-label={tab.label}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={isActive ? tab.activeIcon : tab.icon}></i>
                </div>
                <span className="text-xs mt-1">{tab.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 