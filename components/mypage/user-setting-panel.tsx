'use client';

import { useState } from 'react';

interface UserSettings {
  notifications: {
    raceStart: boolean;
    predictionUpdate: boolean;
    strategyAlert: boolean;
  };
  preferences: {
    theme: string;
    language: string;
    defaultRegion: string;
  };
}

interface UserSettingPanelProps {
  settings: UserSettings;
}

export default function UserSettingPanel({ settings: initialSettings }: UserSettingPanelProps) {
  const [settings, setSettings] = useState(initialSettings);

  const handleNotificationChange = (key: keyof typeof settings.notifications) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handlePreferenceChange = (key: keyof typeof settings.preferences, value: string) => {
    setSettings(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      {/* 알림 설정 */}
      <div className="bg-white rounded-card p-6 shadow-sm">
        <h3 className="text-heading-m font-semibold mb-4 flex items-center gap-2">
          <i className="ri-notification-3-line text-primary"></i>
          알림 설정
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">경주 시작 알림</p>
              <p className="text-caption text-gray-500">관심 경주 시작 10분 전 알림</p>
            </div>
            <label className="custom-switch">
              <input 
                type="checkbox" 
                checked={settings.notifications.raceStart}
                onChange={() => handleNotificationChange('raceStart')}
              />
              <span className="switch-slider"></span>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">예측 업데이트 알림</p>
              <p className="text-caption text-gray-500">AI 예측 결과 업데이트 시 알림</p>
            </div>
            <label className="custom-switch">
              <input 
                type="checkbox" 
                checked={settings.notifications.predictionUpdate}
                onChange={() => handleNotificationChange('predictionUpdate')}
              />
              <span className="switch-slider"></span>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">전략 추천 알림</p>
              <p className="text-caption text-gray-500">새로운 전략 추천 시 알림</p>
            </div>
            <label className="custom-switch">
              <input 
                type="checkbox" 
                checked={settings.notifications.strategyAlert}
                onChange={() => handleNotificationChange('strategyAlert')}
              />
              <span className="switch-slider"></span>
            </label>
          </div>
        </div>
      </div>

      {/* 환경 설정 */}
      <div className="bg-white rounded-card p-6 shadow-sm">
        <h3 className="text-heading-m font-semibold mb-4 flex items-center gap-2">
          <i className="ri-settings-3-line text-primary"></i>
          환경 설정
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              테마
            </label>
            <select 
              value={settings.preferences.theme}
              onChange={(e) => handlePreferenceChange('theme', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg text-sm"
            >
              <option value="light">라이트 모드</option>
              <option value="dark">다크 모드</option>
              <option value="auto">시스템 설정</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              언어
            </label>
            <select 
              value={settings.preferences.language}
              onChange={(e) => handlePreferenceChange('language', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg text-sm"
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              기본 경마장
            </label>
            <select 
              value={settings.preferences.defaultRegion}
              onChange={(e) => handlePreferenceChange('defaultRegion', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg text-sm"
            >
              <option value="all">전체</option>
              <option value="seoul">서울</option>
              <option value="busan">부산</option>
              <option value="jeju">제주</option>
            </select>
          </div>
        </div>
      </div>

      {/* 계정 관리 */}
      <div className="bg-white rounded-card p-6 shadow-sm">
        <h3 className="text-heading-m font-semibold mb-4 flex items-center gap-2">
          <i className="ri-user-settings-line text-primary"></i>
          계정 관리
        </h3>
        
        <div className="space-y-3">
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-medium">개인정보 수정</span>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </div>
          </button>

          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-medium">비밀번호 변경</span>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </div>
          </button>

          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-medium">데이터 내보내기</span>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </div>
          </button>

          <button className="w-full text-left p-3 rounded-lg hover:bg-red-50 transition-colors text-danger">
            <div className="flex items-center justify-between">
              <span className="font-medium">계정 삭제</span>
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </button>
        </div>
      </div>

      {/* 저장 버튼 */}
      <div className="flex gap-3">
        <button className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
          취소
        </button>
        <button className="flex-1 py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
          저장하기
        </button>
      </div>
    </div>
  );
} 