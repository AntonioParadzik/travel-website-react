import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={require("../assets/night.jpg")}
                title="About"
            />
        </>
    )
}

export default About;