import TagBadge from '@/components/ui/tag-badge'

interface RaceSummaryCardProps {
  location: string
  raceCount: number
  firstRaceTime: string
  lastRaceTime: string
  weather: string
  weatherIcon: string
  color: 'primary' | 'secondary' | 'warning'
}

export default function RaceSummaryCard({
  location,
  raceCount,
  firstRaceTime,
  lastRaceTime,
  weather,
  weatherIcon,
  color
}: RaceSummaryCardProps) {
  const colorClasses = {
    primary: 'bg-blue-100 text-primary',
    secondary: 'bg-green-100 text-secondary',
    warning: 'bg-yellow-100 text-warning'
  }

  const badgeColors = {
    primary: 'bg-blue-50 text-blue-700',
    secondary: 'bg-green-50 text-green-700',
    warning: 'bg-yellow-50 text-yellow-700'
  }

  return (
    <div className="bg-white rounded-lg shadow-card p-4">
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${colorClasses[color]}`}>
          <i className="ri-map-pin-line"></i>
        </div>
        <div>
          <h3 className="font-bold">{location}</h3>
          <p className="text-sm text-gray-600">{raceCount} 경주</p>
        </div>
        <div className="ml-auto">
          <TagBadge className={badgeColors[color]}>
            <i className={`${weatherIcon} mr-1`}></i>{weather}
          </TagBadge>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>첫 경주: {firstRaceTime}</span>
        <span>마지막 경주: {lastRaceTime}</span>
      </div>
    </div>
  )
} 