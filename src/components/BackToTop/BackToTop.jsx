import { useScrollVisibility } from '../../hooks/useScrollVisibility'
import styles from './BackToTop.module.css'

export default function BackToTop() {
  const visible = useScrollVisibility()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Torna in cima"
    >
      ↑
    </button>
  )
}
