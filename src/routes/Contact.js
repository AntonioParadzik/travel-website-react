import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Contact (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={require("../assets/2.jpg")}
                title="Contact"
            />
        </>
    )
}

export default Contact;