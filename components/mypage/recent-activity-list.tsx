'use client';

interface RecentActivity {
  id: string;
  type: string;
  title: string;
  description: string;
  timestamp: string;
  icon: string;
}

interface RecentActivityListProps {
  activities: RecentActivity[];
}

export default function RecentActivityList({ activities }: RecentActivityListProps) {
  const getActivityColor = (type: string) => {
    switch (type) {
      case 'prediction': return 'text-primary bg-primary/10';
      case 'detail': return 'text-secondary bg-secondary/10';
      case 'strategy': return 'text-warning bg-warning/10';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <div className="space-y-4">
      {activities.length === 0 ? (
        <div className="bg-white rounded-card p-8 shadow-sm text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <i className="ri-history-line text-gray-400 text-2xl"></i>
          </div>
          <h3 className="text-heading-m font-semibold text-gray-900 mb-2">
            최근 활동이 없습니다
          </h3>
          <p className="text-gray-600 mb-4">
            경마 예측을 시작해보세요
          </p>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
            예측 보러가기
          </button>
        </div>
      ) : (
        activities.map((activity) => (
          <div key={activity.id} className="bg-white rounded-card p-4 shadow-sm">
            <div className="flex items-start gap-4">
              {/* 아이콘 */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getActivityColor(activity.type)}`}>
                <i className={`${activity.icon} text-xl`}></i>
              </div>

              {/* 콘텐츠 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-heading-m font-semibold text-gray-900 line-clamp-1">
                    {activity.title}
                  </h3>
                  <span className="text-caption text-gray-500 ml-2 whitespace-nowrap">
                    {activity.timestamp}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {activity.description}
                </p>

                <button className="text-sm text-primary font-medium hover:text-primary/80">
                  다시 보기 →
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
} 