'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import * as echarts from 'echarts';

export default function DetailPage() {
  const searchParams = useSearchParams();
  const horseName = searchParams.get('horse') || '골든파워';
  const combinationChartRef = useRef<HTMLDivElement>(null);
  const [showMoreComment, setShowMoreComment] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // 말 이름에 따른 데이터 매핑
  const getHorseData = (name: string) => {
    const horseDataMap: { [key: string]: any } = {
      '골든파워': {
        name: '골든파워',
        jockey: '김도현',
        jockeyWinRate: 32,
        jockeyAvgRank: 2.3,
        age: 5,
        prediction: 76,
        number: 7,
        grade: 'A급',
        location: '서울 경마공원',
        distance: '1,200m',
        raceType: '특별경주',
        weather: '맑음',
        date: '2025-05-28',
        image: 'https://readdy.ai/api/search-image?query=close%20up%20portrait%20of%20a%20beautiful%20race%20horse%2C%20thoroughbred%2C%20detailed%20face%2C%20professional%20photography%2C%20studio%20lighting%2C%20high%20quality&width=200&height=200&seq=horse1&orientation=squarish',
        jockeyImage: 'https://readdy.ai/api/search-image?query=professional%20jockey%20portrait%2C%20helmet%2C%20racing%20uniform%2C%20serious%20expression%2C%20professional%20photography&width=100&height=100&seq=jockey1&orientation=squarish'
      },
      '바람의질주': {
        name: '바람의질주',
        jockey: '이영희',
        jockeyWinRate: 28,
        jockeyAvgRank: 2.8,
        age: 4,
        prediction: 68,
        number: 3,
        grade: 'A급',
        location: '서울 경마공원',
        distance: '1,200m',
        raceType: '특별경주',
        weather: '맑음',
        date: '2025-05-28',
        image: 'https://readdy.ai/api/search-image?query=close%20up%20portrait%20of%20a%20different%20race%20horse%2C%20thoroughbred%2C%20detailed%20face%2C%20professional%20photography%2C%20studio%20lighting%2C%20high%20quality&width=200&height=200&seq=horse2&orientation=squarish',
        jockeyImage: 'https://readdy.ai/api/search-image?query=professional%20female%20jockey%20portrait%2C%20helmet%2C%20racing%20uniform%2C%20confident%20expression&width=100&height=100&seq=jockey2&orientation=squarish'
      },
      '황금마차': {
        name: '황금마차',
        jockey: '박민수',
        jockeyWinRate: 25,
        jockeyAvgRank: 3.1,
        age: 6,
        prediction: 62,
        number: 5,
        grade: 'A급',
        location: '서울 경마공원',
        distance: '1,200m',
        raceType: '특별경주',
        weather: '맑음',
        date: '2025-05-28',
        image: 'https://readdy.ai/api/search-image?query=close%20up%20portrait%20of%20a%20third%20race%20horse%2C%20thoroughbred%2C%20detailed%20face%2C%20professional%20photography%2C%20studio%20lighting%2C%20high%20quality&width=200&height=200&seq=horse3&orientation=squarish',
        jockeyImage: 'https://readdy.ai/api/search-image?query=professional%20male%20jockey%20portrait%2C%20helmet%2C%20racing%20uniform%2C%20determined%20expression&width=100&height=100&seq=jockey3&orientation=squarish'
      }
    };
    
    return horseDataMap[name] || horseDataMap['골든파워'];
  };

  const horseData = getHorseData(horseName);

  // 조합 차트 초기화
  useEffect(() => {
    if (combinationChartRef.current) {
      const chart = echarts.init(combinationChartRef.current);
      
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: '#e2e8f0',
          textStyle: {
            color: '#1f2937'
          }
        },
        legend: {
          data: [horseData.name, '블루스타', '함께 출전'],
          bottom: 0
        },
        grid: {
          top: 10,
          right: 10,
          bottom: 30,
          left: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['3/15', '3/29', '4/12', '4/26', '5/10'],
          axisLine: {
            lineStyle: {
              color: '#e2e8f0'
            }
          },
          axisLabel: {
            color: '#1f2937'
          }
        },
        yAxis: {
          type: 'value',
          max: 3,
          min: 1,
          inverse: true,
          axisLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}위',
            color: '#1f2937'
          },
          splitLine: {
            lineStyle: {
              color: '#e2e8f0'
            }
          }
        },
        series: [
          {
            name: horseData.name,
            type: 'line',
            data: [2, 1, 1, 3, 1],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: 'rgba(87, 181, 231, 1)'
            },
            lineStyle: {
              width: 3,
              color: 'rgba(87, 181, 231, 1)'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(87, 181, 231, 0.2)'
                }, {
                  offset: 1, color: 'rgba(87, 181, 231, 0.05)'
                }]
              }
            }
          },
          {
            name: '블루스타',
            type: 'line',
            data: [1, 2, 2, 1, 2],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: 'rgba(141, 211, 199, 1)'
            },
            lineStyle: {
              width: 3,
              color: 'rgba(141, 211, 199, 1)'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(141, 211, 199, 0.2)'
                }, {
                  offset: 1, color: 'rgba(141, 211, 199, 0.05)'
                }]
              }
            }
          }
        ]
      };

      chart.setOption(option);

      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.dispose();
      };
    }
  }, [horseData.name]);

  return (
    <div className="min-h-screen bg-bg-default pb-20">
      {/* 상단 요약 카드 */}
      <section className="px-4 pt-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* 말 정보 (좌측) */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                  <img src={horseData.image} alt={horseData.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                  {horseData.number}
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{horseData.name}</h1>
                <div className="flex gap-2 mt-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    <i className="ri-award-line mr-1"></i>{horseData.grade}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    <i className="ri-calendar-line mr-1"></i>{horseData.age}세
                  </span>
                </div>
              </div>
            </div>
            
            {/* 기수 정보 (우측) */}
            <div className="flex-1 flex flex-col md:flex-row gap-4">
              <div className="flex-1 border-l pl-4">
                <p className="text-sm text-gray-500">기수</p>
                <div className="flex items-center mt-1">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2">
                    <img src={horseData.jockeyImage} alt={`${horseData.jockey} 기수`} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <p className="font-medium">{horseData.jockey}</p>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-600 mr-2">승률 <span className="text-primary font-medium">{horseData.jockeyWinRate}%</span></span>
                      <span className="text-gray-600">평균 <span className="text-primary font-medium">{horseData.jockeyAvgRank}위</span></span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 종합 예측 승률 */}
              <div className="flex-1 flex flex-col items-center justify-center border-l pl-4">
                <p className="text-sm text-gray-500 mb-1">AI 예측 승률</p>
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="progress-ring" width="80" height="80">
                    <circle className="progress-ring-circle bg" stroke="#e5e7eb" strokeWidth="8" fill="transparent" r="32" cx="40" cy="40"/>
                    <circle 
                      className="progress-ring-circle" 
                      stroke="#3449FF" 
                      strokeWidth="8" 
                      fill="transparent" 
                      r="32" 
                      cx="40" 
                      cy="40" 
                      strokeDasharray="201" 
                      strokeDashoffset={201 - (201 * horseData.prediction / 100)}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{horseData.prediction}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 출전 조건 태그 */}
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-gray-500 mb-2">출전 조건</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                <i className="ri-map-pin-line mr-1"></i>{horseData.location}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700">
                <i className="ri-ruler-line mr-1"></i>{horseData.distance}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700">
                <i className="ri-trophy-line mr-1"></i>{horseData.raceType}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-50 text-yellow-700">
                <i className="ri-sun-line mr-1"></i>{horseData.weather}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700">
                <i className="ri-calendar-event-line mr-1"></i>{horseData.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AI 예측 근거 영역 */}
      <section className="px-4 mb-6">
        <h2 className="text-xl font-bold mb-3">AI 예측 근거</h2>
        <div className="overflow-x-auto custom-scrollbar pb-2">
          <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
            {/* 기수 승률 카드 */}
            <div className="insight-card bg-white rounded-lg shadow-sm p-4 cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <i className="ri-user-star-line text-xl text-primary"></i>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">82%</p>
                  <h3 className="font-medium mb-1">기수 적합도</h3>
                  <p className="text-sm text-gray-600">{horseData.jockey} 기수와 높은 호흡</p>
                </div>
              </div>
            </div>
            
            {/* 마필 적성 카드 */}
            <div className="insight-card bg-white rounded-lg shadow-sm p-4 cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <i className="ri-speed-line text-xl text-secondary"></i>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">A+</p>
                  <h3 className="font-medium mb-1">단거리 적성</h3>
                  <p className="text-sm text-gray-600">1,200m 최적화된 능력</p>
                </div>
              </div>
            </div>
            
            {/* 코스 통계 카드 */}
            <div className="insight-card bg-white rounded-lg shadow-sm p-4 cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <i className="ri-road-map-line text-xl text-purple-600"></i>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">91%</p>
                  <h3 className="font-medium mb-1">코스 승률</h3>
                  <p className="text-sm text-gray-600">서울 코스 높은 적응력</p>
                </div>
              </div>
            </div>
            
            {/* 과거 성적 카드 */}
            <div className="insight-card bg-white rounded-lg shadow-sm p-4 cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                  <i className="ri-history-line text-xl text-warning"></i>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-warning">3-1-0</p>
                  <h3 className="font-medium mb-1">최근 5경기</h3>
                  <p className="text-sm text-gray-600">상승세 뚜렷한 성적</p>
                </div>
              </div>
            </div>
            
            {/* 컨디션 카드 */}
            <div className="insight-card bg-white rounded-lg shadow-sm p-4 cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                  <i className="ri-heart-pulse-line text-xl text-red-500"></i>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-500">95%</p>
                  <h3 className="font-medium mb-1">컨디션</h3>
                  <p className="text-sm text-gray-600">최상의 경기력 상태</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 추천 마필 조합 */}
      <section className="px-4 mb-6">
        <h2 className="text-xl font-bold mb-3">추천 마필 조합</h2>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">복승/연승 추천 조합</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              승률 68%
            </span>
          </div>
          <div className="flex gap-3 mb-4">
            {/* 말 1 (현재 말) */}
            <div className="flex-1 flex items-center p-2 bg-gray-50 rounded border border-primary">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-2 flex-shrink-0">
                <img src={horseData.image} alt={horseData.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm truncate">{horseData.name}</p>
                <div className="flex items-center">
                  <span className="text-xs bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center mr-1">{horseData.number}</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${horseData.prediction}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="ri-add-line text-gray-400"></i>
            </div>
            {/* 말 2 */}
            <div className="flex-1 flex items-center p-2 bg-gray-50 rounded border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-2 flex-shrink-0">
                <img src="https://readdy.ai/api/search-image?query=close%20up%20portrait%20of%20a%20different%20race%20horse%2C%20thoroughbred%2C%20detailed%20face%2C%20professional%20photography%2C%20studio%20lighting%2C%20high%20quality&width=100&height=100&seq=horse2&orientation=squarish" alt="블루스타" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm truncate">블루스타</p>
                <div className="flex items-center">
                  <span className="text-xs bg-gray-500 text-white rounded-full w-4 h-4 flex items-center justify-center mr-1">3</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: '62%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">추천 근거</h4>
            <p className="text-sm text-gray-600">{horseData.name}와 블루스타는 최근 3번의 동일 경주에서 함께 1-2위를 차지했습니다. 두 말의 주행 스타일이 상호보완적이며, 특히 서울 경마공원 1,200m 코스에서 높은 시너지를 보입니다.</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">과거 조합 성적</h4>
            <div ref={combinationChartRef} className="w-full h-40"></div>
          </div>
        </div>
      </section>

      {/* AI 분석 요약 코멘트 */}
      <section className="px-4 mb-6">
        <h2 className="text-xl font-bold mb-3">AI 분석 요약</h2>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
              <i className="ri-robot-line text-primary"></i>
            </div>
            <div>
              <p className="text-gray-700">
                {horseData.name}는 <span className="text-primary font-medium">최근 5경기 중 3회 1위</span>를 기록하며 뛰어난 성과를 보이고 있습니다. 특히 <span className="text-primary font-medium">1,200m 단거리</span>에서 강점을 보이며, 현재 기수 {horseData.jockey}와의 조합 승률은 <span className="text-primary font-medium">82%</span>입니다. 서울 경마공원 코스에 대한 적응력이 뛰어나고, 현재 컨디션도 최상으로 평가됩니다. 다만 비가 올 경우 성적이 다소 하락할 수 있는 점을 고려해야 합니다.
              </p>
              <button 
                onClick={() => setShowMoreComment(!showMoreComment)}
                className="mt-2 text-sm text-primary flex items-center"
              >
                <span>{showMoreComment ? '접기' : '더보기'}</span>
                <i className={`ml-1 ${showMoreComment ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
              </button>
              {showMoreComment && (
                <div className="mt-3 pt-3 border-t">
                  <p className="text-gray-700">
                    {horseData.name}의 혈통적 특성상 스피드와 지구력의 균형이 뛰어나며, 특히 초반 스타트와 직선주로에서의 가속력이 두드러집니다. 경주 초반 3-4위권을 유지하다가 마지막 400m 구간에서 폭발적인 스퍼트를 보이는 패턴이 일관되게 나타납니다.
                  </p>
                  <p className="text-gray-700 mt-2">
                    {horseData.jockey} 기수는 {horseData.name}의 이러한 특성을 잘 활용하는 전략을 구사하며, 두 번의 대상경주에서도 같은 전략으로 우승을 이끌어낸 바 있습니다. 블루스타와의 복승 조합은 두 말의 주행 패턴이 상호보완적이어서 높은 확률로 추천됩니다.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 과거 경기 요약 섹션 */}
      <section className="px-4 mb-6">
        <h2 className="text-xl font-bold mb-3">과거 경기 기록</h2>
        <div className="bg-white rounded-lg shadow-sm divide-y">
          {/* 경기 1 */}
          <div className="p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-3">
              1
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">서울 특별경주</h3>
                  <p className="text-sm text-gray-600">2025-05-10 · 1,200m · 맑음</p>
                </div>
                <span className="text-sm font-medium text-primary">+32.5pt</span>
              </div>
              <div className="mt-1 flex gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  타임 1:12.4
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  기수 {horseData.jockey}
                </span>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
          
          {/* 경기 2 */}
          <div className="p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold mr-3">
              3
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">부산 챔피언십</h3>
                  <p className="text-sm text-gray-600">2025-04-26 · 1,400m · 흐림</p>
                </div>
                <span className="text-sm font-medium text-gray-600">+12.8pt</span>
              </div>
              <div className="mt-1 flex gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  타임 1:24.7
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  기수 박성준
                </span>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
          
          {/* 경기 3 */}
          <div className="p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-3">
              1
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">제주 오픈 경주</h3>
                  <p className="text-sm text-gray-600">2025-04-12 · 1,200m · 맑음</p>
                </div>
                <span className="text-sm font-medium text-primary">+28.6pt</span>
              </div>
              <div className="mt-1 flex gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  타임 1:11.9
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  기수 {horseData.jockey}
                </span>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
          
          {/* 경기 4 */}
          <div className="p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-3">
              1
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">서울 스프린트</h3>
                  <p className="text-sm text-gray-600">2025-03-29 · 1,000m · 맑음</p>
                </div>
                <span className="text-sm font-medium text-primary">+30.2pt</span>
              </div>
              <div className="mt-1 flex gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  타임 0:58.3
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  기수 {horseData.jockey}
                </span>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
          
          {/* 경기 5 */}
          <div className="p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold mr-3">
              2
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">대구 클래식</h3>
                  <p className="text-sm text-gray-600">2025-03-15 · 1,800m · 비</p>
                </div>
                <span className="text-sm font-medium text-yellow-600">+18.4pt</span>
              </div>
              <div className="mt-1 flex gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  타임 1:52.1
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  기수 이준호
                </span>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      </section>

      {/* 하단 플로팅 액션 바 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex gap-3">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${isFavorite ? 'bg-warning text-white' : 'bg-gray-100 text-gray-500'}`}
            >
              <i className={isFavorite ? 'ri-star-fill' : 'ri-star-line'}></i>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <i className="ri-share-line"></i>
            </button>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg whitespace-nowrap"
            >
              <i className="ri-arrow-left-line mr-1"></i>이전으로
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-4 py-2 bg-primary text-white rounded-lg whitespace-nowrap inline-flex items-center"
            >
              <i className="ri-home-line mr-1"></i>홈으로
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 