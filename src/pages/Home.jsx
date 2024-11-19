import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Footbar from "../components/Footbar"
import { homeSection } from "../data/HomeSection"

import parse from 'html-react-parser'
import '../styles/Home.css'

function Home() {
  return (
    <>
    <Navbar/>
    <div className="wrapper">
    <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
            {parse(homeSection.content)}
            </div>
        </section>
    </div>
    <Footer/>
    <Footbar/>
    </>
  )
}

export default Home
