/**
 * Cookie helpers for guest chrome (theme, locale).
 *
 * The product owns the cookie name and Domain. This package does not
 * hard-code initagent.dev or any brand host.
 */

const YEAR_SECONDS = 60 * 60 * 24 * 365

export type CookieAssignmentOpts = {
  domain?: string
  secure?: boolean
  maxAge?: number
  path?: string
  sameSite?: 'Lax' | 'Strict' | 'None'
}

/** Assignment string for `document.cookie`. Not HttpOnly — the document must read it. */
export function cookieAssignment(
  name: string,
  value: string,
  opts: CookieAssignmentOpts = {},
): string {
  if (!name) {
    throw new Error('cookieAssignment: name is required')
  }
  const parts = [
    `${name}=${value}`,
    `Path=${opts.path ?? '/'}`,
    `Max-Age=${opts.maxAge ?? YEAR_SECONDS}`,
    `SameSite=${opts.sameSite ?? 'Lax'}`,
  ]
  if (opts.domain) parts.push(`Domain=${opts.domain}`)
  if (opts.secure) parts.push('Secure')
  return parts.join('; ')
}

export function readCookieValue(
  cookieHeader: string,
  name: string,
): string | null {
  if (!cookieHeader || !name) return null
  const prefix = `${name}=`
  for (const part of cookieHeader.split(';')) {
    const trimmed = part.trim()
    if (trimmed.startsWith(prefix)) return trimmed.slice(prefix.length)
  }
  return null
}
