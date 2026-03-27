import { useInView } from '../../hooks/useInView'
import styles from './ChiSiamo.module.css'

export default function ChiSiamo() {
  const [ref, inView] = useInView(0.5)
  const cls = inView ? 'anim in-view' : 'anim'

  return (
    <section id="chi-siamo" className={styles.section} ref={ref}>
      <div className={cls}>
        <h2 className={styles.title}>
          WE ARE A <br /> CREATIVE <br /> TEAM
        </h2>
      </div>
      <div className={cls}>
        <p className={styles.body}>
          Siamo un collettivo creativo nato per trasformare ogni visione in
          un&apos;esperienza sensoriale completa. Progettiamo l&apos;atmosfera,
          catturiamo l&apos;emozione e costruiamo l&apos;identit&agrave; del tuo
          progetto attraverso una fusione perfetta di suono, immagine e design.
        </p>
      </div>
    </section>

  )
}
