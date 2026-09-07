import { cn } from './lib/cn'
import { SimpleSelect, type SimpleSelectItem } from './components/SimpleSelect'

/**
 * Appearance picker. The product owns the option list and persistence
 * (cookie name, families, light/dark). This is only the chrome.
 */
export function ThemeSwitcher({
  items,
  value,
  onValueChange,
  className = '',
  label,
  size = 'compact',
}: {
  items: SimpleSelectItem[]
  value: string
  onValueChange: (value: string) => void
  className?: string
  label?: string
  size?: 'compact' | 'nav'
}) {
  const labelled = Boolean(label)

  return (
    <div className={cn(labelled ? 'flex flex-col gap-1' : 'inline-block', className)}>
      <span className={labelled ? 'text-sm font-medium text-foreground' : 'sr-only'}>
        {label ?? 'Theme'}
      </span>
      <SimpleSelect
        items={items}
        value={value}
        onValueChange={onValueChange}
        size={size === 'compact' && !labelled ? 'sm' : 'default'}
        className={labelled ? 'w-full' : undefined}
        aria-label={labelled ? undefined : (label ?? 'Theme')}
      />
    </div>
  )
}

export default ThemeSwitcher
