'use client';

import TagBadge from '@/components/ui/tag-badge';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  difficulty: string;
}

interface TutorialCardItemProps {
  tutorial: Tutorial;
}

export default function TutorialCardItem({ tutorial }: TutorialCardItemProps) {
  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case '초급': return 'success';
      case '중급': return 'warning';
      case '고급': return 'danger';
      default: return 'default';
    }
  };

  return (
    <div className="bg-white rounded-card p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start gap-4">
        {/* 썸네일 */}
        <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
          <i className={`${tutorial.thumbnail} text-2xl text-gray-500`}></i>
        </div>

        {/* 콘텐츠 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-heading-m font-semibold text-gray-900 line-clamp-1">
              {tutorial.title}
            </h3>
            <button className="text-gray-400 hover:text-gray-600 ml-2">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {tutorial.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TagBadge 
                variant={getDifficultyVariant(tutorial.difficulty)}
                size="sm"
              >
                {tutorial.difficulty}
              </TagBadge>
              <div className="flex items-center gap-1 text-caption text-gray-500">
                <i className="ri-time-line"></i>
                <span>{tutorial.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <i className="ri-bookmark-line text-gray-500"></i>
              </button>
              <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <i className="ri-play-fill text-primary"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 