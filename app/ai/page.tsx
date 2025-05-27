'use client';

import { useState } from 'react';
import PredictionRaceList from '@/components/ai/prediction-race-list';
import RaceFilterHeader from '@/components/ai/race-filter-header';
import PredictionBarChart from '@/components/ai/prediction-bar-chart';

export default function AIPage() {
  const [selectedRace, setSelectedRace] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    region: 'all',
    grade: 'all',
    distance: 'all',
    confidence: 'all'
  });

  // 모의 데이터
  const races = [
    {
      id: '1',
      name: '1경주',
      time: '10:30',
      location: '서울',
      grade: 'G3',
      distance: '1200m',
      horses: ['천하무적', '바람의질주', '황금마차'],
      confidence: 'high'
    },
    {
      id: '2', 
      name: '2경주',
      time: '11:00',
      location: '서울',
      grade: 'G2',
      distance: '1400m',
      horses: ['번개같이', '승리의여신', '파워풀킹'],
      confidence: 'medium'
    },
    {
      id: '3',
      name: '3경주', 
      time: '11:30',
      location: '부산',
      grade: 'G1',
      distance: '1600m',
      horses: ['최강전사', '드림런너', '골든스타'],
      confidence: 'high'
    }
  ];

  const predictionData = [
    { name: '천하무적', probability: 85, confidence: 'high', jockey: '김철수', odds: '1.8' },
    { name: '바람의질주', probability: 72, confidence: 'medium', jockey: '이영희', odds: '2.3' },
    { name: '황금마차', probability: 68, confidence: 'medium', jockey: '박민수', odds: '2.8' },
    { name: '스피드킹', probability: 45, confidence: 'low', jockey: '정수진', odds: '4.2' },
    { name: '럭키스타', probability: 38, confidence: 'low', jockey: '최동욱', odds: '5.1' }
  ];

  return (
    <div className="min-h-screen bg-bg-default pb-20">
      <div className="px-4 pt-6">
        <h1 className="text-heading-xl font-bold text-gray-900 mb-6">
          AI 예측
        </h1>

        <RaceFilterHeader 
          filters={filters}
          onFiltersChange={setFilters}
        />

        {!selectedRace ? (
          <div className="space-y-4">
            <h2 className="text-heading-l font-bold text-gray-900 mb-4">
              오늘의 경주 목록
            </h2>
            <PredictionRaceList 
              races={races}
              onRaceSelect={setSelectedRace}
            />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-heading-l font-bold text-gray-900">
                1경주 예측 결과
              </h2>
              <button
                onClick={() => setSelectedRace(null)}
                className="text-primary font-medium"
              >
                목록으로
              </button>
            </div>
            
            <div className="bg-white rounded-card p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-heading-m font-semibold">서울 1경주</h3>
                  <p className="text-caption text-gray-500">10:30 • G3 • 1200m</p>
                </div>
                <div className="text-right">
                  <p className="text-caption text-gray-500">예측 신뢰도</p>
                  <span className="inline-block px-2 py-1 bg-success/10 text-success text-caption font-medium rounded">
                    높음
                  </span>
                </div>
              </div>
              
              <PredictionBarChart data={predictionData} />
            </div>

            <div className="bg-white rounded-card p-4 shadow-sm">
              <h3 className="text-heading-m font-semibold mb-3">추천 베팅</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">단승</p>
                    <p className="text-caption text-gray-500">천하무적</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">1.8배</p>
                    <p className="text-caption text-gray-500">85% 확률</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">복승</p>
                    <p className="text-caption text-gray-500">천하무적 + 바람의질주</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-secondary">3.2배</p>
                    <p className="text-caption text-gray-500">72% 확률</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 