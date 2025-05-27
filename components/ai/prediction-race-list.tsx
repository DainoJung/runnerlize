'use client';

import CTAButton from '@/components/ui/cta-button';
import TagBadge from '@/components/ui/tag-badge';

interface Race {
  id: string;
  name: string;
  time: string;
  location: string;
  grade: string;
  distance: string;
  horses: string[];
  confidence: string;
}

interface PredictionRaceListProps {
  races: Race[];
  onRaceSelect: (raceId: string) => void;
}

export default function PredictionRaceList({ races, onRaceSelect }: PredictionRaceListProps) {
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

  return (
    <div className="space-y-4">
      {races.map((race) => (
        <div key={race.id} className="bg-white rounded-card p-4 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-heading-m font-semibold">{race.name}</h3>
              <p className="text-caption text-gray-500">
                {race.time} • {race.location} • {race.grade} • {race.distance}
              </p>
            </div>
            <TagBadge 
              variant={getConfidenceBadgeVariant(race.confidence)}
              size="sm"
            >
              {getConfidenceText(race.confidence)}
            </TagBadge>
          </div>

          <div className="mb-4">
            <p className="text-caption text-gray-500 mb-2">주요 출전마</p>
            <div className="flex flex-wrap gap-2">
              {race.horses.slice(0, 3).map((horse, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-caption rounded"
                >
                  {horse}
                </span>
              ))}
              {race.horses.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-500 text-caption rounded">
                  +{race.horses.length - 3}
                </span>
              )}
            </div>
          </div>

          <CTAButton 
            variant="primary" 
            onClick={() => onRaceSelect(race.id)}
            className="w-full"
          >
            예측 결과 보기
          </CTAButton>
        </div>
      ))}
    </div>
  );
} 