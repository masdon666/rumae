import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Lifestyle from './components/Lifestyle'
import Testimonial from './components/Testimonial'
import Cta from './components/Cta'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Lifestyle />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
