'use client';

import ProgressBar from '@/components/ui/progress-bar';

interface Strategy {
  id: string;
  name: string;
  icon: string;
  roi: number;
  risk: number;
  color: string;
  description: string;
}

interface StrategySummaryCardProps {
  strategy: Strategy;
  isActive: boolean;
  onClick: () => void;
}

export default function StrategySummaryCard({ strategy, isActive, onClick }: StrategySummaryCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-card p-4 shadow-sm cursor-pointer transition-all duration-200 ${
        isActive 
          ? 'ring-2 ring-primary shadow-md transform scale-105' 
          : 'hover:shadow-md hover:scale-102'
      }`}
    >
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${strategy.color}20`, color: strategy.color }}
          >
            <i className={`${strategy.icon} text-xl`}></i>
          </div>
          <div>
            <h3 className="text-heading-m font-semibold">{strategy.name}</h3>
            <p className="text-caption text-gray-500">전략</p>
          </div>
        </div>
        {isActive && (
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <i className="ri-check-line text-white text-sm"></i>
          </div>
        )}
      </div>

      {/* 수익률 */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">예상 수익률</span>
          <span className="text-heading-m font-bold" style={{ color: strategy.color }}>
            {strategy.roi}%
          </span>
        </div>
        <ProgressBar 
          value={strategy.roi} 
          max={30}
          color="primary"
          className="h-2"
        />
      </div>

      {/* 위험도 */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">위험도</span>
          <span className="text-sm font-medium text-gray-700">
            {strategy.risk}%
          </span>
        </div>
        <ProgressBar 
          value={strategy.risk} 
          max={100}
          color={strategy.risk > 60 ? 'danger' : strategy.risk > 40 ? 'warning' : 'success'}
          className="h-2"
        />
      </div>

      {/* 설명 */}
      <p className="text-caption text-gray-500 leading-relaxed">
        {strategy.description}
      </p>
    </div>
  );
} 