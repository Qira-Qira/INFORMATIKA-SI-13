import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "border-input focus-visible:border-ring focus-visible:ring-ring/50 bg-transparent rounded-md border px-3 py-2 text-sm w-full",
        className,
      )}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input
