import { ButtonHTMLAttributes, ReactNode } from 'react'

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'disabled'
  children: ReactNode
  className?: string
}

export default function CTAButton({ 
  variant = 'primary', 
  children, 
  className = '', 
  disabled,
  ...props 
}: CTAButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-button font-medium text-sm transition-colors duration-200'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 disabled:bg-gray-300 disabled:text-gray-500',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 disabled:bg-gray-300 disabled:text-gray-500',
    ghost: 'bg-transparent text-primary border border-primary hover:bg-primary/10 disabled:text-gray-500 disabled:border-gray-300',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }

  const finalVariant = disabled ? 'disabled' : variant

  return (
    <button
      className={`${baseClasses} ${variantClasses[finalVariant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
} 