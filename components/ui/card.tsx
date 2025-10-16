import React from "react"

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={["rounded-xl shadow-sm bg-transparent", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ children, className, ...props }: CardProps) {
  return (
    <div className={["p-4", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <div className={["px-4 pt-4", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className, ...props }: CardProps) {
  return (
    <div className={["px-4 pb-4", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
}

export default Card
