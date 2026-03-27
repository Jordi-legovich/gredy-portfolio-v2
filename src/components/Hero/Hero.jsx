import { IMAGES } from '../../config/images'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section
      id="hero"
      className={styles.hero}
      style={{ backgroundImage: `url(${IMAGES.background})` }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>We Are<br />A <span className={styles.strike}>Creative</span><br />Team</h1>
        <nav className={styles.mobileNav}>
          <a href="#chi-siamo">Chi Siamo</a>
          <a href="#servizi">Servizi</a>
        </nav>
      </div>
    </section>
  )
}
