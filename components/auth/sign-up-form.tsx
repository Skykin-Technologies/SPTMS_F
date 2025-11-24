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
import { SocialLoginButton } from "./social-login-button"
import { Divider } from "./divider"
import "./auth.css"

const signUpSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type SignUpFormValues = z.infer<typeof signUpSchema>

interface SignUpFormProps {
  onSubmit?: (data: Omit<SignUpFormValues, "confirmPassword">) => void | Promise<void>
  isLoading?: boolean
}

export function SignUpForm({ onSubmit, isLoading = false }: SignUpFormProps) {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const handleSubmit = async (data: SignUpFormValues) => {
    const { confirmPassword, ...signUpData } = data
    await onSubmit?.(signUpData)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 auth-welcome-section">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-muted-foreground">
          Sign up to get started with your account
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="auth-form-item">
                <FormControl>
                  <PasswordInput
                    {...field}
                    label="Confirm Password"
                    placeholder="          Confirm your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>
      </Form>

      <Divider />

      <div className="auth-social-buttons">
        <SocialLoginButton provider="google" />
        <SocialLoginButton provider="microsoft" />
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/auth/sign-in" className="auth-link-blue">
          Sign in
        </Link>
      </div>
    </div>
  )
}

