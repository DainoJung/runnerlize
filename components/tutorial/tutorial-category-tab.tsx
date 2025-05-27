'use client';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface TutorialCategoryTabProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function TutorialCategoryTab({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: TutorialCategoryTabProps) {
  return (
    <div className="mb-6">
      <div className="overflow-x-auto custom-scrollbar">
        <div className="flex gap-2 pb-2" style={{ minWidth: 'min-content' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <i className={`${category.icon} text-lg`}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 