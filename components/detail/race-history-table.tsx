'use client';

import TagBadge from '@/components/ui/tag-badge';

interface RaceHistory {
  date: string;
  race: string;
  rank: number;
  distance: string;
  weather: string;
  jockey: string;
}

interface RaceHistoryTableProps {
  history: RaceHistory[];
}

export default function RaceHistoryTable({ history }: RaceHistoryTableProps) {
  const getRankBadgeVariant = (rank: number) => {
    if (rank === 1) return 'success';
    if (rank <= 3) return 'warning';
    return 'default';
  };

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case '맑음': return 'ri-sun-line';
      case '흐림': return 'ri-cloud-line';
      case '비': return 'ri-rainy-line';
      case '눈': return 'ri-snowy-line';
      default: return 'ri-sun-line';
    }
  };

  return (
    <div className="bg-white rounded-card shadow-sm overflow-hidden">
      {/* 테이블 헤더 */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
        <div className="grid grid-cols-6 gap-2 text-caption text-gray-600 font-medium">
          <span>날짜</span>
          <span>경주</span>
          <span>순위</span>
          <span>거리</span>
          <span>날씨</span>
          <span>기수</span>
        </div>
      </div>

      {/* 테이블 바디 */}
      <div className="divide-y divide-gray-100">
        {history.map((record, index) => (
          <div key={index} className="px-4 py-3 hover:bg-gray-50 transition-colors">
            <div className="grid grid-cols-6 gap-2 items-center">
              {/* 날짜 */}
              <div className="text-caption text-gray-600">
                {record.date}
              </div>

              {/* 경주 */}
              <div className="text-sm font-medium text-gray-900">
                {record.race}
              </div>

              {/* 순위 */}
              <div>
                <TagBadge 
                  variant={getRankBadgeVariant(record.rank)}
                  size="sm"
                >
                  {record.rank}위
                </TagBadge>
              </div>

              {/* 거리 */}
              <div className="text-caption text-gray-600">
                {record.distance}
              </div>

              {/* 날씨 */}
              <div className="flex items-center gap-1">
                <i className={`${getWeatherIcon(record.weather)} text-gray-500`}></i>
                <span className="text-caption text-gray-600">{record.weather}</span>
              </div>

              {/* 기수 */}
              <div className="text-caption text-gray-600">
                {record.jockey}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 더보기 버튼 */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <button className="w-full text-center text-sm text-primary font-medium hover:text-primary/80 transition-colors">
          더 많은 경기 기록 보기
        </button>
      </div>
    </div>
  );
} 