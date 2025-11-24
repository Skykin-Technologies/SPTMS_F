"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PromotionalPanelProps {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export function PromotionalPanel({
  title = "Manage Your Projects Efficiently",
  description = "Streamline your workflow and collaborate with your team in real-time",
  imageSrc,
  imageAlt = "Project management",
  className,
}: PromotionalPanelProps) {
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: imageSrc 
            ? `url(${imageSrc})` 
            : `url("data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234256f4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%237c3aed;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad)'/%3E%3C/svg%3E")`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/80" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white space-y-6 px-8 max-w-lg">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight">{title}</h2>
          <p className="text-lg text-white/90 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

