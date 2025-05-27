'use client';

interface Filters {
  region: string;
  grade: string;
  distance: string;
  confidence: string;
}

interface RaceFilterHeaderProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export default function RaceFilterHeader({ filters, onFiltersChange }: RaceFilterHeaderProps) {
  const handleFilterChange = (key: keyof Filters, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <div className="bg-white rounded-card p-4 shadow-sm mb-6">
      <h3 className="text-heading-m font-semibold mb-4">필터</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-caption text-gray-500 mb-1">지역</label>
          <select 
            value={filters.region}
            onChange={(e) => handleFilterChange('region', e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-lg text-sm"
          >
            <option value="all">전체</option>
            <option value="seoul">서울</option>
            <option value="busan">부산</option>
            <option value="jeju">제주</option>
          </select>
        </div>

        <div>
          <label className="block text-caption text-gray-500 mb-1">등급</label>
          <select 
            value={filters.grade}
            onChange={(e) => handleFilterChange('grade', e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-lg text-sm"
          >
            <option value="all">전체</option>
            <option value="G1">G1</option>
            <option value="G2">G2</option>
            <option value="G3">G3</option>
          </select>
        </div>

        <div>
          <label className="block text-caption text-gray-500 mb-1">거리</label>
          <select 
            value={filters.distance}
            onChange={(e) => handleFilterChange('distance', e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-lg text-sm"
          >
            <option value="all">전체</option>
            <option value="1200">1200m</option>
            <option value="1400">1400m</option>
            <option value="1600">1600m</option>
            <option value="1800">1800m</option>
          </select>
        </div>

        <div>
          <label className="block text-caption text-gray-500 mb-1">신뢰도</label>
          <select 
            value={filters.confidence}
            onChange={(e) => handleFilterChange('confidence', e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-lg text-sm"
          >
            <option value="all">전체</option>
            <option value="high">높음</option>
            <option value="medium">보통</option>
            <option value="low">낮음</option>
          </select>
        </div>
      </div>
    </div>
  );
} 