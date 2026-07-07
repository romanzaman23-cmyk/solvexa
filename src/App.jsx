import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Seo from './components/Seo'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Seo />
      <div className="fixed inset-0 -z-10 pointer-events-none gpu-layer">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-2xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-2xl opacity-60" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
