import { IMAGES, VIDEOS } from '../../config/images'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <video
        className={styles.videoBg}
        autoPlay
        muted
        loop
        playsInline
        poster={IMAGES.background}
      >
        <source src={VIDEOS.background_webm} type="video/webm" />
        <source src={VIDEOS.background_mp4} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1 className={styles.title}>Esperienza e<br /> Visione per <br /> <span className={styles.strike}>Ogni Evento</span></h1>
        <nav className={styles.mobileNav}>
          <a href="#chi-siamo">Chi Siamo</a>
          <a href="#servizi">Servizi</a>
        </nav>
      </div>
    </section>
  )
}
