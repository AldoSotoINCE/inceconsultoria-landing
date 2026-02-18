import WhatsappBubble from "./components/WhatsappBubble"
import AboutUs from "./pages/AboutUs"
import ContactMe from "./pages/ContactMe"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import HowWeWork from "./pages/HowWeWork"
import NavBar from "./pages/NavBar"
import Services from "./pages/Services"
import WhyChooseUs from "./pages/WhyChooseUs"

function App() {

  return (
    <>
        <NavBar/>
        <Hero/>
        <Services/>
        <AboutUs/>
        <HowWeWork/>
        <WhyChooseUs/>
        <ContactMe/>
        <Footer/>
        <WhatsappBubble/>
    </>
  )
}

export default App
