import styles from './Header.module.css'
import applicationLogo from '../assets/application-logo.svg'
export function Header() {
  return (
    <header className={styles.header}>
      
        <img src={applicationLogo}></img>

    </header>
  )
}