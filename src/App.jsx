import Header from "./sections/Header/Header"
import Hero from "./sections/Hero/Hero"
import "./App.css"
import Banner from "./sections/Banner/Banner"
import About from "./sections/About/About"
import Services from "./sections/Services/Services"
import Slogan from "./sections/Slogan/Slogan"
import Footer from "./sections/Footer/Footer"
function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Banner/>
      <About/>
      <Services/>
      <Slogan/>
      <Footer/>
      </div>
    
  )
}

export default App
