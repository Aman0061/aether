import Navbar from './Navbar'
import Hero from './Hero'
import Studio from './Studio'
import Projects from './Projects'
import Services from './Services'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="bg-[#F9F8F6] text-neutral-800 font-sans antialiased selection:bg-neutral-200 selection:text-black">
      <Navbar />
      <Hero />
      <Studio />
      <Projects />
      <Services />
      <Footer />
    </div>
  )
}

export default Home

