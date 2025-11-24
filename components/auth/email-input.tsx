"use client"

import * as React from "react"
import { Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { FormLabel } from "@/components/ui/form"
import { cn } from "@/lib/utils"

interface EmailInputProps extends React.ComponentProps<typeof Input> {
  label?: string
}

export function EmailInput({ 
  label = "Email Address", 
  className,
  ...props 
}: EmailInputProps) {
  return (
    <div className="auth-input-field">
      <FormLabel className="text-sm font-medium text-gray-700">{label}</FormLabel>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" style={{ zIndex: 1 }} />
        <Input
          type="email"
          placeholder="you@example.com"
          className={cn("pl-10 pr-4 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white", className)}
          style={{ paddingLeft: '2.5rem' }}
          {...props}
        />
      </div>
    </div>
  )
}

