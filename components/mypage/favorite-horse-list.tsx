'use client';

import ProgressBar from '@/components/ui/progress-bar';
import TagBadge from '@/components/ui/tag-badge';

interface FavoriteHorse {
  id: string;
  name: string;
  jockey: string;
  winRate: number;
  recentRank: number;
  image: string;
}

interface FavoriteHorseListProps {
  horses: FavoriteHorse[];
}

export default function FavoriteHorseList({ horses }: FavoriteHorseListProps) {
  const getRankBadgeVariant = (rank: number) => {
    if (rank === 1) return 'success';
    if (rank <= 3) return 'warning';
    return 'default';
  };

  return (
    <div className="space-y-4">
      {horses.length === 0 ? (
        <div className="bg-white rounded-card p-8 shadow-sm text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <i className="ri-heart-line text-gray-400 text-2xl"></i>
          </div>
          <h3 className="text-heading-m font-semibold text-gray-900 mb-2">
            즐겨찾기한 말이 없습니다
          </h3>
          <p className="text-gray-600 mb-4">
            관심 있는 말을 즐겨찾기에 추가해보세요
          </p>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
            말 찾아보기
          </button>
        </div>
      ) : (
        horses.map((horse) => (
          <div key={horse.id} className="bg-white rounded-card p-4 shadow-sm">
            <div className="flex items-center gap-4">
              {/* 말 이미지 */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://readdy.ai/api/search-image?query=close%20up%20portrait%20of%20a%20beautiful%20race%20horse%2C%20thoroughbred%2C%20detailed%20face%2C%20professional%20photography%2C%20studio%20lighting%2C%20high%20quality&width=200&height=200&seq=horse3&orientation=squarish"
                    alt={horse.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-md">
                  {horse.recentRank}
                </div>
              </div>

              {/* 말 정보 */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-heading-m font-semibold">{horse.name}</h3>
                  <button className="text-danger hover:text-danger/80">
                    <i className="ri-heart-fill"></i>
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">기수: {horse.jockey}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TagBadge 
                      variant={getRankBadgeVariant(horse.recentRank)}
                      size="sm"
                    >
                      최근 {horse.recentRank}위
                    </TagBadge>
                  </div>
                  <div className="text-right">
                    <p className="text-caption text-gray-500">승률</p>
                    <p className="text-sm font-bold text-primary">{horse.winRate}%</p>
                  </div>
                </div>

                <div className="mt-2">
                  <ProgressBar 
                    value={horse.winRate} 
                    max={100}
                    color="primary"
                    className="h-1"
                  />
                </div>
              </div>
            </div>

            {/* 액션 버튼들 */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 px-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                상세 분석
              </button>
              <button className="flex-1 py-2 px-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                예측 보기
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
} 