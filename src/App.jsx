import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ChiSiamo from './components/ChiSiamo/ChiSiamo'
import Servizi from './components/Servizi/Servizi'
import Contatti from './components/Contatti/Contatti'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChiSiamo />
        <Servizi />
        <Contatti />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
