'use client';

import { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import StrategySummaryCard from '@/components/strategy/strategy-summary-card';
import StrategyDetailBlock from '@/components/strategy/strategy-detail-block';
import RecommendedRaceCard from '@/components/strategy/recommended-race-card';

export default function StrategyPage() {
  const [activeStrategy, setActiveStrategy] = useState('stable');
  const chartRef = useRef<HTMLDivElement>(null);

  // 모의 데이터
  const strategies = [
    {
      id: 'stable',
      name: '안정형',
      icon: 'ri-shield-check-line',
      roi: 12.5,
      risk: 25,
      color: '#57B5E7',
      description: '낮은 위험도로 꾸준한 수익을 추구하는 전략'
    },
    {
      id: 'balanced',
      name: '균형형',
      icon: 'ri-scales-line',
      roi: 18.3,
      risk: 45,
      color: '#8DD3C7',
      description: '적당한 위험도로 균형잡힌 수익을 추구하는 전략'
    },
    {
      id: 'aggressive',
      name: '공격형',
      icon: 'ri-rocket-line',
      roi: 28.7,
      risk: 75,
      color: '#FBBF72',
      description: '높은 위험도로 큰 수익을 추구하는 전략'
    }
  ];

  const recommendedRaces = {
    stable: [
      {
        id: '1',
        time: '13:00',
        location: '서울',
        race: '1경주',
        grade: 'G3',
        distance: '1200m',
        confidence: 'high',
        recommendedBet: '단승',
        odds: 1.8,
        horse: '천하무적'
      }
    ],
    balanced: [
      {
        id: '2',
        time: '14:00',
        location: '서울',
        race: '2경주',
        grade: 'G2',
        distance: '1400m',
        confidence: 'medium',
        recommendedBet: '복승',
        odds: 3.2,
        horse: '바람의질주'
      }
    ],
    aggressive: [
      {
        id: '3',
        time: '15:00',
        location: '부산',
        race: '3경주',
        grade: 'G1',
        distance: '1600m',
        confidence: 'medium',
        recommendedBet: '연승',
        odds: 8.5,
        horse: '골든스타'
      }
    ]
  };

  // 차트 초기화
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: '#e2e8f0',
          textStyle: {
            color: '#1f2937'
          }
        },
        legend: {
          data: ['안정형', '균형형', '공격형'],
          bottom: 0
        },
        grid: {
          top: 10,
          right: 10,
          bottom: 30,
          left: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['1월', '2월', '3월', '4월', '5월'],
          axisLine: {
            lineStyle: {
              color: '#e2e8f0'
            }
          },
          axisLabel: {
            color: '#1f2937'
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}%',
            color: '#1f2937'
          },
          splitLine: {
            lineStyle: {
              color: '#e2e8f0'
            }
          }
        },
        series: [
          {
            name: '안정형',
            type: 'line',
            data: [8, 10, 12, 11, 12.5],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#57B5E7'
            },
            lineStyle: {
              width: 3,
              color: '#57B5E7'
            }
          },
          {
            name: '균형형',
            type: 'line',
            data: [12, 15, 18, 16, 18.3],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#8DD3C7'
            },
            lineStyle: {
              width: 3,
              color: '#8DD3C7'
            }
          },
          {
            name: '공격형',
            type: 'line',
            data: [20, 25, 28, 22, 28.7],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#FBBF72'
            },
            lineStyle: {
              width: 3,
              color: '#FBBF72'
            }
          }
        ]
      };

      chart.setOption(option);

      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.dispose();
      };
    }
  }, []);

  const currentStrategy = strategies.find(s => s.id === activeStrategy);

  return (
    <div className="min-h-screen bg-bg-default pb-20">
      <div className="px-4 pt-6">
        <h1 className="text-heading-xl font-bold text-gray-900 mb-6">
          전략 시뮬레이션
        </h1>

        {/* 전략 요약 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {strategies.map((strategy) => (
            <StrategySummaryCard
              key={strategy.id}
              strategy={strategy}
              isActive={activeStrategy === strategy.id}
              onClick={() => setActiveStrategy(strategy.id)}
            />
          ))}
        </div>

        {/* 선택된 전략 상세 정보 */}
        {currentStrategy && (
          <StrategyDetailBlock strategy={currentStrategy} />
        )}

        {/* 전략별 추천 경주 */}
        <section className="mb-6">
          <h2 className="text-heading-l font-bold text-gray-900 mb-4">
            {currentStrategy?.name} 전략 추천 경주
          </h2>
          <div className="space-y-4">
            {recommendedRaces[activeStrategy as keyof typeof recommendedRaces]?.map((race) => (
              <RecommendedRaceCard key={race.id} race={race} />
            ))}
          </div>
        </section>

        {/* 전략 수익률 그래프 */}
        <section>
          <h2 className="text-heading-l font-bold text-gray-900 mb-4">
            전략별 수익률 추이
          </h2>
          <div className="bg-white rounded-card p-4 shadow-sm" style={{ height: '300px' }}>
            <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
          </div>
        </section>
      </div>
    </div>
  );
} 