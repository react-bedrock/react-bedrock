import styles from './nav-bar.module.scss'
import { NavBarItems } from './nav-bar-items'
import { NavBarItem } from './nav-bar-item'

export function NavBar() {
  return (
    <div className={styles['nav-bar']}>
      <h1 className={styles['nav-bar-title']}>React Bedrock</h1>
      <NavBarItems>
        <NavBarItem href="/">Dashboard</NavBarItem>
        <NavBarItem href="/components/button">Button</NavBarItem>
        <NavBarItem href="/components/paper">Paper</NavBarItem>
      </NavBarItems>
    </div>
  )
}
