'use client';

import { useState } from 'react';
import TutorialCategoryTab from '@/components/tutorial/tutorial-category-tab';
import TutorialCardItem from '@/components/tutorial/tutorial-card-item';

export default function TutorialPage() {
  const [activeCategory, setActiveCategory] = useState('basics');

  const categories = [
    { id: 'basics', name: '기초 지식', icon: 'ri-book-open-line' },
    { id: 'betting', name: '베팅 방식', icon: 'ri-money-dollar-circle-line' },
    { id: 'prediction', name: '예측 신뢰도', icon: 'ri-bar-chart-line' },
    { id: 'strategy', name: '전략 가이드', icon: 'ri-lightbulb-line' }
  ];

  const tutorialContent = {
    basics: [
      {
        id: '1',
        title: '경마 기초 용어',
        description: '경마에서 자주 사용되는 기본 용어들을 알아보세요',
        thumbnail: 'ri-book-2-line',
        duration: '5분',
        difficulty: '초급'
      },
      {
        id: '2',
        title: '경주 등급 시스템',
        description: 'G1, G2, G3 등급의 의미와 차이점을 설명합니다',
        thumbnail: 'ri-trophy-line',
        duration: '3분',
        difficulty: '초급'
      },
      {
        id: '3',
        title: '말의 능력과 특성',
        description: '거리 적성, 코스 적합도 등 말의 특성을 이해해보세요',
        thumbnail: 'ri-run-line',
        duration: '7분',
        difficulty: '중급'
      }
    ],
    betting: [
      {
        id: '4',
        title: '단승과 복승의 차이',
        description: '가장 기본적인 베팅 방식인 단승과 복승을 알아보세요',
        thumbnail: 'ri-number-1',
        duration: '4분',
        difficulty: '초급'
      },
      {
        id: '5',
        title: '연승과 삼복승',
        description: '높은 배당을 노릴 수 있는 연승과 삼복승 베팅법',
        thumbnail: 'ri-numbers-line',
        duration: '6분',
        difficulty: '중급'
      },
      {
        id: '6',
        title: '배당률 읽는 법',
        description: '배당률의 의미와 수익 계산 방법을 배워보세요',
        thumbnail: 'ri-calculator-line',
        duration: '5분',
        difficulty: '초급'
      }
    ],
    prediction: [
      {
        id: '7',
        title: 'AI 예측 신뢰도 등급',
        description: '높음, 보통, 낮음 등급의 의미와 활용법',
        thumbnail: 'ri-robot-line',
        duration: '4분',
        difficulty: '초급'
      },
      {
        id: '8',
        title: '예측 근거 분석',
        description: 'AI가 예측에 사용하는 요소들을 자세히 알아보세요',
        thumbnail: 'ri-search-eye-line',
        duration: '8분',
        difficulty: '중급'
      },
      {
        id: '9',
        title: '신뢰도별 베팅 전략',
        description: '신뢰도에 따른 효과적인 베팅 방법을 제안합니다',
        thumbnail: 'ri-target-line',
        duration: '6분',
        difficulty: '중급'
      }
    ],
    strategy: [
      {
        id: '10',
        title: '안정형 전략 가이드',
        description: '낮은 위험으로 꾸준한 수익을 추구하는 방법',
        thumbnail: 'ri-shield-check-line',
        duration: '7분',
        difficulty: '초급'
      },
      {
        id: '11',
        title: '균형형 전략 가이드',
        description: '위험과 수익의 균형을 맞추는 베팅 전략',
        thumbnail: 'ri-scales-line',
        duration: '8분',
        difficulty: '중급'
      },
      {
        id: '12',
        title: '공격형 전략 가이드',
        description: '높은 위험을 감수하고 큰 수익을 노리는 방법',
        thumbnail: 'ri-rocket-line',
        duration: '9분',
        difficulty: '고급'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-default pb-20">
      <div className="px-4 pt-6">
        <h1 className="text-heading-xl font-bold text-gray-900 mb-6">
          튜토리얼
        </h1>

        {/* 카테고리 탭 */}
        <TutorialCategoryTab 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* 튜토리얼 콘텐츠 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-heading-l font-bold text-gray-900">
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <span className="text-caption text-gray-500">
              {tutorialContent[activeCategory as keyof typeof tutorialContent]?.length}개 콘텐츠
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {tutorialContent[activeCategory as keyof typeof tutorialContent]?.map((item) => (
              <TutorialCardItem key={item.id} tutorial={item} />
            ))}
          </div>
        </div>

        {/* 추천 학습 경로 */}
        <section className="mt-8">
          <h2 className="text-heading-l font-bold text-gray-900 mb-4">
            추천 학습 경로
          </h2>
          <div className="bg-white rounded-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <i className="ri-roadmap-line text-primary text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-heading-m font-semibold mb-2">초보자를 위한 완벽 가이드</h3>
                <p className="text-gray-600 mb-4">
                  경마 기초부터 실전 베팅까지, 단계별로 학습할 수 있는 맞춤형 코스입니다.
                </p>
                <div className="flex items-center gap-4 text-caption text-gray-500 mb-4">
                  <span>📚 총 12개 강의</span>
                  <span>⏱️ 약 60분</span>
                  <span>🎯 초급~중급</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                    학습 시작하기
                  </button>
                  <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium">
                    미리보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 