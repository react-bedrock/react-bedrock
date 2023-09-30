import { HtmlHTMLAttributes } from 'react'
import styles from './nav-bar.module.scss'

export function NavBarItems(props: HtmlHTMLAttributes<HTMLUListElement>) {
  const { children, ...rest } = props;

  return (
    <ul {...rest} className={styles['nav-bar-list']}>
      {children}
    </ul>
  )
}
