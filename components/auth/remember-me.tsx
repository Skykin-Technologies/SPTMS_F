"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RememberMeProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export function RememberMe({ 
  checked = false, 
  onCheckedChange,
  className 
}: RememberMeProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <input
        type="checkbox"
        id="remember-me"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
      />
      <label 
        htmlFor="remember-me" 
        className="text-sm font-normal text-blue-600 cursor-pointer"
      >
        Remember me
      </label>
    </div>
  )
}

