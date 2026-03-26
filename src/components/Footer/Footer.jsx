import { FaInstagram, FaFacebook } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a
          href="#"
          aria-label="Instagram"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
      <p className={styles.copy}>© 2025 DJ Gredy. All rights reserved.</p>
    </footer>
  )
}
