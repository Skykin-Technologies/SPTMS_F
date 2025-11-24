/**
 * Auth Types
 * Type definitions for authentication
 */

export interface SignInRequest {
  email: string
  password: string
  rememberMe?: boolean
}

export interface SignUpRequest {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user?: {
    id: string
    email: string
    name?: string
  }
  message?: string
}






