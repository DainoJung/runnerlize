'use client';

import ProgressBar from '@/components/ui/progress-bar';
import TagBadge from '@/components/ui/tag-badge';

interface HorseData {
  name: string;
  jockey: string;
  trainer: string;
  age: number;
  weight: number;
  prediction: number;
  recentRaces: number[];
  image: string;
}

interface HorseProfileCardProps {
  horse: HorseData;
}

export default function HorseProfileCard({ horse }: HorseProfileCardProps) {
  const getRankBadgeVariant = (rank: number) => {
    if (rank === 1) return 'success';
    if (rank <= 3) return 'warning';
    return 'default';
  };

  const averageRank = horse.recentRaces.reduce((sum, rank) => sum + rank, 0) / horse.recentRaces.length;

  return (
    <div className="bg-white rounded-card p-6 shadow-sm mb-6">
      <div className="flex items-start gap-4">
        {/* 말 이미지 */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
            <img 
              src="https://readdy.ai/api/search-image?query=close%20up%20portrait%20of%20a%20beautiful%20race%20horse%2C%20thoroughbred%2C%20detailed%20face%2C%20professional%20photography%2C%20studio%20lighting%2C%20high%20quality&width=200&height=200&seq=horse2&orientation=squarish"
              alt={horse.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-md">
            {Math.round(averageRank)}
          </div>
        </div>

        {/* 말 정보 */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-heading-l font-bold text-gray-900">{horse.name}</h2>
            <div className="text-right">
              <p className="text-caption text-gray-500">AI 예측 승률</p>
              <p className="text-heading-m font-bold text-primary">{horse.prediction}%</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-caption text-gray-500">기수</p>
              <p className="font-medium">{horse.jockey}</p>
            </div>
            <div>
              <p className="text-caption text-gray-500">조교사</p>
              <p className="font-medium">{horse.trainer}</p>
            </div>
            <div>
              <p className="text-caption text-gray-500">나이</p>
              <p className="font-medium">{horse.age}세</p>
            </div>
            <div>
              <p className="text-caption text-gray-500">부담중량</p>
              <p className="font-medium">{horse.weight}kg</p>
            </div>
          </div>

          {/* 최근 성적 */}
          <div>
            <p className="text-caption text-gray-500 mb-2">최근 5경기 성적</p>
            <div className="flex gap-2">
              {horse.recentRaces.map((rank, index) => (
                <TagBadge 
                  key={index}
                  variant={getRankBadgeVariant(rank)}
                  size="sm"
                >
                  {rank}위
                </TagBadge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 예측 승률 바 */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">예측 승률</span>
          <span className="text-sm text-gray-500">{horse.prediction}%</span>
        </div>
        <ProgressBar 
          value={horse.prediction} 
          max={100}
          color="primary"
          className="h-2"
        />
      </div>
    </div>
  );
} 