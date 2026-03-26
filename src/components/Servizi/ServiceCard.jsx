import styles from './ServiceCard.module.css'

export default function ServiceCard({ title, subtitle, description, image, align = 'left' }) {
  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`${styles.content} ${align === 'right' ? styles.reversed : ''}`}>
        <div className={styles.meta}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.body}>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </article>
  )
}
