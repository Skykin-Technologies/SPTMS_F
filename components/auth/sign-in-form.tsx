"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { EmailInput } from "./email-input"
import { PasswordInput } from "./password-input"
import { RememberMe } from "./remember-me"
import { ForgotPasswordLink } from "./forgot-password-link"
import { SocialLoginButton } from "./social-login-button"
import { Divider } from "./divider"
import "./auth.css"

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean(),
})

type SignInFormValues = z.infer<typeof signInSchema>

interface SignInFormProps {
  onSubmit?: (data: SignInFormValues) => void | Promise<void>
  isLoading?: boolean
}

export function SignInForm({ onSubmit, isLoading = false }: SignInFormProps) {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  const handleSubmit = async (data: SignInFormValues) => {
    await onSubmit?.(data)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 auth-welcome-section">
        <h1 className="text-3xl font-bold text-black">Welcome Back</h1>
        <p className="text-gray-600">
          Sign in to your account to continue
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="auth-form">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="auth-form-item">
                <FormControl>
                  <EmailInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="auth-form-item">
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RememberMe
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <ForgotPasswordLink />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5" 
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </Form>

      <Divider />

      <div className="auth-social-buttons">
        <SocialLoginButton provider="google" />
        <SocialLoginButton provider="microsoft" />
      </div>

      <div className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link href="/auth/sign-up" className="auth-link-blue font-medium">
          Sign up for free
        </Link>
      </div>
    </div>
  )
}

