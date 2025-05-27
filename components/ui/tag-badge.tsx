interface TagBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'warning' | 'success' | 'danger'
  size?: 'sm' | 'md'
  className?: string
  onClick?: () => void
}

export default function TagBadge({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  onClick
}: TagBadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full font-medium'
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-xs'
  }

  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    warning: 'bg-warning/10 text-warning',
    success: 'bg-success/10 text-success',
    danger: 'bg-danger/10 text-danger'
  }

  return (
    <span 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  )
} 