import { useInView } from '../../hooks/useInView'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ title, subtitle, description, image, align = 'left' }) {
  const [ref, inView] = useInView(0.5)
  const cls = inView ? 'anim in-view' : 'anim'

  return (
    <article
      ref={ref}
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`${styles.content} ${align === 'right' ? styles.reversed : ''}`}>
        <div className={`${styles.text} ${cls}`}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </article>
  )
}
