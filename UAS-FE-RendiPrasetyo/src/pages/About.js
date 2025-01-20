import '../styles/About.css'
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { FaSquareSteam } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { IoMdFootball } from "react-icons/io";
function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>ABOUT</h3>
            <p>My name is Rendi Prasetyo. 22 Years Old. Interested in games, programming, and football.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam corporis repudiandae? Aperiam nisi nobis quia doloribus asperiores, in rerum omnis laudantium amet vitae cupiditate cum dolorum error velit culpa!</p>
            <h4>Skills & Hobby</h4>
            <div className="skills">
            <DiHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaReact/>
            <SiPhp />
            <SiKotlin />
            <FaSquareSteam/>
            <IoMdFootball />
            </div>
        </div>
    </section>
  )
}

export default About
