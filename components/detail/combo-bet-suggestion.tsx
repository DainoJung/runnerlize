'use client';

import CTAButton from '@/components/ui/cta-button';
import TagBadge from '@/components/ui/tag-badge';

interface ComboBet {
  type: string;
  combination: string[];
  odds: number;
  probability: number;
}

interface ComboBetSuggestionProps {
  bet: ComboBet;
}

export default function ComboBetSuggestion({ bet }: ComboBetSuggestionProps) {
  const getBetTypeColor = (type: string) => {
    switch (type) {
      case '복승': return 'secondary';
      case '연승': return 'warning';
      case '삼복승': return 'primary';
      default: return 'default';
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 70) return 'text-success';
    if (probability >= 50) return 'text-warning';
    return 'text-danger';
  };

  return (
    <div className="bg-white rounded-card p-4 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <TagBadge variant={getBetTypeColor(bet.type)} size="md">
            {bet.type}
          </TagBadge>
          <div>
            <h3 className="text-heading-m font-semibold">추천 조합</h3>
            <p className="text-caption text-gray-500">AI 분석 기반</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-heading-l font-bold text-primary">{bet.odds}배</p>
          <p className={`text-caption font-medium ${getProbabilityColor(bet.probability)}`}>
            {bet.probability}% 확률
          </p>
        </div>
      </div>

      {/* 조합 말들 */}
      <div className="mb-4">
        <p className="text-caption text-gray-500 mb-2">조합</p>
        <div className="flex flex-wrap gap-2">
          {bet.combination.map((horse, index) => (
            <div key={index} className="flex items-center">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium">
                {horse}
              </span>
              {index < bet.combination.length - 1 && (
                <span className="mx-2 text-gray-400">+</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 예상 수익 */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">1만원 베팅 시 예상 수익</span>
          <span className="text-heading-m font-bold text-primary">
            {(bet.odds * 10000).toLocaleString()}원
          </span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-caption text-gray-500">순수익</span>
          <span className="text-sm font-medium text-success">
            +{((bet.odds - 1) * 10000).toLocaleString()}원
          </span>
        </div>
      </div>

      <CTAButton variant="primary" className="w-full">
        이 조합으로 베팅하기
      </CTAButton>
    </div>
  );
} 