import { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className: string
}

export const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`px-4 py-2 bg-indigo-700 text-gray-50 rounded-md ${className}`}>
      {children}
    </button>
  )
}