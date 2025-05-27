'use client';

import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ui/progress-bar';

interface PredictionData {
  name: string;
  probability: number;
  confidence: string;
  jockey: string;
  odds: string;
}

interface PredictionBarChartProps {
  data: PredictionData[];
}

export default function PredictionBarChart({ data }: PredictionBarChartProps) {
  const router = useRouter();

  const handleHorseClick = (horseName: string) => {
    router.push(`/detail?horse=${encodeURIComponent(horseName)}`);
  };

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'high': return 'text-success';
      case 'medium': return 'text-warning';
      case 'low': return 'text-danger';
      default: return 'text-gray-500';
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
      <div className="flex items-center justify-between text-caption text-gray-500 mb-2">
        <span>말 이름</span>
        <span>승률</span>
      </div>
      
      {data.map((horse, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 
                  className="font-semibold text-gray-900 cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleHorseClick(horse.name)}
                >
                  {horse.name}
                </h4>
                <span className="text-heading-m font-bold text-primary">
                  {horse.probability}%
                </span>
              </div>
              <p className="text-caption text-gray-500">
                기수: {horse.jockey} • 배당: {horse.odds}배
              </p>
            </div>
          </div>
          
          <ProgressBar 
            value={horse.probability} 
            max={100}
            className="h-3"
          />
          
          <div className="flex items-center justify-between text-caption">
            <span className={`font-medium ${getConfidenceColor(horse.confidence)}`}>
              신뢰도: {getConfidenceText(horse.confidence)}
            </span>
            <span className="text-gray-500">
              순위 예상: {index + 1}위
            </span>
          </div>
        </div>
      ))}
    </div>
  );
} 