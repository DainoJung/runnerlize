'use client';

import CTAButton from '@/components/ui/cta-button';
import TagBadge from '@/components/ui/tag-badge';

interface RecommendedRace {
  id: string;
  time: string;
  location: string;
  race: string;
  grade: string;
  distance: string;
  confidence: string;
  recommendedBet: string;
  odds: number;
  horse: string;
}

interface RecommendedRaceCardProps {
  race: RecommendedRace;
}

export default function RecommendedRaceCard({ race }: RecommendedRaceCardProps) {
  const getConfidenceBadgeVariant = (confidence: string) => {
    switch (confidence) {
      case 'high': return 'success';
      case 'medium': return 'warning';
      case 'low': return 'danger';
      default: return 'default';
    }
  };

  const getConfidenceText = (confidence: string) => {
    switch (confidence) {
      case 'high': return '높음';
      case 'medium': return '보통';
      case 'low': return '낮음';
      default: return '알 수 없음';
    }
  };

  const getBetTypeColor = (betType: string) => {
    switch (betType) {
      case '단승': return 'primary';
      case '복승': return 'secondary';
      case '연승': return 'warning';
      default: return 'default';
    }
  };

  return (
    <div className="bg-white rounded-card p-4 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        {/* 경주 정보 */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-primary">{race.time}</span>
            <span className="text-xs text-gray-600">{race.location}</span>
          </div>
          <div>
            <h3 className="text-heading-m font-semibold">{race.location} {race.race}</h3>
            <div className="flex gap-2 mt-1">
              <TagBadge size="sm">{race.grade}</TagBadge>
              <TagBadge size="sm">{race.distance}</TagBadge>
              <TagBadge 
                variant={getConfidenceBadgeVariant(race.confidence)}
                size="sm"
              >
                신뢰도 {getConfidenceText(race.confidence)}
              </TagBadge>
            </div>
          </div>
        </div>

        {/* 배당률 */}
        <div className="text-right">
          <p className="text-heading-l font-bold text-primary">{race.odds}배</p>
          <p className="text-caption text-gray-500">예상 배당</p>
        </div>
      </div>

      {/* 추천 정보 */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TagBadge variant={getBetTypeColor(race.recommendedBet)}>
              {race.recommendedBet}
            </TagBadge>
            <span className="text-sm font-medium">{race.horse}</span>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-700">
              1만원 → {(race.odds * 10000).toLocaleString()}원
            </p>
            <p className="text-caption text-success">
              +{((race.odds - 1) * 10000).toLocaleString()}원 수익
            </p>
          </div>
        </div>
      </div>

      {/* 액션 버튼들 */}
      <div className="flex gap-2">
        <CTAButton variant="ghost" className="flex-1">
          상세 분석
        </CTAButton>
        <CTAButton variant="primary" className="flex-1">
          예측 보기
        </CTAButton>
      </div>
    </div>
  );
} 