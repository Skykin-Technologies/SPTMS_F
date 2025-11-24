"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AuthLayoutProps {
  children: React.ReactNode
  promotionalContent?: React.ReactNode
  className?: string
}

export function AuthLayout({ 
  children, 
  promotionalContent,
  className 
}: AuthLayoutProps) {
  return (
    <div className={cn("min-h-screen flex", className)}>
      {/* Left Column - Auth Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8 lg:p-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Right Column - Promotional Content */}
      {promotionalContent && (
        <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
          {promotionalContent}
        </div>
      )}
    </div>
  )
}

