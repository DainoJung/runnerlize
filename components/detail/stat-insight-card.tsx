'use client';

import ProgressBar from '@/components/ui/progress-bar';

interface StatInsight {
  category: string;
  score: number;
  description: string;
  details: string;
}

interface StatInsightCardProps {
  insight: StatInsight;
}

export default function StatInsightCard({ insight }: StatInsightCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'success';
    if (score >= 70) return 'primary';
    if (score >= 50) return 'warning';
    return 'danger';
  };

  const getIconByCategory = (category: string) => {
    switch (category) {
      case '거리 적성': return 'ri-road-map-line';
      case '기수 효과': return 'ri-user-star-line';
      case '코스 적합도': return 'ri-route-line';
      case '컨디션': return 'ri-heart-pulse-line';
      default: return 'ri-bar-chart-line';
    }
  };

  return (
    <div className="bg-white rounded-card p-4 shadow-sm">
      <div className="flex items-start gap-4">
        {/* 아이콘 */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          getScoreColor(insight.score) === 'success' ? 'bg-success/10 text-success' :
          getScoreColor(insight.score) === 'primary' ? 'bg-primary/10 text-primary' :
          getScoreColor(insight.score) === 'warning' ? 'bg-warning/10 text-warning' :
          'bg-danger/10 text-danger'
        }`}>
          <i className={`${getIconByCategory(insight.category)} text-xl`}></i>
        </div>

        {/* 콘텐츠 */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-heading-m font-semibold">{insight.category}</h3>
            <span className={`text-heading-m font-bold ${
              getScoreColor(insight.score) === 'success' ? 'text-success' :
              getScoreColor(insight.score) === 'primary' ? 'text-primary' :
              getScoreColor(insight.score) === 'warning' ? 'text-warning' :
              'text-danger'
            }`}>
              {insight.score}점
            </span>
          </div>

          <p className="text-sm text-gray-700 mb-2">{insight.description}</p>
          <p className="text-caption text-gray-500 mb-3">{insight.details}</p>

          {/* 점수 바 */}
          <ProgressBar 
            value={insight.score} 
            max={100}
            color={getScoreColor(insight.score)}
            className="h-2"
          />
        </div>
      </div>
    </div>
  );
} 