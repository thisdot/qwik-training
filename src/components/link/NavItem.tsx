import { Link } from '@builder.io/qwik-city'

export interface NavItemProps {
  href: string
  label: string
  key?: string
}

export const NavItem = ({ href, label, key }: NavItemProps) => {
  return (
    <li key={key || label}>
      <Link href={href}>{label}</Link>
    </li>
  )
}
