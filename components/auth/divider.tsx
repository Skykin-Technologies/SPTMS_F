"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface DividerProps {
  text?: string
  className?: string
}

export function Divider({ text = "Or continue with", className }: DividerProps) {
  return (
    <div className={cn("relative flex items-center py-4", className)}>
      <div className="flex-grow border-t border-gray-300" />
      <span className="px-4 text-sm text-gray-500">{text}</span>
      <div className="flex-grow border-t border-gray-300" />
    </div>
  )
}

