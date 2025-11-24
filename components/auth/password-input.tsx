"use client"

import * as React from "react"
import { Lock, Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { FormLabel } from "@/components/ui/form"
import { cn } from "@/lib/utils"

interface PasswordInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
  label?: string
  showToggle?: boolean
}

export function PasswordInput({ 
  label = "Password", 
  className,
  showToggle = true,
  ...props 
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="auth-input-field">
      <FormLabel className="text-sm font-medium text-gray-700">{label}</FormLabel>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" style={{ zIndex: 1 }} />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className={cn("pl-10 pr-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white", className)}
          style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            style={{ zIndex: 2 }}
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        )}
      </div>
    </div>
  )
}

