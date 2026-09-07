import { describe, expect, it } from 'vitest'
import { cookieAssignment, readCookieValue } from './cookie'

describe('cookieAssignment', () => {
  it('is Lax, not HttpOnly, and omits Domain unless asked', () => {
    const hosted = cookieAssignment('pware_theme', '%7B%7D', {
      domain: '.example.com',
      secure: true,
    })
    expect(hosted.startsWith('pware_theme=')).toBe(true)
    expect(hosted).toMatch(/Path=\//)
    expect(hosted).toMatch(/SameSite=Lax/)
    expect(hosted).toMatch(/Secure/)
    expect(hosted).toMatch(/Domain=\.example\.com/)
    expect(hosted).not.toMatch(/HttpOnly/)

    const local = cookieAssignment('pware_theme', 'x', { secure: false })
    expect(local).not.toMatch(/Domain=/)
    expect(local).not.toMatch(/Secure/)
  })

  it('rejects an empty name', () => {
    expect(() => cookieAssignment('', 'x')).toThrow(/name is required/)
  })
})

describe('readCookieValue', () => {
  it('matches the whole name', () => {
    const header = 'other=1; pware_theme=abc; keep=yes'
    expect(readCookieValue(header, 'pware_theme')).toBe('abc')
    expect(readCookieValue('', 'pware_theme')).toBeNull()
    expect(readCookieValue('xpware_theme=no', 'pware_theme')).toBeNull()
    expect(readCookieValue(header, '')).toBeNull()
  })
})
