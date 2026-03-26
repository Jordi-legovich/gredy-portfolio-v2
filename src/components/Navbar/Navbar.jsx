import { IMAGES } from '../../config/images'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#hero" className={styles.logoLink}>
        <img src={IMAGES.logo} alt="DJ Gredy" className={styles.logo} />
      </a>
      <ul className={styles.links}>
        <li className={styles.desktopOnly}>
          <a href="#chi-siamo">Chi Siamo</a>
        </li>
        <li className={styles.desktopOnly}>
          <a href="#servizi">Servizi</a>
        </li>
        <li>
          <a href="#contatti">Contatti</a>
        </li>
      </ul>
    </nav>
  )
}
