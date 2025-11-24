"use client"

import { useRouter } from "next/navigation"
import { SignUpForm } from "@/components/auth/sign-up-form"
import { AuthLayout } from "@/components/auth/auth-layout"
import { PromotionalPanel } from "@/components/auth/promotional-panel"
import { setAuthToken } from "@/modules/core/cache/token.storage"
import { signUp } from "@/modules/auth/endpoints"

export default function SignUpPage() {
  const router = useRouter()

  const handleSignUp = async (data: { email: string; password: string }) => {
    try {
      const response = await signUp({
        email: data.email,
        password: data.password,
      })
 
  
      setAuthToken(response.token, 7) // 7 days default
      
      // Redirect to dashboard
      router.push("/dashboard")
      router.refresh() 
    } catch (error) {
      console.error("Sign up error:", error)
    
    }
  }

  return (
    <AuthLayout
      promotionalContent={
        <PromotionalPanel />
      }
    >
      <SignUpForm onSubmit={handleSignUp} />
    </AuthLayout>
  )
}

