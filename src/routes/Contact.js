import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Contact (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={require("../assets/2.jpg")}
                title="Contact"
            />
            <Footer/>
        </>
    )
}

export default Contact;