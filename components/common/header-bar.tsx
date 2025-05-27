'use client'

import Link from 'next/link'

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            Runnerlize
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">2025.05.27</span>
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            aria-label="검색"
          >
            <i className="ri-search-line text-gray-500"></i>
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            aria-label="알림"
          >
            <i className="ri-notification-3-line text-gray-500"></i>
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            aria-label="메뉴"
          >
            <i className="ri-menu-line text-gray-500"></i>
          </button>
        </div>
      </div>
    </header>
  )
} 