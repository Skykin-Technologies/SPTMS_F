/**
 * Token Storage Utilities
 * Handles storing and retrieving authentication tokens
 */

const AUTH_COOKIE = "smartplan_session";

/**
 * Set authentication token in cookie
 */
export function setAuthToken(token: string, days: number = 7): void {
  if (typeof document === "undefined") return;

  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  
  document.cookie = `${AUTH_COOKIE}=${token}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

/**
 * Get authentication token from cookie
 */
export function getAuthToken(): string | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((row) => row.startsWith(`${AUTH_COOKIE}=`));
  
  return tokenCookie ? tokenCookie.split("=")[1] : null;
}

/**
 * Remove authentication token (logout)
 */
export function removeAuthToken(): void {
  if (typeof document === "undefined") return;

  document.cookie = `${AUTH_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return getAuthToken() !== null;
}

