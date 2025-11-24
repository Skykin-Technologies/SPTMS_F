/**
 * Auth API Endpoints
 * All API calls related to authentication
 */

import axiosInstance from "@/modules/core/axios/service"
import type { SignInRequest, SignUpRequest, AuthResponse } from "./types"

const BASE_URL = "/auth" // Update with your actual backend endpoint
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true" // Set in .env.local

/**
 * Sign in user
 * POST /auth/sign-in
 * 
 * For development: Set NEXT_PUBLIC_USE_MOCK_DATA=true in .env.local to use mock data
 */
export async function signIn(data: SignInRequest): Promise<AuthResponse> {
  // Use mock data in development if enabled
  if (USE_MOCK_DATA) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      token: `mock_token_${Date.now()}`,
      user: {
        id: "1",
        email: data.email,
        name: "Mock User",
      },
      message: "Mock sign in successful",
    }
  }

  // Real API call
  const response = await axiosInstance.post<AuthResponse>(`${BASE_URL}/sign-in`, data)
  return response.data
}

/**
 * Sign up user
 * POST /auth/sign-up
 * 
 * For development: Set NEXT_PUBLIC_USE_MOCK_DATA=true in .env.local to use mock data
 */
export async function signUp(data: SignUpRequest): Promise<AuthResponse> {
  // Use mock data in development if enabled
  if (USE_MOCK_DATA) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      token: `mock_token_${Date.now()}`,
      user: {
        id: "1",
        email: data.email,
        name: "Mock User",
      },
      message: "Mock sign up successful",
    }
  }

  // Real API call
  const response = await axiosInstance.post<AuthResponse>(`${BASE_URL}/sign-up`, data)
  return response.data
}

/**
 * Sign out user
 * POST /auth/sign-out
 */
export async function signOut(): Promise<void> {
  if (USE_MOCK_DATA) {
    return Promise.resolve()
  }

  await axiosInstance.post(`${BASE_URL}/sign-out`)
}

