import { IMAGES } from '../../config/images'
import ServiceCard from './ServiceCard'
import styles from './Servizi.module.css'

const SERVICES = [
  {
    title: 'Club',
    subtitle: 'The Sound Experience',
    description:
      "Il battito del dancefloor. Set eclettici che spaziano tra Urban e Open Format, studiati per leggere la pista e trasformare ogni set in un evento irripetibile.",
    image: IMAGES.club,
  },
  {
    title: 'Eventi',
    subtitle: 'Sound Design su Misura',
    description:
      "Dalle atmosfere aziendali ai private party più ricercati. Non solo musica, ma una regia sonora completa che fonde animazione e personalizzazione per dare un\u2019identità unica al tuo evento.",
    image: IMAGES.eventi,
  },
  {
    title: 'Foto',
    subtitle: 'Visual Storytelling',
    description:
      "Catturiamo l\u2019energia. Un reportage fotografico professionale che documenta l\u2019anima dell\u2019evento: scatti live e contenuti pronti per il web che parlano di emozioni e qualità.",
    image: IMAGES.foto,
  },
  {
    title: 'Grafica',
    subtitle: 'Brand Identity & Visual',
    description:
      "L\u2019immagine è il primo beat. Sviluppiamo l\u2019identità visiva del tuo progetto: dal logo alla comunicazione social, fino alle locandine, per un impatto estetico coordinato e d\u2019avanguardia.",
    image: IMAGES.grafica,
  },
]

export default function Servizi() {
  return (
    <section id="servizi" className={styles.grid}>
      {SERVICES.map((service, i) => (
        <ServiceCard key={service.title} {...service} align={i % 2 === 0 ? 'left' : 'right'} />
      ))}
    </section>
  )
}
