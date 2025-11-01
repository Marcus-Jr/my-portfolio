import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Project"

const Home = () => {

  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default Home
