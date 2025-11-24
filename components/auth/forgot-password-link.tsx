"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ForgotPasswordLinkProps {
  href?: string
  className?: string
}

export function ForgotPasswordLink({ 
  href = "/auth/forgot-password",
  className 
}: ForgotPasswordLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium auth-link-blue hover:underline",
        className
      )}
    >
      Forgot password?
    </Link>
  )
}

