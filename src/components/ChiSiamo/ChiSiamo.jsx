import styles from './ChiSiamo.module.css'

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className={styles.section}>
      <h2 className={styles.title}>
        Esperienza<br />e Visione<br />per <span className={styles.strike}>Ogni</span><br /><span className={styles.strike}>Evento</span>
      </h2>
      <p className={styles.body}>
        Dj Gredy cresce immerso nella Black Music e scopre presto la passione
        per il DJing. Dai primi club fino ai locali più rinomati, si distingue
        per la sua capacità di far muovere il dancefloor.
        <br /><br />
        Oggi collabora con club in Italia e all'estero e coordina un team di
        professionisti per eventi di alto livello.
      </p>
    </section>
  )
}
