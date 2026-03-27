import { FaEnvelope, FaInstagram, FaMixcloud } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { useInView } from '../../hooks/useInView'
import styles from './Contatti.module.css'

const LINKS = [
  {
    icon: <FaEnvelope />,
    label: 'jordi.legovich@gmail.com',
    href: 'mailto:jordi.legovich@gmail.com',
  },
  {
    icon: <FaInstagram />,
    label: 'Instagram',
    href: 'https://www.instagram.com/djgredy/',
  },
  {
    icon: <FaTiktok />,
    label: 'TikTok',
    href: 'https://www.tiktok.com/@djgredy',
  },
  {
    icon: <FaMixcloud />,
    label: 'Mixcloud',
    href: 'https://www.mixcloud.com/djgredy/',
  },
]

export default function Contatti() {
  const [ref, inView] = useInView(0.5)
  const cls = inView ? 'anim in-view' : 'anim'

  return (
    <section id="contatti" className={styles.section} ref={ref}>
      <div className={cls}>
        <h2 className={styles.title}>Get in <span className={styles.strike}>Touch</span></h2>
        <ul className={styles.links}>
          {LINKS.map(({ icon, label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.link}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              >
                <span className={styles.icon}>{icon}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
