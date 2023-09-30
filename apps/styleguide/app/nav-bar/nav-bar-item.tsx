import { Button } from '@react-bedrock/components'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'
import styles from './nav-bar.module.scss'

export function NavBarItem(props: PropsWithChildren<LinkProps>) {
  const { children, ...rest } = props;

  return (
    <li className={styles['nav-bar-item']}>
      <Link {...rest}>
        <Button>
          {children}
        </Button>
      </Link>
    </li>
  )
}
