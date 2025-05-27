'use client';

import ProgressBar from '@/components/ui/progress-bar';
import TagBadge from '@/components/ui/tag-badge';

interface Strategy {
  id: string;
  name: string;
  icon: string;
  roi: number;
  risk: number;
  color: string;
  description: string;
}

interface StrategyDetailBlockProps {
  strategy: Strategy;
}

export default function StrategyDetailBlock({ strategy }: StrategyDetailBlockProps) {
  const getRiskLevel = (risk: number) => {
    if (risk > 60) return { text: '높음', color: 'danger' };
    if (risk > 40) return { text: '보통', color: 'warning' };
    return { text: '낮음', color: 'success' };
  };

  const getRecommendedBetting = (strategyId: string) => {
    switch (strategyId) {
      case 'stable':
        return ['단승', '복승'];
      case 'balanced':
        return ['복승', '연승'];
      case 'aggressive':
        return ['연승', '삼복승'];
      default:
        return ['단승'];
    }
  };

  const riskLevel = getRiskLevel(strategy.risk);
  const recommendedBets = getRecommendedBetting(strategy.id);

  return (
    <div className="bg-white rounded-card p-6 shadow-sm mb-6">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-16 h-16 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${strategy.color}20`, color: strategy.color }}
        >
          <i className={`${strategy.icon} text-2xl`}></i>
        </div>
        <div>
          <h2 className="text-heading-l font-bold text-gray-900">{strategy.name} 전략</h2>
          <p className="text-gray-600 mt-1">{strategy.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 수익률 섹션 */}
        <div>
          <h3 className="text-heading-m font-semibold mb-4">예상 수익률</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">월 평균 수익률</span>
              <span className="text-heading-l font-bold" style={{ color: strategy.color }}>
                {strategy.roi}%
              </span>
            </div>
            <ProgressBar 
              value={strategy.roi} 
              max={30}
              color="primary"
              className="h-3 mb-2"
            />
            <p className="text-caption text-gray-500">
              지난 6개월 평균 기준
            </p>
          </div>
        </div>

        {/* 위험도 섹션 */}
        <div>
          <h3 className="text-heading-m font-semibold mb-4">위험도 분석</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">위험 수준</span>
              <TagBadge variant={riskLevel.color as any}>
                {riskLevel.text}
              </TagBadge>
            </div>
            <ProgressBar 
              value={strategy.risk} 
              max={100}
              color={riskLevel.color as any}
              className="h-3 mb-2"
            />
            <p className="text-caption text-gray-500">
              손실 가능성: {strategy.risk}%
            </p>
          </div>
        </div>
      </div>

      {/* 추천 베팅 방식 */}
      <div className="mt-6">
        <h3 className="text-heading-m font-semibold mb-4">추천 베팅 방식</h3>
        <div className="flex flex-wrap gap-3">
          {recommendedBets.map((bet, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
              <i className="ri-check-line text-success"></i>
              <span className="font-medium">{bet}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 전략 특징 */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-primary mb-2">💡 이 전략의 특징</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          {strategy.id === 'stable' && (
            <>
              <li>• 높은 승률의 말에만 베팅</li>
              <li>• 단승, 복승 위주의 안전한 베팅</li>
              <li>• 꾸준한 소액 수익 추구</li>
            </>
          )}
          {strategy.id === 'balanced' && (
            <>
              <li>• 중간 승률의 말들을 조합</li>
              <li>• 복승, 연승으로 적당한 배당 추구</li>
              <li>• 위험과 수익의 균형</li>
            </>
          )}
          {strategy.id === 'aggressive' && (
            <>
              <li>• 높은 배당의 말들을 조합</li>
              <li>• 연승, 삼복승으로 큰 수익 추구</li>
              <li>• 높은 위험, 높은 수익</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
} 