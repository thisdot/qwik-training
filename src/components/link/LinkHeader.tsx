import { Link } from '@builder.io/qwik-city'

export interface LinkHeaderProps {
  linkMetas: {
    href: string
    label: string
  }[]
}

export const LinkHeader = ({ linkMetas }: LinkHeaderProps) => {
  return (
    <div>
      {linkMetas.map((linkMeta) => (
        <span style="margin: 5px">
          <Link href={linkMeta.href}>{linkMeta.label}:</Link>
        </span>
      ))}
    </div>
  )
}
