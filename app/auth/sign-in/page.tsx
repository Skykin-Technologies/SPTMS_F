"use client"

import { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { SignInForm } from "@/components/auth/sign-in-form"
import { AuthLayout } from "@/components/auth/auth-layout"
import { PromotionalPanel } from "@/components/auth/promotional-panel"
import { setAuthToken } from "@/modules/core/cache/token.storage"
import { signIn } from "@/modules/auth/endpoints"

function SignInContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirectTo") || "/dashboard"

  const handleSignIn = async (data: { email: string; password: string; rememberMe: boolean }) => {
    try {
      const response = await signIn({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      })
      
      // Set auth token from response
      setAuthToken(response.token, data.rememberMe ? 30 : 7) // 30 days if remember me, else 7 days
      
      // Redirect to dashboard or original destination
      router.push(redirectTo)
      router.refresh() // Refresh to update middleware
    } catch (error) {
      console.error("Sign in error:", error)
      // Handle error (show toast, etc.)
    }
  }

  return (
    <AuthLayout
      promotionalContent={
        <PromotionalPanel />
      }
    >
      <SignInForm onSubmit={handleSignIn} />
    </AuthLayout>
  )
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <AuthLayout promotionalContent={<PromotionalPanel />}>
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </AuthLayout>
    }>
      <SignInContent />
    </Suspense>
  )
}