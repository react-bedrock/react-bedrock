import styles from './nav-bar.module.scss'
import { NavBarItems } from './nav-bar-items'
import { NavBarItem } from './nav-bar-item'

export function NavBar() {
  return (
    <div className={styles['nav-bar']}>
      <h2 className={styles['nav-bar-title']}>React Bedrock</h2>
      <NavBarItems>
        <NavBarItem href="/">Dashboard</NavBarItem>
        <NavBarItem href="/components/button">Buttons</NavBarItem>
      </NavBarItems>
    </div>
  )
}
