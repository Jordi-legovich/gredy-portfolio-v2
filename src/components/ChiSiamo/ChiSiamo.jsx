import styles from './ChiSiamo.module.css'

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className={styles.section}>
      <h2 className={styles.title}>
        WE ARE A <br /> CREATIVE <br /> TEAM
      </h2>
      <p className={styles.body}>
        Siamo un collettivo creativo nato per trasformare ogni visione in un’esperienza sensoriale completa. Progettiamo l’atmosfera, catturiamo l’emozione e costruiamo l’identità del tuo progetto attraverso una fusione perfetta di suono, immagine e design.
      </p>
    </section>
  )
}
