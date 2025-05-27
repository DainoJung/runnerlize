'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import * as echarts from 'echarts'
import RaceSummaryCard from '@/components/home/race-summary-card'
import CTAButton from '@/components/ui/cta-button'
import TagBadge from '@/components/ui/tag-badge'
import ProgressBar from '@/components/ui/progress-bar'

export default function HomePage() {
  const chartRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleHorseClick = (horseName: string) => {
    router.push(`/detail?horse=${encodeURIComponent(horseName)}`)
  }

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current)
      
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
          data: ['서울', '부산', '제주'],
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
          data: ['5/20', '5/21', '5/22', '5/23', '5/24', '5/25', '5/26'],
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
          axisLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}회',
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
            name: '서울',
            type: 'line',
            data: [5, 6, 4, 5, 6, 5, 6],
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
            name: '부산',
            type: 'line',
            data: [3, 4, 3, 4, 3, 4, 4],
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
          },
          {
            name: '제주',
            type: 'line',
            data: [2, 0, 2, 0, 2, 0, 2],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: 'rgba(251, 191, 114, 1)'
            },
            lineStyle: {
              width: 3,
              color: 'rgba(251, 191, 114, 1)'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(251, 191, 114, 0.2)'
                }, {
                  offset: 1, color: 'rgba(251, 191, 114, 0.05)'
                }]
              }
            }
          }
        ]
      }

      chart.setOption(option)

      const handleResize = () => chart.resize()
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        chart.dispose()
      }
    }
  }, [])

  return (
    <div className="space-y-6">
      {/* 인사 메시지 */}
      <section>
        <h1 className="text-heading-l">안녕하세요, 다이노님 👋</h1>
        <p className="text-gray-600 mt-1">오늘의 경기를 확인해보세요</p>
      </section>

      {/* 오늘의 경주 요약 */}
      <section>
        <div className="bg-primary text-white rounded-lg p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
              <i className="ri-trophy-line text-white"></i>
            </div>
            <span className="text-lg font-bold">오늘은 총 12경기 열려요!</span>
          </div>
          <i className="ri-arrow-right-s-line text-white"></i>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <RaceSummaryCard
            location="서울 경마공원"
            raceCount={6}
            firstRaceTime="13:00"
            lastRaceTime="17:30"
            weather="맑음"
            weatherIcon="ri-sun-line"
            color="primary"
          />
          <RaceSummaryCard
            location="부산 경마공원"
            raceCount={4}
            firstRaceTime="14:00"
            lastRaceTime="16:30"
            weather="흐림"
            weatherIcon="ri-cloud-line"
            color="secondary"
          />
          <RaceSummaryCard
            location="제주 경마공원"
            raceCount={2}
            firstRaceTime="15:00"
            lastRaceTime="16:00"
            weather="맑음"
            weatherIcon="ri-sun-line"
            color="warning"
          />
        </div>
      </section>

      {/* 다가오는 경주 리스트 */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-heading-l">다가오는 경주</h2>
          <a href="#" className="text-sm text-primary flex items-center">
            더보기 <i className="ri-arrow-right-s-line ml-1"></i>
          </a>
        </div>
        <div className="space-y-3">
          {/* 경주 카드들 */}
          <div className="bg-white rounded-lg shadow-card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex flex-col items-center justify-center mr-3">
                  <span className="text-sm text-primary">13:00</span>
                  <span className="text-xs text-gray-600">서울</span>
                </div>
                                  <div>
                    <h3 className="font-medium">서울 1경주</h3>
                    <div className="flex gap-2 mt-1">
                      <TagBadge>A급</TagBadge>
                      <TagBadge>1,200m</TagBadge>
                      <TagBadge 
                        variant="primary"
                        className="cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => handleHorseClick('골든파워')}
                      >
                        골든파워 76%
                      </TagBadge>
                    </div>
                  </div>
              </div>
              <CTAButton variant="secondary">
                예측 보러가기
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* 오늘의 승률 TOP 3 */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-heading-l">오늘의 승률 TOP 3</h2>
          <a href="#" className="text-sm text-primary flex items-center">
            더보기 <i className="ri-arrow-right-s-line ml-1"></i>
          </a>
        </div>
        <div className="overflow-x-auto custom-scrollbar pb-2">
          <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
            {/* 말 카드들 */}
            <div 
              className="horse-card bg-white rounded-lg shadow-card p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleHorseClick('골든파워')}
            >
              <div className="relative mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://readdy.ai/api/search-image?query=close%20up%20portrait%20of%20a%20beautiful%20race%20horse%2C%20thoroughbred%2C%20detailed%20face%2C%20professional%20photography%2C%20studio%20lighting%2C%20high%20quality&width=200&height=200&seq=horse1&orientation=squarish" 
                    alt="골든파워" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-md">
                  1
                </div>
              </div>
              <h3 className="font-bold text-center">골든파워</h3>
              <p className="text-sm text-gray-600 mb-2">김도현 기수</p>
              <ProgressBar value={76} className="w-full mb-1" />
              <p className="text-sm font-medium text-primary">승률 76%</p>
            </div>

            <div 
              className="horse-card bg-white rounded-lg shadow-card p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleHorseClick('바람의질주')}
            >
              <div className="relative mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://readdy.ai/api/search-image?query=close%20up%20portrait%20of%20a%20different%20race%20horse%2C%20thoroughbred%2C%20detailed%20face%2C%20professional%20photography%2C%20studio%20lighting%2C%20high%20quality&width=200&height=200&seq=horse2&orientation=squarish" 
                    alt="바람의질주" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shadow-md">
                  2
                </div>
              </div>
              <h3 className="font-bold text-center">바람의질주</h3>
              <p className="text-sm text-gray-600 mb-2">이영희 기수</p>
              <ProgressBar value={68} className="w-full mb-1" />
              <p className="text-sm font-medium text-secondary">승률 68%</p>
            </div>

            <div 
              className="horse-card bg-white rounded-lg shadow-card p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleHorseClick('황금마차')}
            >
              <div className="relative mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://readdy.ai/api/search-image?query=close%20up%20portrait%20of%20a%20third%20race%20horse%2C%20thoroughbred%2C%20detailed%20face%2C%20professional%20photography%2C%20studio%20lighting%2C%20high%20quality&width=200&height=200&seq=horse3&orientation=squarish" 
                    alt="황금마차" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-warning text-white flex items-center justify-center text-xs font-bold shadow-md">
                  3
                </div>
              </div>
              <h3 className="font-bold text-center">황금마차</h3>
              <p className="text-sm text-gray-600 mb-2">박민수 기수</p>
              <ProgressBar value={62} className="w-full mb-1" />
              <p className="text-sm font-medium text-warning">승률 62%</p>
            </div>
          </div>
        </div>
      </section>

      {/* 최근 경주 결과 */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-heading-l">최근 경주 결과</h2>
          <a href="#" className="text-sm text-primary flex items-center">
            더보기 <i className="ri-arrow-right-s-line ml-1"></i>
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-card p-4" style={{ height: '300px' }}>
          <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
        </div>
      </section>
    </div>
  )
} 