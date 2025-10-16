import React from "react"
import { cn } from "@/lib/utils"

type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> & {
  children?: React.ReactNode
  size?: ButtonSize
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, size = "md", ...props },
  ref,
) {
  const sizeClass =
    size === "sm" ? "px-3 py-1 text-sm" : size === "lg" ? "px-5 py-3 text-base" : "px-4 py-2 text-sm"

  return (
    <button
      ref={ref}
      className={cn("inline-flex items-center justify-center rounded-md font-medium", sizeClass, className)}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
