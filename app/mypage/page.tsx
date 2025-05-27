'use client';

import { useState } from 'react';
import FavoriteHorseList from '@/components/mypage/favorite-horse-list';
import RecentActivityList from '@/components/mypage/recent-activity-list';
import UserSettingPanel from '@/components/mypage/user-setting-panel';

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('favorites');

  // 모의 데이터
  const favoriteHorses = [
    {
      id: '1',
      name: '천하무적',
      jockey: '김철수',
      winRate: 76,
      recentRank: 1,
      image: '/api/placeholder/60/60'
    },
    {
      id: '2',
      name: '바람의질주',
      jockey: '이영희',
      winRate: 68,
      recentRank: 2,
      image: '/api/placeholder/60/60'
    },
    {
      id: '3',
      name: '골든스타',
      jockey: '박민수',
      winRate: 72,
      recentRank: 1,
      image: '/api/placeholder/60/60'
    }
  ];

  const recentActivities = [
    {
      id: '1',
      type: 'prediction',
      title: '서울 1경주 예측 확인',
      description: '천하무적 85% 승률 예측',
      timestamp: '2시간 전',
      icon: 'ri-robot-line'
    },
    {
      id: '2',
      type: 'detail',
      title: '바람의질주 상세 분석',
      description: '거리 적성 및 기수 효과 분석',
      timestamp: '5시간 전',
      icon: 'ri-search-eye-line'
    },
    {
      id: '3',
      type: 'strategy',
      title: '균형형 전략 시뮬레이션',
      description: '18.3% 수익률 전략 확인',
      timestamp: '1일 전',
      icon: 'ri-bar-chart-line'
    }
  ];

  const userSettings = {
    notifications: {
      raceStart: true,
      predictionUpdate: true,
      strategyAlert: false
    },
    preferences: {
      theme: 'light',
      language: 'ko',
      defaultRegion: 'seoul'
    }
  };

  return (
    <div className="min-h-screen bg-bg-default pb-20">
      <div className="px-4 pt-6">
        {/* 프로필 헤더 */}
        <div className="bg-white rounded-card p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <i className="ri-user-line text-primary text-2xl"></i>
            </div>
            <div className="flex-1">
              <h1 className="text-heading-l font-bold text-gray-900">다이노님</h1>
              <p className="text-gray-600">경마 예측 서비스 이용 중</p>
              <div className="flex items-center gap-4 mt-2 text-caption text-gray-500">
                <span>가입일: 2024.01.15</span>
                <span>예측 조회: 127회</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <i className="ri-edit-line text-xl"></i>
            </button>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex bg-white rounded-card p-1 mb-6 shadow-sm">
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'favorites'
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            즐겨찾기
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'activity'
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            최근 활동
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'settings'
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            설정
          </button>
        </div>

        {/* 탭 콘텐츠 */}
        {activeTab === 'favorites' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-heading-l font-bold text-gray-900">
                즐겨찾기한 말
              </h2>
              <span className="text-caption text-gray-500">
                {favoriteHorses.length}마리
              </span>
            </div>
            <FavoriteHorseList horses={favoriteHorses} />
          </div>
        )}

        {activeTab === 'activity' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-heading-l font-bold text-gray-900">
                최근 활동
              </h2>
              <button className="text-sm text-primary font-medium">
                전체 보기
              </button>
            </div>
            <RecentActivityList activities={recentActivities} />
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-heading-l font-bold text-gray-900 mb-4">
              설정
            </h2>
            <UserSettingPanel settings={userSettings} />
          </div>
        )}
      </div>
    </div>
  );
} 